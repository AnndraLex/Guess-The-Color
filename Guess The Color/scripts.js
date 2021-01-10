var heading = document.getElementById("color-value");
var buttons = document.getElementsByClassName("color-button");
var answerMessage = document.getElementById("answer");
var resetButton = document.getElementById("reset-button");
var body = document.getElementsByTagName("body");
var answerButton = Math.round(Math.random() * (buttons.length - 1));

function makeColorValue() {
	return Math.round(Math.random() * 255);
}
function setButtonColor(button, red, green, blue){
    button.setAttribute('style',
                        'background-color: rgb('+ red +','+ green +','+ blue +');'
                       );
}
function startGame() {
	answerMessage.innerHTML = "";
	setButtonColor(body[0], 255, 255, 255);
	for (var i = 0; i < buttons.length; i++) {
	var red = makeColorValue();
	var green = makeColorValue();
	var blue = makeColorValue();
	setButtonColor(buttons[i], red, green, blue);
	if (i === answerButton) {
	heading.innerHTML = `(${red}, ${green}, ${blue})`;
	}
	buttons[i].addEventListener("click", function() {
		if (this === buttons[answerButton]) {
			answerMessage.innerHTML = "Correct!"
			setButtonColor(body[0], red, green, blue);
		}
		else {
			answerMessage.innerHTML = "Sorry, wrong answer. Guess again!";
		}
	});
 }
}
startGame();
resetButton.addEventListener("click", startGame);
