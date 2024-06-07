const city = document.getElementById("city").value
const cityMain = document.getElementById("cityMain").innerHTML

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city && "tbilisi"}&appid=8005e0a1974f974d81c999400dd12dc9`)
    .then(res => res.json())
    .then(res => console.log(res))
// temp , deg , weather[clear] description1

const btn = document.getElementById("btn")
const value = document.querySelector("input")
console.log(value)

