function appendNumber(number) {
     document.getElementById('result').value += number;
 }
 
 function clearResult() {
     document.getElementById('result').value = '';
 }
 
 function calculateResult() {
     try {
         document.getElementById('result').value = eval(document.getElementById('result').value);
     } catch {
         document.getElementById('result').value = "Invalid Input";
     }
 }
 
 function removeLastDigit() {
     let resultField = document.getElementById('result');
     resultField.value = resultField.value.slice(0, -1);
 }
 
 
 function calculateSquare() {
     let value = parseFloat(document.getElementById('result').value);
     document.getElementById('result').value = Math.pow(value,2);
 }
 
 function calculateRoot() {
     let value = parseFloat(document.getElementById('result').value);
     document.getElementById('result').value = Math.sqrt(value);
 }