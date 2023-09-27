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
    const req = new XMLHttpRequest();
    const Token = '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';
    req.addEventListener("load", reqListener);
    req.open("GET", "https://api.github.com/repos/Anastasiiasyvak/sixth_assignment_js");
    req.send();
  }
  
function error() {
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("GET", "https://api.github.com/users/kkxnn127236"); 
    req.send();
}


function reqListener() {
    var resultElement = document.getElementById('res'); 
    
    if (this.status === 200) {
        resultElement.textContent = "valid";
    } else {
        resultElement.textContent = "Error: Unable to fetch data";
    }
}

document.getElementById('ValidButton').addEventListener('click', valid);
document.getElementById('ErrorButton').addEventListener('click', error);

