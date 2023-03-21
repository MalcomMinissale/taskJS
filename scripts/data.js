


/* eventos = [] */
/* let sectionCards = document.querySelector(".sectionCards");

let data = []

async function getData(){
  await fetch(urlApi)
    .then(response => response.json())
    .then(json => data = json.events)

    console.log(data)
}
getData()

/* async function crearUnaTarjeta(arr){
  let response = await fetch(urlApi)
  let datos = await response.json()
  let eventos = datos.results
 
 */
/*
  crearUnaTarjeta(data)


    function crearUnaTarjeta(arr) {
      let mostrar = ""
      arr.forEach(evento => {    
        mostrar += `<div class="card">
            <img src=${evento.image} class="card-img-top">
            <div class="card-body">
                <h5>${evento.name}</h5>
                  <div class="footer-card">
                    <p>Price: $${evento.price}</p>
                    <a href="./details.html?id=${evento._id}">Ver más</a>
                  </div>
            </div>       
            </div>         
            `;
        });
        sectionCards.innerHTML = mostrar
       
      }
    
 */












//---------------------------------------------------------------

/* console.log('inicio')


let data

async function getData(){
  await fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(response => response.json())
      .then(json => data = json.events)
      
      console.log(data)
    
}
getData()

console.log('fin')

 */

//-------------------------------------------------------------------------

/* let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"
let arrayEventos = []

async function getEventos(){
  try {
    let response = await fetch(urlApi);
    let dataApi = await response.json();
    console.log(dataApi)
    for (const evento of dataApi.events) {
      try {
        let eventData = await getEvento(evento)
        arrayEventos.push(eventData)
        console.log(eventData)
      } catch (error) {
        console.log(error.message)
      }
      
    }

    console.log(arrayEventos)
  } catch (error) {
    console.log(error.message)
    
  }
}


getEventos();

async function getEvento(events){
  try {
    let response = await fetch(events);
    let evento = await response.json();
    return evento;
    
  } catch (error) {
    console.log(error.message) 
    return {}
    
  }

}


 */