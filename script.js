// Function to send a text message
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');

    if (userInput.trim()) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('user-message');
        messageElement.innerText = userInput;
        chatBox.appendChild(messageElement);
        document.getElementById('user-input').value = ''; // Clear input field
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }
}

// Function to start voice recognition
function startVoiceRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    recognition.onstart = function() {
        console.log('Voice recognition started');
    };

    recognition.onresult = function(event) {
        const userInput = event.results[0][0].transcript;
        document.getElementById('user-input').value = userInput;
        sendMessage(); // Automatically send the message after recognition
    };

    recognition.onerror = function(event) {
        console.error('Voice recognition error', event);
    };

    recognition.start(); // Start voice recognition
}
