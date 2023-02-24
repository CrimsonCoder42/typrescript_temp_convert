interface TermperatureConverter {
    celsiusToFahrenheit(celcius: number): number;
    fahrenheitToCelsius(fahrenheit: number): number;
}

class Temperature implements TermperatureConverter {
    celsiusToFahrenheit(celcius: number): number {
        return celcius * 1.8 + 32;
    }

    fahrenheitToCelsius(fahrenheit: number): number {
        return (fahrenheit - 32) / 1.8;
    }
}

let temp = new Temperature();


