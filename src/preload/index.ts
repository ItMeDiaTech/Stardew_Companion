import { contextBridge, ipcRenderer } from 'electron';
import { IPC_CHANNELS, AppInfo, UpdateInfo, UpdateStatus, Note, DailyTask } from '@shared/types';

/**
 * Preload script - Bridge between main and renderer processes
 * Exposes secure IPC methods to the renderer via contextBridge
 */

// Define the API that will be exposed to the renderer
const electronAPI = {
  // App info
  getAppInfo: (): Promise<AppInfo> => {
    return ipcRenderer.invoke(IPC_CHANNELS.GET_APP_INFO);
  },

  // Window controls
  minimizeWindow: (): void => {
    ipcRenderer.send(IPC_CHANNELS.MINIMIZE_WINDOW);
  },

  maximizeWindow: (): void => {
    ipcRenderer.send(IPC_CHANNELS.MAXIMIZE_WINDOW);
  },

  closeWindow: (): void => {
    ipcRenderer.send(IPC_CHANNELS.CLOSE_WINDOW);
  },

  // Update controls
  checkForUpdates: (): void => {
    ipcRenderer.send(IPC_CHANNELS.CHECK_FOR_UPDATES);
  },

  installUpdate: (): void => {
    ipcRenderer.send(IPC_CHANNELS.INSTALL_UPDATE);
  },

  // Update listeners
  onUpdateAvailable: (callback: (info: UpdateInfo) => void) => {
    const listener = (_event: any, info: UpdateInfo) => callback(info);
    ipcRenderer.on(IPC_CHANNELS.UPDATE_AVAILABLE, listener);

    return () => {
      ipcRenderer.removeListener(IPC_CHANNELS.UPDATE_AVAILABLE, listener);
    };
  },

  onUpdateNotAvailable: (callback: (status: UpdateStatus) => void) => {
    const listener = (_event: any, status: UpdateStatus) => callback(status);
    ipcRenderer.on(IPC_CHANNELS.UPDATE_NOT_AVAILABLE, listener);

    return () => {
      ipcRenderer.removeListener(IPC_CHANNELS.UPDATE_NOT_AVAILABLE, listener);
    };
  },

  onUpdateDownloading: (callback: (status: UpdateStatus) => void) => {
    const listener = (_event: any, status: UpdateStatus) => callback(status);
    ipcRenderer.on(IPC_CHANNELS.UPDATE_DOWNLOADING, listener);

    return () => {
      ipcRenderer.removeListener(IPC_CHANNELS.UPDATE_DOWNLOADING, listener);
    };
  },

  onUpdateDownloaded: (callback: (info: UpdateInfo) => void) => {
    const listener = (_event: any, info: UpdateInfo) => callback(info);
    ipcRenderer.on(IPC_CHANNELS.UPDATE_DOWNLOADED, listener);

    return () => {
      ipcRenderer.removeListener(IPC_CHANNELS.UPDATE_DOWNLOADED, listener);
    };
  },

  onUpdateError: (callback: (status: UpdateStatus) => void) => {
    const listener = (_event: any, status: UpdateStatus) => callback(status);
    ipcRenderer.on(IPC_CHANNELS.UPDATE_ERROR, listener);

    return () => {
      ipcRenderer.removeListener(IPC_CHANNELS.UPDATE_ERROR, listener);
    };
  },

  // Notes API
  getNotes: (): Promise<Note[]> => {
    return ipcRenderer.invoke(IPC_CHANNELS.GET_NOTES);
  },

  saveNote: (note: Note): Promise<Note[]> => {
    return ipcRenderer.invoke(IPC_CHANNELS.SAVE_NOTE, note);
  },

  updateNote: (note: Note): Promise<Note[]> => {
    return ipcRenderer.invoke(IPC_CHANNELS.UPDATE_NOTE, note);
  },

  deleteNote: (noteId: string): Promise<Note[]> => {
    return ipcRenderer.invoke(IPC_CHANNELS.DELETE_NOTE, noteId);
  },

  // Tasks API
  getTasks: (): Promise<DailyTask[]> => {
    return ipcRenderer.invoke(IPC_CHANNELS.GET_TASKS);
  },

  saveTask: (task: DailyTask): Promise<DailyTask[]> => {
    return ipcRenderer.invoke(IPC_CHANNELS.SAVE_TASK, task);
  },

  updateTask: (task: DailyTask): Promise<DailyTask[]> => {
    return ipcRenderer.invoke(IPC_CHANNELS.UPDATE_TASK, task);
  },

  deleteTask: (taskId: string): Promise<DailyTask[]> => {
    return ipcRenderer.invoke(IPC_CHANNELS.DELETE_TASK, taskId);
  },

  toggleTask: (taskId: string): Promise<DailyTask[]> => {
    return ipcRenderer.invoke(IPC_CHANNELS.TOGGLE_TASK, taskId);
  },

  reorderTasks: (tasks: DailyTask[]): Promise<DailyTask[]> => {
    return ipcRenderer.invoke(IPC_CHANNELS.REORDER_TASKS, tasks);
  },

  resetTasks: (): Promise<DailyTask[]> => {
    return ipcRenderer.invoke(IPC_CHANNELS.RESET_TASKS);
  }
};

// Expose the API to the renderer process
contextBridge.exposeInMainWorld('electronAPI', electronAPI);

// Type declaration for TypeScript support in renderer
export type ElectronAPI = typeof electronAPI;
