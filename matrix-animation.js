// Matrix-style background animation
document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    function resizeCanvas() {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
    }

    // Initialize canvas size
    resizeCanvas();

    // Handle window resize
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const charArray = chars.split("");

    // Calculate number of columns
    const fontSize = 12;
    const columns = Math.floor(canvas.width / fontSize);

    // Array to store the Y position of each column
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    // Animation function
    function drawMatrix() {
        // Semi-transparent black background for trail effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Green text color
        ctx.fillStyle = '#6bf442';
        ctx.font = fontSize + 'px courier';

        // Draw characters
        for (let i = 0; i < drops.length; i++) {
            // Random character
            const char = charArray[Math.floor(Math.random() * charArray.length)];

            // Draw character
            ctx.fillText(char, i * fontSize, drops[i] * fontSize);

            // Reset drop to top randomly
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            // Move drop down
            drops[i]++;
        }
    }

    // Start animation
    setInterval(drawMatrix, 35);
});
