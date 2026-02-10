// Load current settings when popup opens
document.addEventListener('DOMContentLoaded', async () => {
  const { settings } = await chrome.storage.sync.get('settings');
  
  if (settings) {
    // Update toggle switches based on saved settings
    for (const [key, service] of Object.entries(settings)) {
      const toggle = document.getElementById(`toggle-${key}`);
      if (toggle) {
        toggle.checked = service.enabled;
      }
    }
  }
  
  // Add event listeners to all toggles
  const toggles = document.querySelectorAll('input[type="checkbox"]');
  toggles.forEach(toggle => {
    toggle.addEventListener('change', handleToggleChange);
  });
});

// Handle toggle changes
async function handleToggleChange(event) {
  const toggleId = event.target.id;
  const service = toggleId.replace('toggle-', '');
  const isEnabled = event.target.checked;
  
  // Get current settings
  const { settings } = await chrome.storage.sync.get('settings');
  
  // Update the specific service
  if (settings && settings[service]) {
    settings[service].enabled = isEnabled;
    
    // Save updated settings
    await chrome.storage.sync.set({ settings });
    
    // Notify background script to update context menus
    chrome.runtime.sendMessage({ action: 'updateMenus' });
    
    // Show status message
    showStatusMessage();
  }
}

// Show temporary status message
function showStatusMessage() {
  const statusMessage = document.getElementById('status-message');
  statusMessage.classList.add('show');
  
  setTimeout(() => {
    statusMessage.classList.remove('show');
  }, 2000);
}
