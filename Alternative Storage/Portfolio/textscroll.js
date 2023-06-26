var titleText = "Welcome to my site! ";
var scrollSpeed = 100; // Adjust scroll speed (milliseconds)

function scrollTitle() {
  titleText = titleText.substring(1) + titleText.substring(0, 1); +"  ";
  document.title = titleText;
  setTimeout(scrollTitle, scrollSpeed);
}

scrollTitle();