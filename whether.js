

let input;
let userCity;
let apiKey;
let dataFinal;
let getValue = () => {

    input = document.getElementById("input");
    console.log(input.value)
    userCity = input.value.trim()
    console.log(userCity)
    if (userCity) {
        apiGenerate()
    } else {
        alert("city not defined")
    }

}


let apiGenerate = () => {


    let api = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5d5b00f779b258582823b9da194fa713&units=metric"

    let index = api.indexOf("q")
    let end = api.indexOf("&")

    let city = api.slice(index + 2, end)
    let ap1_one = api.slice(0, index + 2);
    console.log(ap1_one)
    let api_2 = api.slice(end)
    console.log(api_2)

    console.log(userCity, "city")

    //final api formation
    let api_f = ap1_one.concat(userCity).concat(api_2)

    console.log(api_f, "final")
    fetchAPI(api_f)


}

let fetchAPI = (api) => {

    let getData = (cb) => {
        fetch(api).
            then((res) => res.json()).
            then((resf) => cb(resf))

    }

    getData((data) => {
        console.log(data, "inside")
        showData(data)
    })

}


let showData = (obj) => {
    console.log(obj)

    //temt
    let temp = obj.main.temp
    temp = Math.round(temp)
    let temInput = document.getElementById("temp")
    temInput.innerHTML = temp

    //feel like
    let feel = obj.main.feels_like
    let feelUnit = obj.main.feels_like.unit

    feel = Math.floor(feel)
    let feelInput = document.getElementById("feel")
    feelInput.innerHTML =  `Feels like ${feel}`

    //icon
    let icon = obj.weather[0].icon 

    url = "https://openweathermap.org/img/wn/" + icon + "@2x.png"

    let userIcon = document.getElementById("image")

    userIcon.src = url

    //description

    let description = obj.weather[0].description 

    console.log(description,"description")

    let userDescription = document.getElementById("description")

    userDescription.innerHTML = description

    console.log(userDescription)


    //speed


    let speed = obj.wind.speed

    let userSpeed = document.getElementById("speed")

    userSpeed.innerHTML = `${speed} miles/s`

    //humidity


    let humidity = obj.main.humidity;

    let userHumidity = document.getElementById("humidity")

    userHumidity.innerHTML = `${humidity} %`


    //vision


    let vision = obj.visibility

    userVisibility = document.getElementById("visibility")

    userVisibility.innerHTML = `${vision}/m`







}


