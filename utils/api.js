// @ts-nocheck

export async function summarizeText(text) {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(["cohere_api_key"], async (result) => {
            const apiKey = result.cohere_api_key;

            if (!apiKey) {
                return resolve("Error: No Cohere API key found in storage.");
            }

            try {
                const response = await fetch("https://api.cohere.ai/v1/summarize", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                        text: text,
                        length: "short",   // Options: short, medium, long
                        format: "paragraph", // Or "bullets"
                        model: "summarize-xlarge"
                    })
                });

                const data = await response.json();

                if (data.message) {
                    console.error("Cohere Error:", data.message);
                    return resolve("Error: " + data.message);
                }

                resolve(data.summary);
            } catch (err) {
                console.error(err);
                resolve("Error: API call failed.");
            }
        });
    });
}
