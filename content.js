// @ts-nocheck

function extractPageText() {
    const allText = document.body.innerText;
    return allText.slice(0, 5000); // Limit to first 5000 chars for performance
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "extractText") {
        const text = extractPageText();
        sendResponse({ text });
    }
});
