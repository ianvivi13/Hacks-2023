<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>

//The url for when
//https://qr.io/?gclid=Cj0KCQjwtJKqBhCaARIsAN_yS_lJNpl7xijeHLfb7vGB8lQr_AonMkR1TstP3082-EQSmbQZYQFCOQ8aAtkTEALw_wcB

new QRCode(document.getElementById("header__container__qr"), "https://webisora.com");

    var qrcode = new QRCode(document.getElementById("header__container__qr"), {
        text: "https://webisora.com",
        width: 128,
        height: 128,
        colorDark: "#5868bf",
        colorLight: "#7b7b7b",
        correctLevel: QRCode.CorrectLevel.H
    });