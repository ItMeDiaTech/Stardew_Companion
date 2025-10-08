import { BrowserWindow } from 'electron';
import { autoUpdater, UpdateInfo } from 'electron-updater';
import { IPC_CHANNELS } from '@shared/types';

export class AutoUpdater {
  private window: BrowserWindow;
  private updateAvailable: boolean = false;

  constructor(window: BrowserWindow) {
    this.window = window;
    this.initialize();
  }

  private initialize(): void {
    // Configure auto-updater
    autoUpdater.autoDownload = true;
    autoUpdater.autoInstallOnAppQuit = true;

    // Set up event handlers
    this.setupEventHandlers();

    // Check for updates on startup (after 3 seconds delay)
    setTimeout(() => {
      this.checkForUpdates();
    }, 3000);
  }

  private setupEventHandlers(): void {
    autoUpdater.on('checking-for-update', () => {
      console.log('Checking for updates...');
      this.sendToRenderer(IPC_CHANNELS.UPDATE_DOWNLOADING, {
        checking: true,
        available: false,
        downloading: false
      });
    });

    autoUpdater.on('update-available', (info: UpdateInfo) => {
      console.log('Update available:', info.version);
      this.updateAvailable = true;
      this.sendToRenderer(IPC_CHANNELS.UPDATE_AVAILABLE, {
        version: info.version,
        releaseDate: info.releaseDate,
        releaseNotes: info.releaseNotes
      });
    });

    autoUpdater.on('update-not-available', (info: UpdateInfo) => {
      console.log('No updates available. Current version:', info.version);
      this.sendToRenderer(IPC_CHANNELS.UPDATE_NOT_AVAILABLE, {
        checking: false,
        available: false,
        downloading: false
      });
    });

    autoUpdater.on('error', (error: Error) => {
      console.error('Update error:', error);
      this.sendToRenderer(IPC_CHANNELS.UPDATE_ERROR, {
        checking: false,
        available: false,
        downloading: false,
        error: error.message
      });
    });

    autoUpdater.on('download-progress', (progressObj) => {
      console.log(`Download progress: ${progressObj.percent}%`);
      this.sendToRenderer(IPC_CHANNELS.UPDATE_DOWNLOADING, {
        checking: false,
        available: true,
        downloading: true,
        progress: progressObj.percent
      });
    });

    autoUpdater.on('update-downloaded', (info: UpdateInfo) => {
      console.log('Update downloaded:', info.version);
      this.sendToRenderer(IPC_CHANNELS.UPDATE_DOWNLOADED, {
        version: info.version,
        releaseDate: info.releaseDate,
        releaseNotes: info.releaseNotes
      });
    });
  }

  private sendToRenderer(channel: string, data: any): void {
    if (this.window && !this.window.isDestroyed()) {
      this.window.webContents.send(channel, data);
    }
  }

  public checkForUpdates(): void {
    if (process.env.NODE_ENV === 'development') {
      console.log('Auto-update disabled in development mode');
      return;
    }

    autoUpdater.checkForUpdates().catch((error) => {
      console.error('Failed to check for updates:', error);
    });
  }

  public downloadUpdate(): void {
    if (this.updateAvailable) {
      autoUpdater.downloadUpdate().catch((error) => {
        console.error('Failed to download update:', error);
      });
    }
  }

  public quitAndInstall(): void {
    autoUpdater.quitAndInstall(false, true);
  }
}
