var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var mylocation = document.querySelector('.location')
var date = document.querySelector('.date')
var graphic = document.querySelector('.graphic')
var temp = document.querySelector('.temp')
var humidity = document.querySelector('.humidity')
var wind = document.querySelector('.wind')


button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&appid=2417e86861cd4ce224d8b9c271a84f46')
.then(response => response.json())
.then(data => {
    var locationValue = data['city']['name'];
    var dateValue = data['list'][0]['dt_txt'];
    var graphicValue = data['list'][0]['weather'][0]['icon']; 
    var tempValue = data['list'][0]['main']['temp']; 
    var humidityValue = data['list'][0]['main']['humidity'];
    var windValue = data['list'][0]['wind']['speed'];

    mylocation.innerHTML = locationValue;
    date.innerHTML = dateValue;
    graphic.innerHTML = 'http://openweathermap.org/img/w/'+graphicValue+'.png';
    temp.innerHTML = tempValue;
    humidity.innerHTML = humidityValue;
    wind.innerHTML = windValue;
    });
});

