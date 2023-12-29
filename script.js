// script.js

function generateCode() {
    var textInput = document.getElementById('text-input').value;
    var codeType = document.getElementById('code-type').value;
    var codeContainer = document.getElementById('code');

    // Clear previous code if exists
    codeContainer.innerHTML = '';

    if (textInput !== '') {
        try {
            if (codeType === 'qrcode') {
                // Generate QR Code
                var qrcode = new QRCode(codeContainer, {
                    text: textInput,
                    width: 128,
                    height: 128
                });
            } else if (codeType === 'barcode') {
                // Generate Barcode
                var canvas = document.createElement('canvas');
                JsBarcode(canvas, textInput, { format: 'CODE128' });
                codeContainer.appendChild(canvas);
            }

            // Show the code section
            codeContainer.classList.add('visible');
        } catch (error) {
            console.error(error.message);
            alert('Error generating code. Please check your input and try again.');
        }
    } else {
        // Hide the code section
        codeContainer.classList.remove('visible');
        alert('Please enter text or URL before generating the code.');
    }
}

function printCode() {
    var codeContainer = document.getElementById('code');

    if (codeContainer.classList.contains('visible')) {
        // Make sure the code is visible before printing
        setTimeout(function () {
            window.print();
        }, 500); // Delay printing for 500 milliseconds to allow styles to apply
    } else {
        alert('Please generate a code before trying to print.');
    }
}
