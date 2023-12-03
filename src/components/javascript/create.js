
// Loads each of the images uploaded when creating a new trolley problem
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

// Allows the problem text to be edited
function updateProblemText() {
    document.getElementById("problem-text").innerHTML = document.getElementById("problem-text-box").value;
    console.log(document.getElementById("problem-text-box").value)
}

// Saves the trolley problem
$('#submit-button').click(function() {
    const screenshotTarget = document.getElementById("trolley-img");
    html2canvas(screenshotTarget).then(canvas => {
        document.getElementById("trolley-img").appendChild(canvas);
        dataURL = canvas.toDataURL();
    });
});



console.log(document.getElementById("problem-text-box").value)