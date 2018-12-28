let paragraphText;
function setup () {
    paragraphText = select('#random-string');
    frameRate(2);
}

function draw() {
    paragraphText.html('add', true);
}