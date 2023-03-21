const urlApi = "https://mindhub-xj03.onrender.com/api/amazing"
let arrayApi
let arrayEvents = []
let categories = []
let eventsPast = []
let eventsUpcoming = []
let eventsPastDetailed = [];
let eventsUpcomingDetailed = []
let categoriasUpcoming = []
let datosUpcoming = []
let categoriasPast = []
let datosPast = []

async function getDataApi(){
  await fetch(urlApi)
  .then(response => response.json())
    .then (json => arrayApi = json)
  arrayEvents = arrayApi.events
  console.log(arrayEvents)

  eventsPast.push(...arrayEvents.filter(event=> event.date < arrayApi.currentDate))
  console.log(eventsPast)
  eventsUpcoming.push(...arrayEvents.filter(event=> event.date > arrayApi.currentDate))
 
  eventsPast.filter(event => eventsPastDetailed.push(
      {
      percentage:((event.assistance*100) / event.capacity).toFixed(2),
      name:event.name, 
      assistance: event.assistance, 
      capacity : event.capacity, 
      category: event.category,
      price: event.price,
      revenues:event.assistance * event.price
  }))

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
    let masPorcentaje = getMasPorcentaje(eventsPastDetailed)
    let menosPorcentaje = getMenosPorcentaje(eventsPastDetailed)
    let masCapacidad = getMasCapacidad(eventsPastDetailed)
    
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
        <td>${masPorcentaje.category + ": " + masPorcentaje.name +" ("+ masPorcentaje.percentage}%)</td>
        <td>${menosPorcentaje.category + ": " + menosPorcentaje.name +" ("+ menosPorcentaje.percentage}%)</td>
        <td>${masCapacidad.category + ": " + masCapacidad.name +" ("+ masCapacidad.capacity})</td>
    </tr>`

    document.getElementById("eventStatistics").innerHTML = renderTablaEventStatistics
}

tablaEventStatistics();

//----------------------------------------------------------------
function tablaUpcomingEvents(){
 
  
    for (let i = 0; i < eventsUpcomingDetailed.length; i++) {
      if (!categories.includes(eventsUpcomingDetailed[i].category)) {
        categories.push(eventsUpcomingDetailed[i].category);
      }
    }
    
    categories.forEach(category => {
        categoriasUpcoming.push({
            categoria: category,
            data: eventsUpcomingDetailed.filter(datos => datos.category == category)
        })
    })

    categoriasUpcoming.map(datos => {
        datosUpcoming.push({
            category: datos.categoria,
            estimate: datos.data.map(i => i.estimate),
            capacity: datos.data.map(i => i.capacity),
            estimateRevenue: datos.data.map(i => i.estimate * i.price)
        })
    })

    datosUpcoming.forEach(category => {
        let totalEstimate = 0
        category.estimate.forEach(estimate => totalEstimate += estimate)
        category.estimate = totalEstimate

        let totalCapacityUpcoming = 0
        category.capacity.forEach(capacity => totalCapacityUpcoming += capacity)
        category.capacity = totalCapacityUpcoming

        let totalEstimateRevenue = 0
        category.estimateRevenue.forEach(estimateRevenue => totalEstimateRevenue += estimateRevenue)
        category.estimateRevenue = totalEstimateRevenue

        console.log(totalEstimateRevenue)

        category.porcentajeAttendance = ((totalEstimate * 100) / totalCapacityUpcoming).toFixed(2)
        })      

let listaUpcoming = ""
listaUpcoming = datosUpcoming.filter(item => item.porcentajeAttendance).sort((a,b) => b.porcentajeAttendance - a.porcentajeAttendance)
    
let renderTablaUpcomingEvents = ""

listaUpcoming.forEach(e => {
    e.listaUpcoming
    renderTablaUpcomingEvents += `
    <tr>
    <td>${e.category}</td>
    <td>US$ ${e.estimateRevenue}</td>
    <td>${e.porcentajeAttendance}%</td>
    </tr>
  `

    document.getElementById('eventsUpcoming').innerHTML = renderTablaUpcomingEvents
})
}

tablaUpcomingEvents()

//--------------------------------------------------

function tablaPastEvents(){

    for (let i = 0; i < eventsPastDetailed.length; i++) {
      if (!categories.includes(eventsPastDetailed[i].category)) {
        categories.push(eventsPastDetailed[i].category);
      }
    }

    categories.forEach(category => {
        categoriasPast.push({
            categoria: category,
            data: eventsPastDetailed.filter(datos => datos.category == category)
        })
    })

    categoriasPast.map(datos => {
        datosPast.push({
            category: datos.categoria,
            assistance: datos.data.map(i => i.assistance),
            capacity: datos.data.map(i => i.capacity),
            revenue: datos.data.map(i => i.assistance * i.price)
        })
    })
    
    datosPast.forEach(category => {
        let totalAssistance = 0
        category.assistance.forEach(assistance => totalAssistance += assistance)
        category.assistance = totalAssistance

        let totalCapacityPast = 0
        category.capacity.forEach(capacity => totalCapacityPast += capacity)
        category.capacity = totalCapacityPast

        let totalRevenue = 0
        category.revenue.forEach(revenue => totalRevenue += revenue)
        category.revenue = totalRevenue
        
        category.porcentajeAttendance = ((totalAssistance * 100) / totalCapacityPast).toFixed(2)
        })

let listaPast = ""
listaPast = datosPast.filter(item => item.porcentajeAttendance).sort((a,b) => b.porcentajeAttendance - a.porcentajeAttendance)
let renderTablaPastEvents = ""

listaPast.forEach(e => {
    e.listaPast
    renderTablaPastEvents += `
    <tr>
    <td>${e.category}</td>
    <td>US$ ${e.revenue}</td>
    <td>${e.porcentajeAttendance}%</td>
    </tr>
  `
    document.getElementById('eventsPast').innerHTML = renderTablaPastEvents
})
}

tablaPastEvents()

}
getDataApi()

