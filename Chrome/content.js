var username = document.getElementsByClassName("links")[0].getElementsByClassName("link")[1].href

var likes = document.querySelectorAll(".button:not(.liked)");

for (var i = 0; likes.length; i++) {
    if (username != likes[i].parentElement.parentElement.parentElement.parentElement.getElementsByClassName("avatar")[0].href) {
        likes[i].click();
    }
}