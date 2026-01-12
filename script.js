// Variable to store the QR instance
let qrcode = null;

function generateQR() {
    const input = document.getElementById("qr-input").value.trim();
    const container = document.getElementById("qrcode");

    if (input === "") {
        alert("Please enter a link or text!");
        return;
    }

    // Clear the previous QR code container
    container.innerHTML = "";

    // Create a new QR code inside the container
    qrcode = new QRCode(container, {
        text: input,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}
