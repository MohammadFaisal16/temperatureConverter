let celval = document.querySelector("#celcius input");
let farval = document.querySelector("#fahrenheit input");
let kelval = document.querySelector("#kelvin input");

let button = document.querySelector(".button button");

celval.addEventListener('input',function(){
    let celcius = parseFloat(celval.value);
    let fahrenheit = (celcius*(9/5))+32;
    let kelvin = celcius+273.15;
    farval.value = roundNumber(fahrenheit);
    kelval.value = roundNumber(kelvin);
})

farval.addEventListener('input',function(){
    let fahrenheit = parseFloat(farval.value);
    let celcius = (fahrenheit-32)*(5/9);
    let kelvin = celcius+273.15;
    celval.value = roundNumber(celcius);
    kelval.value = roundNumber(kelvin);
})

kelval.addEventListener('input',function(){
    let kelvin = parseFloat(kelval.value);
    let celcius = kelvin-273.15;
    let fahrenheit = (celcius*(9/5))+32;
    celval.value = roundNumber(celcius);
    farval.value = roundNumber(fahrenheit);
})

function roundNumber(val){
    return Math.round(val*100)/100;
}

button.addEventListener("click",function(){
    celval.value = "";
    farval.value = "";
    kelval.value = "";
})