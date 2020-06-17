function likePosts() {
    browser.tabs.executeScript(null, {file: "content.js"});
}

browser.browserAction.onClicked.addListener(likePosts);