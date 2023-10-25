const text = "Hello, this is a typewriter text effect.";
const textElement = document.getElementById("text");

let index = 0;

function type() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 200); // Adjust the typing speed here (e.g., 50 for faster, 200 for slower)
    }
}

type();
