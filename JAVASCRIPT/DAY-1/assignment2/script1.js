// Write the code to convert celsius to fahrenheit and fahrenheit and and Console the output

let celsius = 36;
let fahrenheit = 96;

function celsiusToFahrenheit(celsius) {
    return ((celsius * 9/5) + 32);
}

function fahrenheitToCelsius(fahrenheit) {
    return (5/9 * (fahrenheit - 32));
}

console.log(celsius + "°C is equivalent to " + celsiusToFahrenheit(celsius) + "°F");

console.log(fahrenheit + "°F is equivalent to " + fahrenheitToCelsius(fahrenheit) + "°C");
