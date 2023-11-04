<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

var pressedButton = false;

setInterval(function(){
    waitForAdmin();
}, 500);

function waitForAdmin() {
    // (if start has not been pressed in view) || (if next has not been pressed yet && user has incremented a value), hide buttons
    // NOT FINISHED
    hideButtons();
    showButtons();
    pressedButton = false;
}

function incNoLever() {
    // increment no lever variable in host
    $(document).ready(function() {
        $.ajax({
            url: 'https://ianvivi13.github.io/Hacks-2023/src/components/server.html:8090/',
            data:   1,
            type: 'POST',
            jsonpCallback: 'callback'
        });
    });
    hideButtons();
    pressedButton = true;
}

function incLever() {
    // increment lever variable in host
    hideButtons();
    pressedButton = true;
}

function hideButtons() {
    document.getElementById("no-lever-button").disabled = true;
    document.getElementById("no-lever-button").style.visibility = "hidden";
    document.getElementById("lever-button").disabled = true;
    document.getElementById("lever-button").style.visibility = "hidden";
}

function showButtons() {
    document.getElementById("no-lever-button").disabled = false;
    document.getElementById("no-lever-button").style.visibility = "visible";
    document.getElementById("lever-button").disabled = false;
    document.getElementById("lever-button").style.visibility = "visible";
}
