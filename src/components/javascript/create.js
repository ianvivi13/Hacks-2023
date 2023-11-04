<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
<script type="text/javascript"></script>


var loadFileOne = function(event) {
   var image = document.getElementById('img-one');
   image.src = URL.createObjectURL(event.target.files[0]);
};

var loadFileTwo = function(event) {
    var image = document.getElementById('img-two');
    image.src = URL.createObjectURL(event.target.files[0]);
};

var loadFileThree = function(event) {
    var image = document.getElementById('img-three');
    image.src = URL.createObjectURL(event.target.files[0]);
};

var loadFileFour = function(event) {
    var image = document.getElementById('img-four');
    image.src = URL.createObjectURL(event.target.files[0]);
};

function updateProblemText() {
    document.getElementById("problem-text").innerHTML = document.getElementById("problem-text-box").value;
}

$('#submit-button').click(function() {
    const screenshotTarget = document.getElementById("trolley-img");
    html2canvas(screenshotTarget).then(canvas => {
        document.getElementById("trolley-img").appendChild(canvas);
        dataURL = canvas.toDataURL();
    });
});

/*
const captureScreenshot = async () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const screenshot = document.createElement("screenshot");

    try {
        const captureStream = await navigator.mediaDevices.getDisplayMedia();
        screenshot.srcObject = captureStream;
        context.drawImage(screenshot, 0, 0, window.width, window.height);
        const frame = canvas.toDataURL("image/png");
        captureStream.getTracks().forEach(track => track.stop());
        window.location.href = frame;
    } catch (err) {
        console.error("Error: " + err);
    }
};*/

/*
$('#trolley-img').click(function()  {
    const screenshotTarget = document.getElementById("trolley-img");
    html2canvas(screenshotTarget).then(canvas => {
    // to image as png use below line
    // const base64image = canvas.toDataURL("image/png");
    // show the image in window use below line
    // window.location.href = base64image;

    // screenshot appended to the body as canvas
    document.body.appendChild(canvas);
    let dataURL = canvas.toDataURL();
    // to print the screenshot in console use below line
    // console.log(dataURL);

    // following line is optional and it is to save the screenshot
    // on the server side. It initiates an ajax call
    pushScreenshotToServer(dataURL);
    });
});

    function pushScreenshotToServer(dataURL) {
    $.ajax({
        url: "push-screenshot.php",
        type: "POST",
        data: {
            image: dataURL
        },
        dataType: "html",
        success: function() {
            console.log('Screenshot pushed to server.');
        }
    });
}*/