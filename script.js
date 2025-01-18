function generateQRCode() {
    const url = document.getElementById('url').value;
    const qrCodeContainer = document.getElementById('qrcode');
    qrCodeContainer.innerHTML = '';
    QRCode.toCanvas(qrCodeContainer, url, function (error) {
        if (error) console.error(error);
        console.log('QR code generated!');
    });
}