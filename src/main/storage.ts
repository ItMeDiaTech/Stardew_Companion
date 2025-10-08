import { app } from 'electron';
import * as fs from 'fs';
import * as path from 'path';
import { Note, DailyTask } from '@shared/types';

/**
 * Storage module for persisting user data (notes and tasks)
 * Data is stored in the app's userData directory as JSON files
 */

const USER_DATA_PATH = app.getPath('userData');
const NOTES_FILE = path.join(USER_DATA_PATH, 'notes.json');
const TASKS_FILE = path.join(USER_DATA_PATH, 'tasks.json');

/**
 * Ensure the userData directory exists
 */
function ensureUserDataDir(): void {
  if (!fs.existsSync(USER_DATA_PATH)) {
    fs.mkdirSync(USER_DATA_PATH, { recursive: true });
  }
}

/**
 * Read JSON file safely, return default value if file doesn't exist or is invalid
 */
function readJSONFile<T>(filePath: string, defaultValue: T): T {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(data) as T;
    }
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
  }
  return defaultValue;
}

/**
 * Write JSON file safely
 */
function writeJSONFile<T>(filePath: string, data: T): void {
  try {
    ensureUserDataDir();
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error(`Error writing ${filePath}:`, error);
    throw error;
  }
}

// Notes Storage

export function getAllNotes(): Note[] {
  return readJSONFile<Note[]>(NOTES_FILE, []);
}

export function saveNote(note: Note): Note[] {
  const notes = getAllNotes();
  notes.push(note);
  writeJSONFile(NOTES_FILE, notes);
  return notes;
}

export function updateNote(updatedNote: Note): Note[] {
  const notes = getAllNotes();
  const index = notes.findIndex(n => n.id === updatedNote.id);

  if (index !== -1) {
    notes[index] = updatedNote;
    writeJSONFile(NOTES_FILE, notes);
  }

  return notes;
}

export function deleteNote(noteId: string): Note[] {
  const notes = getAllNotes();
  const filtered = notes.filter(n => n.id !== noteId);
  writeJSONFile(NOTES_FILE, filtered);
  return filtered;
}

// Tasks Storage

export function getAllTasks(): DailyTask[] {
  return readJSONFile<DailyTask[]>(TASKS_FILE, []);
}

export function saveTask(task: DailyTask): DailyTask[] {
  const tasks = getAllTasks();
  tasks.push(task);
  writeJSONFile(TASKS_FILE, tasks);
  return tasks;
}

export function updateTask(updatedTask: DailyTask): DailyTask[] {
  const tasks = getAllTasks();
  const index = tasks.findIndex(t => t.id === updatedTask.id);

  if (index !== -1) {
    tasks[index] = updatedTask;
    writeJSONFile(TASKS_FILE, tasks);
  }

  return tasks;
}

export function deleteTask(taskId: string): DailyTask[] {
  const tasks = getAllTasks();
  const filtered = tasks.filter(t => t.id !== taskId);
  writeJSONFile(TASKS_FILE, filtered);
  return filtered;
}

export function toggleTask(taskId: string): DailyTask[] {
  const tasks = getAllTasks();
  const task = tasks.find(t => t.id === taskId);

  if (task) {
    task.completed = !task.completed;
    writeJSONFile(TASKS_FILE, tasks);
  }

  return tasks;
}

export function reorderTasks(reorderedTasks: DailyTask[]): DailyTask[] {
  writeJSONFile(TASKS_FILE, reorderedTasks);
  return reorderedTasks;
}

export function resetTasks(): DailyTask[] {
  const tasks = getAllTasks();
  tasks.forEach(task => {
    task.completed = false;
  });
  writeJSONFile(TASKS_FILE, tasks);
  return tasks;
}
