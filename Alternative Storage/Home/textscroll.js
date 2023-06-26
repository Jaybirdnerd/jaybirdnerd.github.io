var titleText = " It's Dot Com! ";
var scrollSpeed = 150; // Adjust scroll speed (milliseconds)

function scrollTitle() {
  titleText = titleText.substring(1) + titleText.substring(0, 1); +"  ";
  document.title = titleText;
  setTimeout(scrollTitle, scrollSpeed);
}

scrollTitle();