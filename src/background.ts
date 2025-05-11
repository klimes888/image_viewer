chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "open_viewer") {
    chrome.windows.create({
      url: chrome.runtime.getURL("viewer.html"),
      type: "popup",
      width: 1200,
      height: 800,
    });
  }
});
