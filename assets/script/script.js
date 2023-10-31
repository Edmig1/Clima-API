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
var desc = document.querySelector('.descricao')
var img = document.querySelector('.img_clima')

function busca() {
    const key = '749b139a4a6fdd1baeeefd3498cca9e2'
    const lugar = document.querySelector('.local').value

    if (lugar === '') {

        return
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${lugar}&units=metric&appid=749b139a4a6fdd1baeeefd3498cca9e2`).then(response => response.json()).then(json => {
        if (json.cod === "404") {
            clima.style.scale = '0'
            achado.style.scale = '0'
            achado.style.height = '0px'
            achado.style.width = '0px'
            clima.style.height = '60vh'
            clima.style.scale = '1'
            erro.style.scale = '1'

        }

        else {
            console.log(json)
            clima.style.scale = '0'
            erro.style.height = '0px'
            erro.style.width = '0px'
            erro.style.scale = '0'
            clima.style.height = '60vh'
            clima.style.scale = '1'
            achado.style.scale = '1'
            vento.innerHTML = json.wind.speed + ' Km/h'
            humidade.innerHTML = json.main.humidity + '%'
            temp.innerHTML = json.main.temp + 'C°'
            switch (json.weather[0].main) {
                case "Clouds":
                    img.src = 'assets/img/cloud.png'
                    desc.innerHTML='Nuvens e Sol'
                    break
                case 'Rain':
                    img.src = 'assets/img/rain.png'
                    desc.innerHTML='Chuva'
                    break
                case 'Mist':
                    img.src = 'assets/img/mist.png'
                    desc.innerHTML='Névoa'
                    break

                case 'Clear':
                    img.src = 'assets/img/clear.png'
                    desc.innerHTML='Sol'
                    break

                case 'Snow':
                    img.src = 'assets/img/snow.png'
                    desc.innerHTML='Neve'
                    break
                case 'Haze':
                    img.src = 'assets/img/haze.png'
                    desc.innerHTML='Nevoeiro'
                    break
            }
        }

    })
}