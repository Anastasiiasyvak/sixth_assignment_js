function reverseString() {
    var input = document.getElementById('input').value;
    var result = document.getElementById('result');
    var reversedInput = input.split('').reverse().join('');
    result.textContent = reversedInput;
}


var timeoutID;

function text_one_second() {
    timeoutID = window.setTimeout(reverseString, 1000);
  }

var inputElement = document.getElementById('input');
inputElement.addEventListener('input', text_one_second);


function valid() {
    fetch("https://api.github.com/repos/Anastasiiasyvak/sixth_assignment_js")
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error: Unable to fetch data");
            }
        })
        .then(data => {
            var resultElement = document.getElementById('res');
            resultElement.textContent = "Valid " + JSON.stringify(data);
        })
        .catch(error => {
            var resultElement = document.getElementById('res');
            resultElement.textContent = error.message;
        });
}

function error() {
    fetch("https://api.github.com/users/kkxnn127236")
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error: Unable to fetch data");
            }
        })
        .then(data => {
            var resultElement = document.getElementById('res');
            resultElement.textContent = "Valid " + JSON.stringify(data);
        })
        .catch(error => {
            var resultElement = document.getElementById('res');
            resultElement.textContent = error.message;
        });
}





document.getElementById('ValidButton').addEventListener('click', valid);
document.getElementById('ErrorButton').addEventListener('click', error);

const button_container = document.getElementById('button_container');

function buttons(){
    for (let i = 0; i <= 30; i++){
        const button = document.createElement('button');
        button.textContent = `${i} Septemer`;
    }
    button_container.appendChild(button);
}

buttons();
