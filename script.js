document.getElementById('source').addEventListener('change', function() {
    const customSourceInput = document.getElementById('customSource');
    if (this.value === 'custom') {
        customSourceInput.style.display = 'block';
    } else {
        customSourceInput.style.display = 'none';
    }
});

function generateQR() {
    const eventInput = document.getElementById('event').value;
    const encodedEvent = encodeURIComponent(eventInput);
    let sourceInput = document.getElementById('source').value;
    if (sourceInput === 'custom') {
        sourceInput = encodeURIComponent(document.getElementById('customSource').value);
    }
    const url = `https://www.tedxiu.com/contact?e=${sourceInput}&s=${sourceInput}`;
    const qrContainer = document.getElementById('qr');
    qrContainer.innerHTML = '';
    QRCode.toCanvas(document.createElement('canvas'), url, { width: 400, height: 400 }, function (error, canvas) {
        if (error) console.error(error);
        qrContainer.appendChild(canvas);
    });

    document.getElementById('formContainer').style.display = 'none';
    document.getElementById('qrContainer').style.display = 'block';
    document.getElementById('eventName').innerText = `Event: ${eventInput} (${sourceInput})`;
}

function showForm() {
    document.getElementById('formContainer').style.display = 'block';
    document.getElementById('qrContainer').style.display = 'none';
}