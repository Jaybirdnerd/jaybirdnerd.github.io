const phrases = [
    "Hello, world!",
    "Smile. Tomorrow will be worse",
    "Dying is easy, comedy is hard",
    "It’s cruel…and unusual",
    "Sometimes you drink the milk; sometimes the milk drinks you",
    "If stupidity got us into this mess, why can't it get us out?",
  ];
  
  function generateRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomIndex];
    const phraseText = document.getElementById("phrase-text");
    phraseText.textContent = randomPhrase;
  }
  
  window.onload = generateRandomPhrase;
  