# 🧠 Tab Context Memory
Tab Context Memory is a Chrome extension that helps you capture the purpose of your browsing sessions by summarizing the content of your active tabs using AI.

### 🚀 Features
- One-click Summarization of the current tab
- Uses Cohere AI API (Free Tier) for summarization
- Minimal, modern UI with animations
- Local API key storage using chrome.storage.local
- No backend required – runs entirely in the browser

### 📸 Preview

<img width="851" height="459" alt="Screenshot 2025-07-18 180055" src="https://github.com/user-attachments/assets/91d9d248-fa82-446a-aa22-2340f8992066" />


### 🛠️ Tech Stack
| **Tech**                 | **Usage**                 |
| ------------------------ | ------------------------- |
| **Manifest V3**          | Chrome Extension platform |
| **Cohere API**           | Text summarization        |
| **Vanilla JS & CSS**     | Lightweight frontend      |
| **chrome.storage.local** | API key & data storage    |

### ⚙️ Installation
### 1️⃣ Clone the Repo
```
git clone https://github.com/Monib007/tab-context-memory.git
cd tab-context-memory
```
### 2️⃣ Load Extension in Chrome
- Go to chrome://extensions/
- Enable Developer Mode
- Click Load unpacked
- Select the project folder

### 🔑 API Key Setup
This extension uses Cohere Summarization API (free signup).

### Get your API key here:
https://dashboard.cohere.com/api-keys

### Set the API key (in Chrome DevTools)
1. Go to chrome://extensions → Service Worker → Inspect
2. Paste:
```
chrome.storage.local.set({ cohere_api_key: "your-api-key-here" })
```

### 🖱️ How to Use
1. Open any webpage with text (e.g., Wikipedia, blog, article)
2. Click the Tab Context Memory icon
3. Click Summarize Current Tab
4. The summary will appear in the popup

### 🧩 Install Manually (No Chrome Store Needed)
Since this extension is open-source and not on the Chrome Web Store, you can easily install it manually:

### Steps:
1. Download this repo or get the ZIP from GitHub Releases
2. Go to chrome://extensions/
3. Enable Developer Mode
4. Click Load Unpacked and select the tab-context-memory folder

### 💻 Project Structure
```
tab-context-memory/
│
├── manifest.json
├── background.js
├── content.js
├── popup/
│   ├── popup.html
│   ├── popup.js
│   └── popup.css
├── utils/
│   └── api.js
└── assets/
    └── icon.jpg
```

## 🙌 Author

Built by **Monib Kumar Singha**  
[GitHub: Monib007](https://github.com/Monib007)
