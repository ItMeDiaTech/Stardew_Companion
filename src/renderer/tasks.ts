import './tasks.css';
import { ElectronAPI } from '@preload/index';
import { DailyTask } from '@shared/types';
import { setupSidebar, setupWindowControls } from './sidebar';

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}

const { electronAPI } = window;

// DOM Elements
const tasksList = document.getElementById('tasks-list') as HTMLElement;
const newTaskInput = document.getElementById('new-task-input') as HTMLInputElement;
const addTaskBtn = document.getElementById('add-task-btn') as HTMLButtonElement;
const resetTasksBtn = document.getElementById('reset-tasks-btn') as HTMLButtonElement;
const progressText = document.getElementById('progress-text') as HTMLElement;
const progressPercentage = document.getElementById('progress-percentage') as HTMLElement;
const progressBar = document.getElementById('progress-bar') as HTMLElement;
const taskCountEl = document.getElementById('task-count') as HTMLElement;

// State
let tasks: DailyTask[] = [];

// Initialize
async function init() {
  setupSidebar();
  setupWindowControls();
  await loadTasks();
  setupEventListeners();
}

async function loadTasks() {
  try {
    tasks = await electronAPI.getTasks();
    tasks.sort((a, b) => a.order - b.order);
    renderTasks();
    updateProgress();
    updateTaskCount();
  } catch (error) {
    console.error('Failed to load tasks:', error);
  }
}

function setupEventListeners() {
  addTaskBtn.addEventListener('click', handleAddTask);
  newTaskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  });
  resetTasksBtn.addEventListener('click', handleResetTasks);

  // Quick add buttons
  document.querySelectorAll('.quick-add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const taskContent = btn.getAttribute('data-task');
      if (taskContent) {
        addTask(taskContent);
      }
    });
  });
}

function renderTasks() {
  if (tasks.length === 0) {
    tasksList.innerHTML = `
      <div class="empty-state">
        <svg width="64" height="64" viewBox="0 0 16 16" fill="currentColor" opacity="0.3">
          <path d="M14 2H2v12h12V2zM6 12L3 9l1-1 2 2 4-4 1 1-5 5z"/>
        </svg>
        <p>No tasks yet</p>
        <p class="hint">Add your first daily task to get started</p>
      </div>
    `;
    return;
  }

  tasksList.innerHTML = tasks
    .map(task => {
      const completedClass = task.completed ? 'completed' : '';
      return `
        <div class="task-item ${completedClass}" data-task-id="${task.id}">
          <input
            type="checkbox"
            class="task-checkbox"
            ${task.completed ? 'checked' : ''}
            data-task-id="${task.id}"
          >
          <span class="task-text">${escapeHtml(task.content)}</span>
          <div class="task-actions">
            <button class="task-action-btn move-up" data-task-id="${task.id}" title="Move up">↑</button>
            <button class="task-action-btn move-down" data-task-id="${task.id}" title="Move down">↓</button>
            <button class="task-action-btn delete" data-task-id="${task.id}" title="Delete">×</button>
          </div>
        </div>
      `;
    })
    .join('');

  // Add event listeners
  document.querySelectorAll('.task-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', async (e) => {
      const target = e.target as HTMLInputElement;
      const taskId = target.getAttribute('data-task-id');
      if (taskId) {
        await handleToggleTask(taskId);
      }
    });
  });

  document.querySelectorAll('.task-action-btn.move-up').forEach(btn => {
    btn.addEventListener('click', async () => {
      const taskId = btn.getAttribute('data-task-id');
      if (taskId) {
        await handleMoveTask(taskId, -1);
      }
    });
  });

  document.querySelectorAll('.task-action-btn.move-down').forEach(btn => {
    btn.addEventListener('click', async () => {
      const taskId = btn.getAttribute('data-task-id');
      if (taskId) {
        await handleMoveTask(taskId, 1);
      }
    });
  });

  document.querySelectorAll('.task-action-btn.delete').forEach(btn => {
    btn.addEventListener('click', async () => {
      const taskId = btn.getAttribute('data-task-id');
      if (taskId) {
        await handleDeleteTask(taskId);
      }
    });
  });
}

async function handleAddTask() {
  const content = newTaskInput.value.trim();
  if (!content) return;

  await addTask(content);
  newTaskInput.value = '';
  newTaskInput.focus();
}

async function addTask(content: string) {
  const maxOrder = tasks.length > 0 ? Math.max(...tasks.map(t => t.order)) : -1;
  const newTask: DailyTask = {
    id: generateId(),
    content: content,
    completed: false,
    order: maxOrder + 1,
    createdAt: Date.now()
  };

  try {
    tasks = await electronAPI.saveTask(newTask);
    tasks.sort((a, b) => a.order - b.order);
    renderTasks();
    updateProgress();
    updateTaskCount();
  } catch (error) {
    console.error('Failed to add task:', error);
  }
}

async function handleToggleTask(taskId: string) {
  try {
    tasks = await electronAPI.toggleTask(taskId);
    tasks.sort((a, b) => a.order - b.order);
    renderTasks();
    updateProgress();
  } catch (error) {
    console.error('Failed to toggle task:', error);
  }
}

async function handleDeleteTask(taskId: string) {
  try {
    tasks = await electronAPI.deleteTask(taskId);
    tasks.sort((a, b) => a.order - b.order);
    renderTasks();
    updateProgress();
    updateTaskCount();
  } catch (error) {
    console.error('Failed to delete task:', error);
  }
}

async function handleMoveTask(taskId: string, direction: number) {
  const index = tasks.findIndex(t => t.id === taskId);
  if (index === -1) return;

  const newIndex = index + direction;
  if (newIndex < 0 || newIndex >= tasks.length) return;

  // Swap orders
  const temp = tasks[index].order;
  tasks[index].order = tasks[newIndex].order;
  tasks[newIndex].order = temp;

  // Sort and reorder
  tasks.sort((a, b) => a.order - b.order);

  try {
    tasks = await electronAPI.reorderTasks(tasks);
    renderTasks();
  } catch (error) {
    console.error('Failed to reorder tasks:', error);
  }
}

async function handleResetTasks() {
  if (tasks.length === 0) return;

  const confirmed = confirm('Reset all tasks? This will uncheck all completed tasks.');
  if (!confirmed) return;

  try {
    tasks = await electronAPI.resetTasks();
    tasks.sort((a, b) => a.order - b.order);
    renderTasks();
    updateProgress();
  } catch (error) {
    console.error('Failed to reset tasks:', error);
  }
}

function updateProgress() {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  progressText.textContent = `${completed} / ${total} tasks completed`;
  progressPercentage.textContent = `${percentage}%`;
  progressBar.style.width = `${percentage}%`;
}

function updateTaskCount() {
  taskCountEl.textContent = `${tasks.length} task${tasks.length !== 1 ? 's' : ''}`;
}

function generateId(): string {
  return `task_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Start the app
init();
