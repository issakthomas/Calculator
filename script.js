display = document.querySelector("#result span");
expression = "";

function screen(content) {
	expression += content;
	display.textContent = expression;
}
function back() {
	if (expression.length > 0) {
		expression = expression.slice(0, -1);
	}
	display.textContent = expression.length > 0 ? expression : "0";
}

function screenClear() {
	display.textContent = 0;
	expression = "";
}

function calculate() {
	display.textContent = eval(expression);
	expression = "";
}
