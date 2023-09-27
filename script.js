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