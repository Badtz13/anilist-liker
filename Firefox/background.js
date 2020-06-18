function likePostsOrOpenTab() {
    function logTabs(tabs) {
        let tab = tabs[0];

        if(tab.url.includes('anilist.co'))
            browser.tabs.executeScript(null, {file: "content.js"});
        else
            browser.tabs.create({url: "https://www.anilist.co"});
    }   
    browser.tabs.query({currentWindow: true, active: true}).then(logTabs, console.error);
}

browser.browserAction.onClicked.addListener(likePostsOrOpenTab);