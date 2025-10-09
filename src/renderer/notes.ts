import './notes.css';
import { ElectronAPI } from '@preload/index';
import { Note } from '@shared/types';
import { setupSidebar, setupWindowControls } from './sidebar';

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}

const { electronAPI } = window;

// DOM Elements
const notesList = document.getElementById('notes-list') as HTMLElement;
const searchInput = document.getElementById('search-input') as HTMLInputElement;
const newNoteBtn = document.getElementById('new-note-btn') as HTMLButtonElement;
const noNoteSelected = document.getElementById('no-note-selected') as HTMLElement;
const noteEditor = document.getElementById('note-editor') as HTMLElement;
const noteTitleInput = document.getElementById('note-title') as HTMLInputElement;
const noteContentInput = document.getElementById('note-content') as HTMLTextAreaElement;
const deleteNoteBtn = document.getElementById('delete-note-btn') as HTMLButtonElement;
const noteMetaEl = document.getElementById('note-meta') as HTMLElement;
const saveStatusEl = document.getElementById('save-status') as HTMLElement;
const noteCountEl = document.getElementById('note-count') as HTMLElement;

// State
let notes: Note[] = [];
let currentNote: Note | null = null;
let searchTerm = '';
let saveTimeout: NodeJS.Timeout | null = null;

// Initialize
async function init() {
  setupSidebar();
  setupWindowControls();
  await loadNotes();
  setupEventListeners();
}

async function loadNotes() {
  try {
    notes = await electronAPI.getNotes();
    notes.sort((a, b) => b.updatedAt - a.updatedAt);
    renderNotesList();
    updateNoteCount();
  } catch (error) {
    console.error('Failed to load notes:', error);
  }
}

function setupEventListeners() {
  newNoteBtn.addEventListener('click', createNewNote);
  searchInput.addEventListener('input', handleSearch);
  noteTitleInput.addEventListener('input', handleTitleChange);
  noteContentInput.addEventListener('input', handleContentChange);
  deleteNoteBtn.addEventListener('click', handleDeleteNote);
}

function renderNotesList() {
  const filteredNotes = searchTerm
    ? notes.filter(note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : notes;

  if (filteredNotes.length === 0) {
    notesList.innerHTML = `
      <div class="empty-state">
        <p>${searchTerm ? 'No notes found' : 'No notes yet'}</p>
        <p class="hint">${searchTerm ? 'Try a different search' : 'Click "New" to create your first note'}</p>
      </div>
    `;
    return;
  }

  notesList.innerHTML = filteredNotes
    .map(note => {
      const preview = note.content.substring(0, 60) || 'Empty note';
      const date = new Date(note.updatedAt).toLocaleDateString();
      const isActive = currentNote?.id === note.id ? 'active' : '';

      return `
        <div class="note-item ${isActive}" data-note-id="${note.id}">
          <div class="note-item-title">${escapeHtml(note.title || 'Untitled')}</div>
          <div class="note-item-preview">${escapeHtml(preview)}</div>
          <div class="note-item-date">${date}</div>
        </div>
      `;
    })
    .join('');

  // Add click listeners
  document.querySelectorAll('.note-item').forEach(item => {
    item.addEventListener('click', () => {
      const noteId = item.getAttribute('data-note-id');
      if (noteId) {
        selectNote(noteId);
      }
    });
  });
}

async function createNewNote() {
  const now = Date.now();
  const newNote: Note = {
    id: generateId(),
    title: '',
    content: '',
    createdAt: now,
    updatedAt: now
  };

  try {
    notes = await electronAPI.saveNote(newNote);
    notes.sort((a, b) => b.updatedAt - a.updatedAt);
    renderNotesList();
    updateNoteCount();
    selectNote(newNote.id);
    noteTitleInput.focus();
  } catch (error) {
    console.error('Failed to create note:', error);
  }
}

function selectNote(noteId: string) {
  const note = notes.find(n => n.id === noteId);
  if (!note) return;

  currentNote = note;
  noNoteSelected.style.display = 'none';
  noteEditor.style.display = 'flex';

  noteTitleInput.value = note.title;
  noteContentInput.value = note.content;

  updateNoteMeta();
  renderNotesList();
}

function handleSearch() {
  searchTerm = searchInput.value;
  renderNotesList();
}

function handleTitleChange() {
  if (!currentNote) return;
  currentNote.title = noteTitleInput.value;
  scheduleSave();
}

function handleContentChange() {
  if (!currentNote) return;
  currentNote.content = noteContentInput.value;
  scheduleSave();
}

function scheduleSave() {
  if (!currentNote) return;

  saveStatusEl.textContent = 'Saving...';
  saveStatusEl.className = 'save-status saving';

  if (saveTimeout) {
    clearTimeout(saveTimeout);
  }

  saveTimeout = setTimeout(() => {
    saveCurrentNote();
  }, 500);
}

async function saveCurrentNote() {
  if (!currentNote) return;

  currentNote.updatedAt = Date.now();

  try {
    notes = await electronAPI.updateNote(currentNote);
    notes.sort((a, b) => b.updatedAt - a.updatedAt);
    renderNotesList();
    updateNoteMeta();
    saveStatusEl.textContent = 'Saved';
    saveStatusEl.className = 'save-status';
  } catch (error) {
    console.error('Failed to save note:', error);
    saveStatusEl.textContent = 'Error saving';
    saveStatusEl.className = 'save-status';
  }
}

async function handleDeleteNote() {
  if (!currentNote) return;

  const confirmDelete = confirm(`Delete note "${currentNote.title || 'Untitled'}"?`);
  if (!confirmDelete) return;

  try {
    notes = await electronAPI.deleteNote(currentNote.id);
    currentNote = null;
    noNoteSelected.style.display = 'flex';
    noteEditor.style.display = 'none';
    renderNotesList();
    updateNoteCount();
  } catch (error) {
    console.error('Failed to delete note:', error);
  }
}

function updateNoteMeta() {
  if (!currentNote) return;

  const created = new Date(currentNote.createdAt).toLocaleDateString();
  const updated = new Date(currentNote.updatedAt).toLocaleDateString();
  noteMetaEl.textContent = `Created: ${created} | Updated: ${updated}`;
}

function updateNoteCount() {
  noteCountEl.textContent = `${notes.length} note${notes.length !== 1 ? 's' : ''}`;
}

function generateId(): string {
  return `note_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Start the app
init();
