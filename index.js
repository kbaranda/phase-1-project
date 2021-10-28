document.addEventListener("DOMContentLoaded",() => {
  fetchStations()
  // comment()
});


function fetchStations() {
  fetch("http://localhost:3000/fireStation")
  .then(resp => resp.json())
  .then(data => data.forEach(renderStations))
};

function renderStations(station) {
  const select = document.querySelector("#select")
  const option = document.createElement("option")
  option.value = `${station.id}`
  option.innerHTML = `${station.name}`
  select.append(option)
  addInfo(station)
};

function addInfo(station) {
  const select = document.querySelector("#select")
  
  select.addEventListener("change", (event) => {
    const yourStation = document.querySelector("#yourStation")
    yourStation.innerHTML = `You're at Station ${event.target.value}`
    if (`${station.id}` == event.target.value){
      const img = document.querySelector("#imgSection")
      img.innerHTML = `<img src="${station.img}">`
      const address = document.querySelector("#address")
      address.innerHTML = `${station.name}, ${station.address}`
      const description = document.querySelector("#description")
      description.innerText = `${station.description}`
    }
    const hydrantSection = document.querySelector("#hydrantSection")
    hydrantSection.style.display = "none"  })
};


function mySubmit() {
  const hydrantSection = document.querySelector("#hydrantSection")
  hydrantSection.style.display = "block"
  const ul = document.querySelector("#hydrantUl")
  ul.innerText = ""
  const addLi = () => {
    const select = document.querySelector("#select")
    console.log(select)
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
      <li>El Indio and Camarinos</li>
      <li>Lakonia and Kiriaka</li>
      `
    }
  }
  addLi()
};

// function comment() {
//   const commentBtn = document.querySelector("#commentBtn")
//   commentBtn.addEventListener("click", (event) => {
//     console.log(event.target.querySelector("#comment").value)
//   })
// }