function likePostsOrOpenTab() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        if(url.includes('anilist.co'))
            chrome.tabs.executeScript(null, {file: "content.js"});
        else
            chrome.tabs.create({url: "https://www.anilist.co"});
    });
}

chrome.browserAction.onClicked.addListener(likePostsOrOpenTab);