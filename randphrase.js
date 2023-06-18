const phrases = [
    "Hello, world!",
    "Keep it simple.",
    "Dream big, achieve bigger.",
    "Stay curious, stay learning.",
    "Embrace the journey, not just the destination.",
    "The sky is the limit.",
    "Make it happen.",
    "Believe in yourself.",
    "Stay focused and never give up.",
    "Find joy in the little things.",
    "Live life to the fullest.",
    "Choose kindness.",
    "Smile, it's contagious.",
  ];
  
  function generateRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomIndex];
    const phraseText = document.getElementById("phrase-text");
    phraseText.textContent = randomPhrase;
  }
  
  window.onload = generateRandomPhrase;
  