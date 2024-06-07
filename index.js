// get all util document elements
const city = document.getElementById("city")
const cityMain = document.getElementById("cityMain")
const icon = document.getElementById("icon")
const btn = document.getElementById("btn")
const value = document.querySelector("input")
const deg = document.getElementById("deg")
const desc = document.getElementById("desc")

// when client hit submit button change weather were it si located
btn.addEventListener("click", (e) => {
    e.preventDefault()
    // fetching api 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=8005e0a1974f974d81c999400dd12dc9`)
        // convert our response to json file to make it file read more easy
        .then(res => res.json())
        //  after compiling to json we can define our temperature, describe day and also see weather logo
        .then(res => {
            deg.innerHTML = `${Math.round(Number(res.main.temp)) - 273}°C`
            desc.innerHTML = "Clouds"
            cityMain.innerHTML = city.value
            if (res.weather[0].main == "Clouds") {
                icon.innerHTML = "☁️"
            }
            else if (res.weather[0].main == "Clear") {
                icon.innerHTML = "☀️"
            }
            else if (res.weather[0].main == "Rain") {
                icon.innerHTML = "🌧️"
            }
            console.log(res)
        })
        .catch(err => "this is error my dear client try fetch again...")
})

// temp , deg , weather[clear] description1


