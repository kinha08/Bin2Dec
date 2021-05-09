// Let user input only 1 and 0
const input = document.getElementById('bin');
let isAlerted = false;

function showAlert(msg) {
    const alertMsg = document.getElementById('alert');
    
    if (!isAlerted) {
        isAlerted = true;
        alertMsg.textContent = msg;
    
        alertMsg.style.opacity = 1;
        setTimeout(function() {
            alertMsg.style.opacity = 0;
            isAlerted = false;
        }, 5000)
    }
}

input.onkeypress = function(event) {
    if(event.keyCode !== 48 && event.keyCode !== 49) {
        showAlert('Only 0 and 1!')
        return false;
    }
 }



// Convert binary to decimal
function bin2Dec(bin) {
    return bin.split('').map(Number).reverse().reduce((previousValue, currentValue, idx) => {
        return previousValue + currentValue * Math.pow(2, idx);
    }); 
}

const button = document.getElementsByTagName("button");

button[0].onclick = function(event) {
    // Check if input is empty and return a alert
    if(input.value === '') {
        showAlert("Enter a binary number to convert to decimal!");
        input.focus();
        return;
    }

    // Get the lenght of input and convert binary 
    // calculatin from left to right using:
    // i * pow(2, len)
    // const value = input.value;
    // let len = value.length - 1;
    // let sum = 0;
    // for(i of value) {
    //    sum += parseInt(i, 10) * Math.pow(2, len);
    //    len -= 1;
    // }
    let result = bin2Dec(input.value);

    // Convert result incluing dots like 1.000.000
    console.log(result);
    result = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    const resultElement = document.getElementById('result');

    resultElement.innerHTML = result;
    resultElement.style.visibility = "visible";
    input.focus();
}