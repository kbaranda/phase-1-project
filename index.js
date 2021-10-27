document.addEventListener("DOMContentLoaded",() => {
  fetchStations()
});


function fetchStations() {
  fetch("http://localhost:3000/fireStation")
  .then(resp => resp.json())
  .then(data => data.forEach(renderStaions))
};

function renderStaions(station) {
  const select = document.querySelector("#select")
  const option = document.createElement("option")
  option.value = `${station.id}`
  option.innerHTML = `${station.name}`
  select.append(option)
  addDescription(station)
};

function addDescription(station) {
  const select = document.querySelector("#select")
  
  select.addEventListener("change", (event) => {
    console.log(station)
    const yourStation = document.querySelector("#yourStation")
    yourStation.innerText = `You're at station ${event.target.value}`
    if (`${station.id}` === event.target.value){
      const description = document.querySelector("#description")
      description.innerText = `${station.description}`
    }
  })
};

function unhideHydrantSection() {
  const hydrantSection = document.querySelector("#hydrantSection")
  hydrantSection.style.display = "block"
  const ul = document.querySelector("#hydrantUl")
  ul.innerText = ""
  const addLi = () => {
    const select = document.querySelector("#select")
    if(select.value === "1"){
      ul.innerHTML =`
      <li>Adams and Bliss</li>
      <li>Ceylon and Williams</li>
      <li>Washington and Rio Grande</li>
      `
    } else if(select.value === "2") {
      ul.innerHTML =`
      <li>Second and Romel</li>
      <li>Vista Hermosa and Acapulco</li>
      <li>San Juan and Mazatlan</li>
      `
    } else if(select.value === "3") {
      ul.innerHTML =`
      <li>El Indio and Morales</li>
      <li>El Indio and Camarinos/li>
      <li>Lakonia and Kiriaka</li>
      `
    }
  }
  addLi()
};