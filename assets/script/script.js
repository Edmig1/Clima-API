var container = document.querySelector('.container')
var clima = document.querySelector('.clima')
var resultado = document.querySelector('.resultado')
var achado = document.querySelector('.achado')
var erro = document.querySelector('.erro')
var btn = document.querySelector('.button')
var card = document.querySelector('.card')
var vento = document.querySelector('.p-vento')
var humidade = document.querySelector('.p-humidade')
var temp = document.querySelector('.temperatura')

function busca(){
    const key = '749b139a4a6fdd1baeeefd3498cca9e2'
    const lugar = document.querySelector('.local').value
    
    if (lugar === ''){
        
        return
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${lugar}&units=metric&appid=749b139a4a6fdd1baeeefd3498cca9e2`).then(response => response.json()).then(json =>{
        if (json.cod ==="404"){
            clima.style.scale = '0'
            achado.style.scale = '0'
            clima.style.height = '500px'
            clima.style.scale = '1'
            erro.style.scale = '1'

        }
    
        else{
            console.log(json)
            clima.style.scale = '0'
                erro.style.scale = '0'
                clima.style.height = '500px'
                clima.style.scale = '1'
                achado.style.scale = '1'
                vento.innerHTML = json.wind.speed +' Km/h'
                humidade.innerHTML = json.main.humidity + '%'
                temp.innerHTML = json.main.temp + 'C°'
            }

    })
}