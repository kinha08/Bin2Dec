// Let user input only 1 and 0
const input = document.getElementById('bin');

input.onkeypress = function(event) {
    if(event.key !== "0" && event.key !== "1") {
        return false;     
    }
}

// Convert binary to decimal
const button = document.getElementsByTagName("button");

button[0].onclick = function(event) {
    // Check if input is empty and return a alert
    if(input.value === '') {
        alert("Enter a binary number to convert to decimal!");
        return;
    }

    // Get the lenght of input and convert binary 
    // calculatin from left to right using:
    // i * pow(2, len)
    const value = input.value;
    let len = value.length - 1;
    let sum = 0;
    for(i of value) {
       sum += parseInt(i, 10) * Math.pow(2, len);
       len -= 1;
    }
    const result = document.getElementById('result');

    result.innerHTML = sum;
    result.style.visibility = "visible";
}