// npm run sass:watch

// Add custom JavaScript here
function runTypingEffect() {
  const text = "I am Venkatesh Paskanti";
  const typingEl = document.getElementById("typing-text");
  const typingDelay = 100;

  typeText(text, typingEl, typingDelay);
}

function typeText(text, typingEl, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingEl.textContent += text.charAt(i);
    }, delay * i);
  }
}

document.addEventListener("DOMContentLoaded", runTypingEffect);
