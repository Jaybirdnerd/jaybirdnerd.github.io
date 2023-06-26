function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Use smooth scrolling behavior
    });
  }
  window.onscroll = function() {
    var button = document.getElementById("scrollToTopButton");
    if (document.documentElement.scrollTop > 200) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };