document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('message');
    let text = "I want to get to know you more...";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            message.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    if (message) typeWriter(); // Ensure this only runs where "message" exists
});

function confirmYes() {
    window.location.href = 'success.html';
}

function confirmNo() {
    alert("Come on, say yes! 😊");
}
