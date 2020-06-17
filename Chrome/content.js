var likes = document.querySelectorAll(".button:not(.liked)");
for(var i = 0; likes.length; i++) {
    likes[i].click();
}