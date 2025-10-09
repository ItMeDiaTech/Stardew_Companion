/**
 * Shared sidebar utility functions
 * Used across all pages for consistent sidebar behavior
 */

export function setupSidebar(): void {
  const sidebar = document.querySelector('.sidebar') as HTMLElement;
  const sidebarToggle = document.getElementById('sidebar-toggle') as HTMLButtonElement;
  const sidebarVersion = document.getElementById('sidebar-version') as HTMLElement;

  if (!sidebar || !sidebarToggle) return;

  // Load saved sidebar state from localStorage
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

export function updateSidebarVersion(version: string): void {
  const sidebarVersion = document.getElementById('sidebar-version') as HTMLElement;
  if (sidebarVersion) {
    sidebarVersion.textContent = `v${version}`;
  }
}

// Window control utilities
export function setupWindowControls(): void {
  const minimizeBtn = document.getElementById('minimize-btn') as HTMLButtonElement;
  const maximizeBtn = document.getElementById('maximize-btn') as HTMLButtonElement;
  const closeBtn = document.getElementById('close-btn') as HTMLButtonElement;

  if (!window.electronAPI) return;

  minimizeBtn?.addEventListener('click', () => {
    window.electronAPI.minimizeWindow();
  });

  maximizeBtn?.addEventListener('click', () => {
    window.electronAPI.maximizeWindow();
  });

  closeBtn?.addEventListener('click', () => {
    window.electronAPI.closeWindow();
  });
}
