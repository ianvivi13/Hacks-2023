var count = 0;

function changeImg() {
    count++;
    //document.getElementById("problem").src = "../assets/created-problems/trolley-problem-" + count + ".jpg";
    document.getElementById("no-lever").innerHTML = "0";
    document.getElementById("lever").innerHTML = "0";
}

function endSession() {
    if(confirm("End the current session?")) {
        window.location.href = "index.html";
    }
}