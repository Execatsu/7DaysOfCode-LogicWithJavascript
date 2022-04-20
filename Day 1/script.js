const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')

const msg = {
  none : 'Enter to values to be compared',
  equals : 'The elements are exactly the same',
  differentType : 'The elements are the same, but the type are different',
  different : 'The elements are different',
  default : 'Enter the values and check the result'
}

document.querySelector(".container > button").addEventListener("click", () => {
  let input1Value, input2Value;
  if (input1.value == "" || input2.value == "") return showTimedMessage(msg['none']);
  
  input1Value = values(input1);
  input2Value = values(input2);

  if (input1Value === input2Value) return showTimedMessage(msg['equals']);
  if (input1Value == input2Value) return showTimedMessage(msg['differentType']);
  else showTimedMessage(msg['different']);
});

function values(input) {
  let inputValue;
  input.type == 'number'
    ? inputValue = parseInt(input.value)
    : inputValue = input.value
  
  return inputValue;
} 

function check(event) {
  let input = document.getElementById(event.target.name);
  event.target.checked
    ? input.setAttribute("type", "number")
    : input.setAttribute("type", "text");
}

const messageToUser = document.getElementById("msgToUser")
let request = -1;

function showTimedMessage(message, timeToClearInMS = 3000) {
  clearTimeout(request);
  messageToUser.innerText = message;
  
  request = setTimeout(() => {
    messageToUser.innerText = msg['default'];
  }, timeToClearInMS);
}