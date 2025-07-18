// @ts-nocheck

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "saveSummary") {
        const tabId = sender.tab.id;
        chrome.storage.local.set({ [tabId]: message.summary }, () => {
            sendResponse({ status: "success" });
        });
        return true; // Needed because sendResponse is async
    }
});
