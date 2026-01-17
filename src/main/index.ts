import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import { AutoUpdater } from './auto-updater';
import { IPC_CHANNELS, AppInfo, Note, DailyTask } from '@shared/types';
import * as storage from './storage';

let mainWindow: BrowserWindow | null = null;
let autoUpdater: AutoUpdater;

function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    frame: false, // Remove default menu bar for sleek look
    backgroundColor: '#1e1e1e', // Prevent white flash on load/navigation
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, '../preload/index.js')
    },
    title: 'Stardew Companion',
    show: false
  });

  // Load the app
  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:8080');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));
  }

  // Show window when ready
  mainWindow.once('ready-to-show', () => {
    mainWindow?.show();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function setupIpcHandlers(): void {
  // Get app info
  ipcMain.handle(IPC_CHANNELS.GET_APP_INFO, (): AppInfo => {
    return {
      name: app.getName(),
      version: app.getVersion(),
      platform: process.platform
    };
  });

  // Window controls
  ipcMain.on(IPC_CHANNELS.MINIMIZE_WINDOW, () => {
    mainWindow?.minimize();
  });

  ipcMain.on(IPC_CHANNELS.MAXIMIZE_WINDOW, () => {
    if (mainWindow?.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow?.maximize();
    }
  });

  ipcMain.on(IPC_CHANNELS.CLOSE_WINDOW, () => {
    mainWindow?.close();
  });

  // Update controls
  ipcMain.on(IPC_CHANNELS.CHECK_FOR_UPDATES, () => {
    autoUpdater.checkForUpdates();
  });

  ipcMain.on(IPC_CHANNELS.INSTALL_UPDATE, () => {
    autoUpdater.quitAndInstall();
  });

  // Notes handlers
  ipcMain.handle(IPC_CHANNELS.GET_NOTES, (): Note[] => {
    return storage.getAllNotes();
  });

  ipcMain.handle(IPC_CHANNELS.SAVE_NOTE, (_event, note: Note): Note[] => {
    return storage.saveNote(note);
  });

  ipcMain.handle(IPC_CHANNELS.UPDATE_NOTE, (_event, note: Note): Note[] => {
    return storage.updateNote(note);
  });

  ipcMain.handle(IPC_CHANNELS.DELETE_NOTE, (_event, noteId: string): Note[] => {
    return storage.deleteNote(noteId);
  });

  // Tasks handlers
  ipcMain.handle(IPC_CHANNELS.GET_TASKS, (): DailyTask[] => {
    return storage.getAllTasks();
  });

  ipcMain.handle(IPC_CHANNELS.SAVE_TASK, (_event, task: DailyTask): DailyTask[] => {
    return storage.saveTask(task);
  });

  ipcMain.handle(IPC_CHANNELS.UPDATE_TASK, (_event, task: DailyTask): DailyTask[] => {
    return storage.updateTask(task);
  });

  ipcMain.handle(IPC_CHANNELS.DELETE_TASK, (_event, taskId: string): DailyTask[] => {
    return storage.deleteTask(taskId);
  });

  ipcMain.handle(IPC_CHANNELS.TOGGLE_TASK, (_event, taskId: string): DailyTask[] => {
    return storage.toggleTask(taskId);
  });

  ipcMain.handle(IPC_CHANNELS.REORDER_TASKS, (_event, tasks: DailyTask[]): DailyTask[] => {
    return storage.reorderTasks(tasks);
  });

  ipcMain.handle(IPC_CHANNELS.RESET_TASKS, (): DailyTask[] => {
    return storage.resetTasks();
  });
}

app.on('ready', () => {
  createWindow();
  setupIpcHandlers();

  // Initialize auto-updater
  if (mainWindow) {
    autoUpdater = new AutoUpdater(mainWindow);
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
