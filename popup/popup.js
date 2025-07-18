// @ts-nocheck

import { summarizeText } from "../utils/api.js";

document.getElementById("summarizeBtn").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tab = tabs[0];

        chrome.tabs.sendMessage(tab.id, { type: "extractText" }, async (response) => {
            if (chrome.runtime.lastError || !response) {
                document.getElementById("summary").value = "❗ Cannot extract content from this tab. Try another page.";
                console.error(chrome.runtime.lastError);
                return;
            }

            const text = response.text;

            const summary = await summarizeText(text);

            // Save summary to storage
            chrome.runtime.sendMessage({ type: "saveSummary", summary });

            document.getElementById("summary").value = summary;
        });
    });
});
