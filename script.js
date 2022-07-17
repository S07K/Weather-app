var result = document.querySelector('#result');

function convertion(val){
    return (val - 273).toFixed(2);
}

function fetch (obj) {
    var xhr = new XMLHttpRequest();
    var inputval = obj;
    console.log('requesting for ' + inputval.value + "'s weather")
    
    var apik = "3045dd712ffe6e702e3245525ac7fa38";
    
    xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + inputval.value + '&appid=' + apik, true);

    xhr.onprogress = function() {
        // result.style
        console.log('in progress...')
    }

    xhr.onload = function() {
        if(xhr.status == 200 && xhr.readyState == 4){
            var data = JSON.parse(xhr.responseText);
            var place = data.name;
            var desc = data.weather[0].main;
            var wind =  data.wind;
            var temp = data.main.temp;
            var humid = data.main.humidity;
            var country =  data.sys.country;
            console.log('success: data fetched');
            result.innerHTML = `<h1>${place}, ${country}</h1>
                                <h3>${convertion(temp)} °C</h3>
                                <br>
                                <p>Weather: ${desc}</p>
                                <p>Humidity: ${humid}</p>
                                <p>Wind Speed: ${wind.speed} kmph</p>` 
                                console.log(data)
        }else{
            console.log(xhr.status)
        }
    }
    xhr.send();
}
