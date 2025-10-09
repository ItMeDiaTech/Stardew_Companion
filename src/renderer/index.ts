import './styles.css';
import { ElectronAPI } from '@preload/index';
import { AppInfo, UpdateInfo, UpdateStatus } from '@shared/types';

// Extend the Window interface to include our electronAPI
declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}

const { electronAPI } = window;

// DOM Elements
const appVersionEl = document.getElementById('app-version') as HTMLElement;
const appInfoEl = document.getElementById('app-info') as HTMLElement;
const platformInfoEl = document.getElementById('platform-info') as HTMLElement;
const checkUpdatesBtn = document.getElementById('check-updates-btn') as HTMLButtonElement;
const updateStatusEl = document.getElementById('update-status') as HTMLElement;

// Sidebar elements
const sidebar = document.querySelector('.sidebar') as HTMLElement;
const sidebarToggle = document.getElementById('sidebar-toggle') as HTMLButtonElement;
const sidebarVersion = document.getElementById('sidebar-version') as HTMLElement;

// Window control buttons
const minimizeBtn = document.getElementById('minimize-btn') as HTMLButtonElement;
const maximizeBtn = document.getElementById('maximize-btn') as HTMLButtonElement;
const closeBtn = document.getElementById('close-btn') as HTMLButtonElement;

// Initialize app
async function init() {
  const appInfo = await electronAPI.getAppInfo();
  displayAppInfo(appInfo);
  setupWindowControls();
  setupSidebar();
  setupUpdateListeners();
}

function displayAppInfo(info: AppInfo) {
  // Update version in titlebar
  appVersionEl.textContent = `v${info.version}`;

  // Display app info
  appInfoEl.innerHTML = `
    <div><strong>Name:</strong> ${info.name}</div>
    <div><strong>Version:</strong> ${info.version}</div>
    <div><strong>Platform:</strong> ${info.platform}</div>
  `;

  // Update platform info in statusbar
  platformInfoEl.textContent = `${info.platform} | v${info.version}`;

  // Update sidebar version
  if (sidebarVersion) {
    sidebarVersion.textContent = `v${info.version}`;
  }
}

function setupWindowControls() {
  minimizeBtn.addEventListener('click', () => {
    electronAPI.minimizeWindow();
  });

  maximizeBtn.addEventListener('click', () => {
    electronAPI.maximizeWindow();
  });

  closeBtn.addEventListener('click', () => {
    electronAPI.closeWindow();
  });
}

function setupSidebar() {
  if (!sidebar || !sidebarToggle) return;

  // Load saved sidebar state
  const sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
  if (sidebarCollapsed) {
    sidebar.classList.add('collapsed');
  }

  // Toggle sidebar on button click
  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    const isCollapsed = sidebar.classList.contains('collapsed');
    localStorage.setItem('sidebarCollapsed', isCollapsed.toString());
  });
}

function setupUpdateListeners() {
  // Check for updates button
  checkUpdatesBtn.addEventListener('click', () => {
    electronAPI.checkForUpdates();
    checkUpdatesBtn.disabled = true;
  });

  // Update available
  electronAPI.onUpdateAvailable((info: UpdateInfo) => {
    showUpdateStatus(
      'available',
      `Update available: v${info.version}\n${info.releaseNotes || 'Download will start automatically.'}`
    );
    checkUpdatesBtn.disabled = false;
  });

  // Update not available
  electronAPI.onUpdateNotAvailable(() => {
    showUpdateStatus('not-available', 'You are running the latest version.');
    checkUpdatesBtn.disabled = false;
  });

  // Update downloading
  electronAPI.onUpdateDownloading((status: UpdateStatus) => {
    if (status.checking) {
      showUpdateStatus('checking', 'Checking for updates...');
    } else if (status.downloading && status.progress !== undefined) {
      showUpdateStatus(
        'downloading',
        `Downloading update: ${Math.round(status.progress)}%`,
        status.progress
      );
    }
  });

  // Update downloaded
  electronAPI.onUpdateDownloaded((info: UpdateInfo) => {
    showUpdateStatus(
      'downloaded',
      `Update v${info.version} downloaded. Click to install and restart.`,
      undefined,
      true
    );
    checkUpdatesBtn.disabled = false;
  });

  // Update error
  electronAPI.onUpdateError((status: UpdateStatus) => {
    showUpdateStatus('error', `Update error: ${status.error || 'Unknown error'}`);
    checkUpdatesBtn.disabled = false;
  });
}

function showUpdateStatus(
  type: 'checking' | 'available' | 'not-available' | 'downloading' | 'downloaded' | 'error',
  message: string,
  progress?: number,
  installable: boolean = false
) {
  updateStatusEl.className = `update-status show ${type}`;

  let html = `<div>${message}</div>`;

  if (progress !== undefined) {
    html += `
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${progress}%"></div>
      </div>
    `;
  }

  if (installable) {
    html += `<button class="primary-btn" id="install-update-btn" style="margin-top: 12px;">Install and Restart</button>`;
  }

  updateStatusEl.innerHTML = html;

  if (installable) {
    const installBtn = document.getElementById('install-update-btn') as HTMLButtonElement;
    installBtn.addEventListener('click', () => {
      electronAPI.installUpdate();
    });
  }
}

// Start the app
init();
