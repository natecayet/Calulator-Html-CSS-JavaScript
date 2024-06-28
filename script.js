//number buttons
const zero = document.querySelector('#zero-button');
const one = document.querySelector('#one-button');
const two = document.querySelector('#two-button');
const three = document.querySelector('#three-button');
const four = document.querySelector('#four-button');
const five = document.querySelector('#five-button');
const six = document.querySelector('#six-button');
const seven = document.querySelector('#seven-button');
const eight = document.querySelector('#eight-button');
const nine = document.querySelector('#nine-button');
const decimal = document.querySelector('#decimal-button');

//operator buttons
const remainder = document.querySelector('#remainder');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');

//other buttons
const clear = document.querySelector('#clear-button');
const equals = document.querySelector('#equals-button');

//text span elements
const numbersText = document.querySelector('#numbers-text');
const operatorText = document.querySelector('#operator-text');

//button functions for each number
zero.onclick = () => numbersText.innerText += 0;
one.onclick = () => numbersText.innerText += 1;
two.onclick = () => numbersText.innerText += 2;
three.onclick = () => numbersText.innerText += 3;
four.onclick = () => numbersText.innerText += 4;
five.onclick = () => numbersText.innerText += 5;
six.onclick = () => numbersText.innerText += 6;
seven.onclick = () => numbersText.innerText += 7;
eight.onclick = () => numbersText.innerText += 8;
nine.onclick = () => numbersText.innerText += 9;
decimal.onclick = () => numbersText.innerText += ".";

//clear numbersText after pressing operator button
function clearText() {
    storeInput.push(numbersText.innerText);
    numbersText.innerText = "";
}

//button functions for operators
remainder.onclick = () => {
    operatorText.innerText = "%";
    clearText()
}
add.onclick = () => {
    operatorText.innerText = "+";
    clearText()
}
subtract.onclick = () => {
    operatorText.innerText = "-";
    clearText()
}
divide.onclick = () => {
    operatorText.innerText = "/";
    clearText()
}
multiply.onclick = () => {
    operatorText.innerText = "x";
    clearText()
}


//functions for each operator
remainderFunction = (a, b) => (a%b);
addFunction = (a, b) => (a+b);
subtractFunction = (a, b) => (a-b);
divideFunction = (a, b) => (a/b);
multiplyFunction = (a, b) => (a*b);

//button functions for clear and equals
clear.onclick = () => {
    operatorText.innerText = "";
    numbersText.innerText = "";
    storeInput.length = 0;
}

//store the first input here
let storeInput = [];

equals.onclick = () => {
    let result;
    
    if (operatorText.innerText == "%") {
        result = remainderFunction(Number(storeInput.pop()), Number(numbersText.innerText));
    }

    if (operatorText.innerText == "+") {
        result = addFunction(Number(storeInput.pop()), Number(numbersText.innerText));
    }

    if (operatorText.innerText == "-") {
        result = subtractFunction(Number(storeInput.pop()), Number(numbersText.innerText));
    }

    if (operatorText.innerText == "/") {
        result = divideFunction(Number(storeInput.pop()), Number(numbersText.innerText));
    }

    if (operatorText.innerText == "x") {
        result = multiplyFunction(Number(storeInput.pop()), Number(numbersText.innerText));
    }
    
    numbersText.innerText = result;
    
    operatorText.innerText = "";
    storeInput.pop();
}