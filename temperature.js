var Temperature = /** @class */ (function () {
    function Temperature() {
    }
    Temperature.prototype.celsiusToFahrenheit = function (celcius) {
        return celcius * 1.8 + 32;
    };
    Temperature.prototype.fahrenheitToCelsius = function (fahrenheit) {
        return (fahrenheit - 32) / 1.8;
    };
    return Temperature;
}());
var temp = new Temperature();
