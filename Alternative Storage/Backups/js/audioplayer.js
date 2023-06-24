var audioPlayer = document.getElementById('audioPlayer');
audioPlayer.addEventListener('ended', playNext); // Automatically play the next track when the current one ends

function playNext() {
  var currentIndex = Array.from(audioPlayer.children).findIndex(function(source) {
    return source.src === audioPlayer.currentSrc;
  });
  var nextIndex = (currentIndex + 1) % audioPlayer.children.length;
  audioPlayer.src = audioPlayer.children[nextIndex].src;
  audioPlayer.play();
}