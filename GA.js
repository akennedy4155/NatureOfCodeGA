let paragraphText;
function setup () {
    paragraphText = select('#random-string');
    frameRate(2);
}

function draw() {
    let text = generateRandomString(18);
    paragraphText.html(text, false);
}

function generateRandomString(len) {
    let rString = '';
    let validChars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
    for (let i = 0; i < len; i++) {
        rString += validChars[Math.floor(Math.random() * validChars.length)];
    }
    return rString
}