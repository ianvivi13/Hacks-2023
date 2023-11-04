$('#submitting').click(function() {
    const screenshotTarget = document.getElementById("test");
    html2canvas(screenshotTarget).then(canvas => {
        screenshotTarget.appendChild(canvas);
        dataURL = canvas.toDataURL();
    });
});

