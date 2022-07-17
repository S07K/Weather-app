var result = document.querySelector('#result');

function convertion(val){
    return (val - 273).toFixed(2);
}

const getData = (obj) => {
    var inputval = obj;
    var apik = "3045dd712ffe6e702e3245525ac7fa38";
    var apiURL =  'https://api.openweathermap.org/data/2.5/weather?q=';

    var url = apiURL + inputval.value + '&appid=' + apik;

    fetch(url).then((response) => {
        console.log('STATUS: ' + response.status);
        return response.json();
    }).then((data) => {
            var place = data.name;
            var desc = data.weather[0].main;
            var wind =  data.wind;
            var temp = data.main.temp;
            var humid = data.main.humidity;
            var country =  data.sys.country;
            result.innerHTML = `<h1>${place}, ${country}</h1>
                                <h3>${convertion(temp)} °C</h3>
                                <br>
                                <p>Weather: ${desc}</p>
                                <p>Humidity: ${humid}</p>
                                <p>Wind Speed: ${wind.speed} kmph</p>`; 
            console.log(data);
    });


}