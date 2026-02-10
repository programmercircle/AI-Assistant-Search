// Default settings for AI services
const DEFAULT_SETTINGS = {
  claude: { enabled: true, name: 'Claude' },
  chatgpt: { enabled: true, name: 'ChatGPT' },
  grok: { enabled: true, name: 'Grok' },
  perplexity: { enabled: true, name: 'Perplexity' },
  gemini: { enabled: true, name: 'Gemini' },
  copilot: { enabled: true, name: 'Copilot' }
};

// AI service URLs
const AI_SERVICES = {
  claude: {
    url: 'https://claude.ai/new',
    // Claude uses query parameter for pre-filled text
    getUrl: (text) => `https://claude.ai/new?q=${encodeURIComponent(text)}`
  },
  chatgpt: {
    url: 'https://chat.openai.com/',
    // ChatGPT doesn't support URL parameters for pre-filled text
    // We'll need to open it and use a content script to fill it
    getUrl: (text) => `https://chat.openai.com/?q=${encodeURIComponent(text)}`
  },
  grok: {
    url: 'https://x.com/i/grok',
    getUrl: (text) => `https://x.com/i/grok?q=${encodeURIComponent(text)}`
  },
  perplexity: {
    url: 'https://www.perplexity.ai/',
    getUrl: (text) => `https://www.perplexity.ai/?q=${encodeURIComponent(text)}`
  },
  gemini: {
    url: 'https://gemini.google.com/',
    getUrl: (text) => `https://gemini.google.com/app?q=${encodeURIComponent(text)}`
  },
  copilot: {
    url: 'https://copilot.microsoft.com/',
    getUrl: (text) => `https://copilot.microsoft.com/?q=${encodeURIComponent(text)}`
  }
};

// Initialize extension
chrome.runtime.onInstalled.addListener(async () => {
  // Set default settings
  const stored = await chrome.storage.sync.get('settings');
  if (!stored.settings) {
    await chrome.storage.sync.set({ settings: DEFAULT_SETTINGS });
  }
  
  // Create context menus
  updateContextMenus();
});

// Update context menus based on settings
async function updateContextMenus() {
  // Remove all existing menus
  await chrome.contextMenus.removeAll();
  
  // Get current settings
  const { settings } = await chrome.storage.sync.get('settings');
  const currentSettings = settings || DEFAULT_SETTINGS;
  
  // Create parent menu
  chrome.contextMenus.create({
    id: 'ai-search-parent',
    title: 'Search with AI',
    contexts: ['selection']
  });
  
  // Create menu items for enabled services
  for (const [key, service] of Object.entries(currentSettings)) {
    if (service.enabled) {
      chrome.contextMenus.create({
        id: `ai-search-${key}`,
        parentId: 'ai-search-parent',
        title: service.name,
        contexts: ['selection']
      });
    }
  }
}

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId.startsWith('ai-search-')) {
    const service = info.menuItemId.replace('ai-search-', '');
    const selectedText = info.selectionText;
    
    if (selectedText && AI_SERVICES[service]) {
      // Open the AI service with the selected text
      const url = AI_SERVICES[service].getUrl(selectedText);
      chrome.tabs.create({ url: url });
    }
  }
});

// Listen for settings changes
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'sync' && changes.settings) {
    updateContextMenus();
  }
});

// Handle messages from popup or content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'updateMenus') {
    updateContextMenus().then(() => {
      sendResponse({ success: true });
    });
    return true; // Keep channel open for async response
  }
});
