// Function to toggle the ESP
function toggleESP() {
    fetch('/toggle_esp', { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            alert('ESP toggled: ' + data.status);
        })
        .catch(error => {
            console.error('Error toggling ESP:', error);
        });
}

// Function to toggle the Aimbot
function toggleAimbot() {
    fetch('/toggle_aimbot', { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            alert('Aimbot toggled: ' + data.status);
        })
        .catch(error => {
            console.error('Error toggling Aimbot:', error);
        });
}

// Event listeners for buttons (assuming they are in your HTML)
document.addEventListener('DOMContentLoaded', function() {
    // Get elements (adjust selectors based on your actual HTML)
    const espButton = document.getElementById('espButton');
    const aimbotButton = document.getElementById('aimbotButton');
    
    // Add click event listeners for each button
    if (espButton) {
        espButton.addEventListener('click', toggleESP);
    }

    if (aimbotButton) {
        aimbotButton.addEventListener('click', toggleAimbot);
    }
});
