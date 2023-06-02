// All the variables
let locationName = document.querySelector('.loc'),
    weatherDis = document.querySelector('.condition'),
    temparature = document.querySelector('.temp'),
    humidity = document.querySelector('.humidity'),
    pressure = document.querySelector('.pressure'),
    minTemperature = document.querySelector('.min-temp'),
    maxTemperature = document.querySelector('.max-temp');

let name = 'Manoj';

class UI {
    constructor(){
        this.name = 'Manoj';
    }

    mainPageValue(res) {;

        // Set the value
        locationName.textContent = `${res.name} , ${res.sys.country}`;
        weatherDis.textContent = `${res.weather[0].description}`;
        temparature.textContent = `${(res.main.temp-273.15).toFixed(1)}`;
        humidity.textContent = `Humidity : ${res.main.humidity}`;
        pressure.textContent = `Pressure : ${res.main.pressure}`;
        minTemperature.textContent = `Minimum Temperature : ${(res.main.temp_min-273.15).toFixed(1)}`;
        maxTemperature.textContent = `Maximum Temperature : ${(res.main.temp_max-273.15).toFixed(1)}`;        
    }
}
