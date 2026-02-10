# AI Assistant Search - Chrome Extension

A Chrome extension that allows you to quickly search selected text with Claude, ChatGPT, Grok, or Perplexity using your existing login sessions.

## Features

- 🔍 **Right-click Context Menu**: Select text on any webpage and search with your preferred AI assistant
- 🔐 **Uses Your Existing Logins**: Leverages your existing browser sessions - no need to log in again
- ⚙️ **Customizable**: Enable/disable specific AI services from the settings popup
- 🎯 **Auto-fill Query**: Automatically fills the selected text into the AI assistant's input field
- 🎨 **Clean Interface**: Simple, modern design with toggle switches for each service

## Supported AI Services

- **Claude** (claude.ai)
- **ChatGPT** (chat.openai.com)
- **Grok** (x.com/i/grok)
- **Perplexity** (perplexity.ai)
- **Gemini** (gemini.google.com)
- **Copilot** (copilot.microsoft.com)

## Installation

### Method 1: Load Unpacked Extension (Development)

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top-right corner)
4. Click "Load unpacked"
5. Select the `ai-search-extension` folder
6. The extension icon should appear in your toolbar

### Method 2: Chrome Web Store (Future)

Once published, you'll be able to install directly from the Chrome Web Store.

## Usage

### Basic Usage

1. **Select text** on any webpage
2. **Right-click** the selected text
3. Choose **"Search with AI"** from the context menu
4. Select your preferred AI assistant (Claude, ChatGPT, Grok, or Perplexity)
5. A new tab will open with the AI service and your selected text pre-filled

### Customize Settings

1. Click the extension icon in your toolbar
2. Toggle individual AI services on/off
3. Only enabled services will appear in the right-click menu
4. Settings are saved automatically

## How It Works

1. **Context Menu Integration**: The extension adds a context menu when you right-click selected text
2. **URL Parameter Passing**: The selected text is passed as a URL parameter (`?q=...`)
3. **Content Script Auto-fill**: A content script detects the parameter and automatically fills it into the AI assistant's input field
4. **Session Reuse**: Since the extension opens the AI service in your browser, it uses your existing login session

## Files Structure

```
ai-search-extension/
├── manifest.json          # Extension configuration
├── background.js          # Service worker for context menus
├── popup.html            # Settings interface HTML
├── popup.js              # Settings interface logic
├── content.js            # Auto-fill script for AI services
├── icons/                # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md             # This file
```

## Permissions Explained

- **contextMenus**: Required to add the right-click menu
- **storage**: Required to save your service preferences
- **tabs**: Required to open new tabs with AI services
- **host_permissions**: Required to inject the auto-fill script on AI service pages

## Privacy

- ✅ No data collection
- ✅ No external servers
- ✅ All settings stored locally in Chrome
- ✅ Uses your existing browser sessions
- ✅ No tracking or analytics

## Troubleshooting

### The text isn't auto-filling

- Make sure you're logged into the AI service
- Some AI services may have updated their UI - the content script may need updating
- Try refreshing the AI service page after it opens

### Context menu doesn't appear

- Make sure you've selected text before right-clicking
- Check that the extension is enabled in `chrome://extensions/`
- Try reloading the extension

### Service not in the menu

- Click the extension icon and make sure the service is enabled (toggle is on)

## Development

### Modifying the Extension

1. Make changes to the source files
2. Go to `chrome://extensions/`
3. Click the refresh icon on the extension card
4. Test your changes

### Adding New AI Services

To add a new AI service:

1. Add the service configuration in `background.js` (AI_SERVICES object)
2. Add the default setting in `DEFAULT_SETTINGS`
3. Add a toggle in `popup.html`
4. Add the host permission in `manifest.json`
5. Add auto-fill logic in `content.js` if needed

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use and modify as needed.

## Changelog

### Version 1.1.0
- Added support for Google Gemini
- Added support for Microsoft Copilot
- Now supports 6 AI services total

### Version 1.0.0
- Initial release
- Support for Claude, ChatGPT, Grok, and Perplexity
- Context menu integration
- Settings popup with toggles
- Auto-fill functionality

## Future Enhancements

- [ ] Add more AI services (Gemini, Copilot, etc.)
- [ ] Add keyboard shortcuts
- [ ] Add quick access toolbar button
- [ ] Add option to open in current tab vs new tab
- [ ] Add history of searches
- [ ] Add custom prompts/templates

## Support

If you encounter any issues or have suggestions, please open an issue on GitHub.

---

Made with ❤️ for the AI community
