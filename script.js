const imageUpload = document.getElementById('imageUpload');
const topTextInput = document.getElementById('topText');
const bottomTextInput = document.getElementById('bottomText');
const generateButton = document.getElementById('generateMeme');
const memeCanvas = document.getElementById('memeCanvas');
const ctx = memeCanvas.getContext('2d');

let memeImage;

// Handle image upload
imageUpload.addEventListener('change', (event) => {
    const reader = new FileReader();
    reader.onload = function () {
        memeImage = new Image();
        memeImage.src = reader.result;
        memeImage.onload = () => {
            drawMeme();
        };
    };
    reader.readAsDataURL(event.target.files[0]);
});

// Draw the meme with text
function drawMeme() {
    // Clear canvas
    ctx.clearRect(0, 0, memeCanvas.width, memeCanvas.height);

    // Draw image
    if (memeImage) {
        ctx.drawImage(memeImage, 0, 0, memeCanvas.width, memeCanvas.height);
    }

    // Set text style
    ctx.font = '30px Impact';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;

    // Draw top text
    if (topTextInput.value) {
        ctx.fillText(topTextInput.value, memeCanvas.width / 2, 50);
        ctx.strokeText(topTextInput.value, memeCanvas.width / 2, 50);
    }

    // Draw bottom text
    if (bottomTextInput.value) {
        ctx.fillText(bottomTextInput.value, memeCanvas.width / 2, memeCanvas.height - 20);
        ctx.strokeText(bottomTextInput.value, memeCanvas.width / 2, memeCanvas.height - 20);
    }
}

generateButton.addEventListener('click', drawMeme);
