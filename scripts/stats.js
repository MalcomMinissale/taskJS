const urlApi = "https://mindhub-xj03.onrender.com/api/amazing"
let arrayApi
let arrayEvents = []
let categories = []
let eventsPast = []
let eventsUpcoming = []
let eventPastDetailed = [];
let eventsUpcomingDetailed = []


async function getDataApi(){
  await fetch(urlApi)
  .then(response => response.json())
    .then (json => arrayApi = json)
  arrayEvents = arrayApi.events
  console.log(arrayEvents)

  eventsPast.push(...arrayEvents.filter(event=> event.date < arrayApi.currentDate))
  console.log(eventsPast)
  eventsUpcoming.push(...arrayEvents.filter(event=> event.date > arrayApi.currentDate))
 
  

  eventsPast.filter(event => eventPastDetailed.push(
      {
      percentage:((event.assistance*100) / event.capacity).toFixed(2),
      name:event.name, 
      assistance: event.assistance, 
      capacity : event.capacity, 
      category: event.category,
      price: event.price,
      revenues:event.assistance * event.price
  }))

  console.log(eventPastDetailed)

  eventsUpcoming.filter(event => eventsUpcomingDetailed.push(
    {
    percentage:((event.estimate*100) / event.capacity).toFixed(2) ,
    name:event.name, 
    estimate: event.estimate, 
    capacity : event.capacity, 
    category: event.category,
    price: event.price,
    revenues:event.estimate * event.price
}))
console.log(eventsUpcomingDetailed);

//-----------------------------------------------------------------

function tablaEventStatistics(){
    let masPorcentaje = getMasPorcentaje(eventPastDetailed)
    let menosPorcentaje = getMenosPorcentaje(eventPastDetailed)
    let masCapacidad = getMasCapacidad(eventPastDetailed)
    
    function getMasPorcentaje(eventos) {
     return eventos.reduce((acumulador, valorActual) => {
         if (valorActual.percentage > acumulador.percentage) {
             return valorActual;
         } else {
             return acumulador;
         }
     })
    }
    
     function getMenosPorcentaje(eventos) {
    return eventos.reduce((acumulador, valorActual) => {
        if (valorActual.percentage < acumulador.percentage) {
            return valorActual;
        } else {
            return acumulador;
        }
    });
}
    function getMasCapacidad(eventos) {
        return eventos.reduce((acumulador, valorActual) => {
            if (valorActual.height > acumulador.height) {
                return valorActual;
            } else {
                return acumulador;
            }
        });
    }

const renderTablaEventStatistics = `
    <tr>
        <td>${masPorcentaje.name +" ("+ masPorcentaje.percentage}%)</td>
        <td>${menosPorcentaje.name +" ("+ menosPorcentaje.percentage}%)</td>
        <td>${masCapacidad.name +" ("+ masCapacidad.capacity})</td>
    </tr>`

    document.getElementById("eventStatistics").innerHTML = renderTablaEventStatistics
}


tablaEventStatistics();

//----------------------------------------------------------------
function tablaUpcomingEvents(){
 
  
    for (let i = 0; i < arrayEvents.length; i++) {
      if (!categories.includes(arrayEvents[i].category)) {
        categories.push(arrayEvents[i].category);
      }
    }
    console.log(categories); 


    let categoriasUpcoming = []
    let ingresosPorcentajes = []

    categories.forEach(category => {
        categoriasUpcoming.push({
            categoria: category,
            data: eventsUpcomingDetailed.filter(datos => datos.category == category)
        })
    })
    console.log(categoriasUpcoming)

    categoriasUpcoming.map(datos => {
        ingresosPorcentajes.push({
            category: datos.categoria,
            estimate: datos.data.map(item => item.estimate),
            capacity: datos.data.map(item => item.capacity),
            estimateRevenue: datos.data.map(item => item.estimate * item.price)
        })
    })
    console.log(ingresosPorcentajes)

    ingresosPorcentajes.forEach(category => {
        let totalEstimate = 0
        category.estimate.forEach(estimate => totalEstimate += Number(estimate))
        category.estimate = totalEstimate

        let totalCapacityUpcoming = 0
        category.capacity.forEach(capacity => totalCapacityUpcoming += Number(capacity))
        category.capacity = totalCapacityUpcoming

        let totalEstimateRevenue = 0
        category.estimateRevenue.forEach(estimateRevenue => totalEstimateRevenue += Number(estimateRevenue))
        category.estimateRevenue = totalEstimateRevenue

        category.porcentajeAttendance = ((totalEstimate * 100) / totalCapacityUpcoming).toFixed(2)
        })

let listaUpcoming = ""
listaUpcoming = ingresosPorcentajes
    
    

    console.log(listaUpcoming)

let renderTablaUpcomingEvents = ""

listaUpcoming.forEach(e => {
    e.listaUpcoming
    renderTablaUpcomingEvents += `
    <tr>
    <td>${e.category}</td>
    <td>US$ ${e.estimateRevenue}</td>
    <td>${e.porcentajeAttendance}%</td>
  </tr>`

    document.getElementById('eventsUpcoming').innerHTML = renderTablaUpcomingEvents
})
}

tablaUpcomingEvents()







/*   nombresEventos = arrayApi.events.name
  capacidadesEventos = arrayEvents.  */
/* 
  console.log(arrayEvents)

  let tableBodyHTML1 = ""
  let tableBodyHTML2 = ""
  let tableBodyHTML3 =  */""

/* categories.forEach(categoria => {
    let filteredCategories = getEventosByCategories(eventos, categoria);
    console.log(filteredCategories);
})

function getEventosByCategories(eventos, categoria){
    return eventos.filter(evento => {
        let eventosCategorias = evento.categories.map(item => item.categoria.name);
        if (eventosCategorias.includes(categoria)){
            return true
        } else {
            return false
        }
    })
} */
}
getDataApi()

