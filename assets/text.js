// text.js

const birthdayLines = [
  "Happy Birthday Shrishti 🎂",
  "May your life always stay full of happiness 🌸",
  "May Mahadev bless you with health and success 🤍",
  "Always keep smiling and believing in yourself ✨",
  "You are strong, kind and very special 💖",
  "Your brother is always standing by your side 🫶"
];

let tLine = 0;
let tChar = 0;
let typingStarted = false;

const typingBox = document.getElementById("typingText");

/**
 * Start typing animation
 * callback = function that runs after typing is finished
 */
function startTypingText(callback) {
  if (!typingStarted) typingStarted = true;

  if (tLine >= birthdayLines.length) {
    if (callback) {
      setTimeout(callback, 2000); // typing khatam hone ke 2 sec baad
    }
    return;
  }

  if (tChar < birthdayLines[tLine].length) {
    typingBox.innerHTML += birthdayLines[tLine][tChar];
    tChar++;
    setTimeout(() => startTypingText(callback), 90);
  } else {
    typingBox.innerHTML += "<br><br>";
    tLine++;
    tChar = 0;
    setTimeout(() => startTypingText(callback), 1000);
  }
}
