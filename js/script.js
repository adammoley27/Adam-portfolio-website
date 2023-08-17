// Add custom JavaScript here
function runTypingEffect(){
    const text = 'I am Adam Nggilari.'
    const typingElement = document.getElementById('typing-text');
    const typingDelay = 150;

     typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
    for (let i = 0; i  <text.length; i++) {
        setTimeout(() => { typingElement.textContent += text.charAt(i); }, delay * i);

        }

}

document.addEventListener('DOMContentLoaded', runTypingEffect);

// Add custom JavaScript here
function runTypinggEffect(){
    const text = ' Please click the links below. '
    const typingElement = document.getElementById('typing-tex');
    const typingDelay = 150;

     typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
    for (let i = 0; i  <text.length; i++) {
        setTimeout(() => { typingElement.textContent += text.charAt(i); }, delay * i);

        }

}

document.addEventListener('DOMContentLoaded', runTypinggEffect);