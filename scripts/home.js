
  //-----------extracción dinámica de las categorías

  let categories = [];

  for (let i = 0; i < data.events.length; i++) {
    if (!categories.includes(data.events[i].category)) {
      categories.push(data.events[i].category);
    }
  }

  for (let i = 0; i < categories.length; i++) {
    let idCategories = document.getElementById("categories");

    let divCategory = document.createElement("div");

    let eventCategory = `

        <input type="checkbox" id="${categories[i]}" name="${categories[i]}" value="${categories[i]}">
        <label for="${categories[i]}">${categories[i]}</label>

    
        `;

    divCategory.innerHTML += eventCategory;

    idCategories.appendChild(divCategory);

    console.log(categories.indexOf);
  }

//----------creación de una tarjeta---------------

const checkboxs = document.querySelectorAll("input[type='checkbox']");

let categoriasSeleccionadas = [];


checkboxs.forEach(checkbox => {
  checkbox.addEventListener("click", () => {
    let categoriasSeleccionadas = Array.from(checkboxs).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
    crearUnaTarjeta(categoriasSeleccionadas, ".sectionCards")
    console.log(categoriasSeleccionadas)
  })
})


function crearUnaTarjeta(categoriasSeleccionadas, contenedor) {
  let sectionCards = document.querySelector(contenedor);

  sectionCards.innerHTML = "";

  let eventosFiltrados = data.events.filter(evento => {
    let categoriasEvento = evento.category;
    if (categoriasSeleccionadas.length > 0){
      return categoriasSeleccionadas.filter(categoria => categoriasEvento.includes(categoria)).length > 0
    } else {
      return categoriasSeleccionadas.filter(categoria => !categoriasEvento.includes(categoria))
    }
    
  })

/*   for (let i = 0; i < data.events.length; i++) { */
/*     let sectionCards = document.querySelector(".sectionCards"); */

    eventosFiltrados.forEach(evento => {

    
    let card = document.createElement("div");
    card.classList = "card";

    card.innerHTML += `
      <img src=${evento.image} class="card-img-top">
      <div class="card-body">
          <h5>${evento.name}</h5>
         
            <div class="footer-card">
              <p>Price: $${evento.price}</p>
              <a href="./details.html?id=${evento._id}">Ver más</a>
            </div>
      </div>        
      `;

    /* console.log(card); */
    sectionCards.appendChild(card);
  });
  }
  
/* } */
 crearUnaTarjeta(categoriasSeleccionadas, ".sectionCards");
  /*   } */

  // console.log(data.events[i].category)








  //-------------creación de Array con checkbox seleccionados-----------

 
/*   checkboxs.forEach((unNombre) =>
    unNombre.addEventListener("click", function reconocerCheckbox(checkbox){
      if (checkbox.target.checked){
        arrayChecked.push(checkbox.target.value)
        console.log(arrayChecked)
      } else {
        arrayChecked = arrayChecked.filter(categoria => categoria !== checkbox.target.value)
        console.log(arrayChecked)
      }
    }
  ))
 */




 /*  for (let i = 0; i < arrayChecked.length; i++){
    if (arrayChecked == data.events.category){
    crearUnaTarjeta(arrayChecked, ".sectionCards")
    } else {
      crearUnaTarjeta(data.events, ".sectionCards")
    }
  }
 */

/*   checkboxs2.forEach((unNombre) =>
  unNombre.addEventListener("click", function reconocerCheckbox(checkbox){
    if (checkbox.target.checked == data.events.category){
      arrayChecked.push(data.events)
      console.log(arrayChecked)
    } else {
      arrayChecked = arrayChecked.filter(categoria => categoria !== checkbox.target.value)
      console.log(arrayChecked)
    }
  }
))
 */








  
/* let filtrarPorCheckbox(){
  if (arrayChecked.length > 0){
    crearUnaTarjeta(arrayChecked, ".sectionCards")
  } else {
    crearUnaTarjeta(data.events, ".sectionCards")
  }
} */




/* let checkButton = document.querySelectorAll("input[type='checkbox']")
let eventsChecked = []

checkButton.forEach(boton => boton.addEventListener('change', check))
function check(){
  eventsChecked = []
    let select = Array.from(checkButton).filter(e => e.checked)
    for (let event of data.events) {
      select.forEach(input => {
        if (event.category == input.value) {
          eventsChecked.push(event)
          console.log(eventsChecked)
        }
      });
    }
    if (eventsChecked.length > 0){
      crearUnaTarjeta(eventsChecked, ".sectionCards")
    } else {
      crearUnaTarjeta(data.events, ".sectionCards")
    }
}



 */




  

 /*  function reconocerCheckbox() {
    arrayChecked = [];
  }
  let arrCheckbox = Array.from(checkboxs2).filter((boton) => boton.checked);
  for (const event of data.events) {
    arrCheckbox.forEach((input) => {
      if (event.category == input.value) {
        arrayChecked.push(input.value);
      }
    });
  }
  if (arrayChecked.length > 0) {
    crearUnaTarjeta(arrayChecked, ".sectionCards");
  } else {
    crearUnaTarjeta(data.events, ".sectionCards");
  }

  console.log(arrayChecked); */


/* checkboxs2.forEach(item => {
  item.addEventListener('change', handleClick) 
    function handleClick(e){
      console.log(e)
      console.log({target : e.target})
    }
  })
  
 */

/* let arrCheckbox = Array.from(checkboxs2).filter(boton => boton.checked) */

/* console.log(arrCheckbox)



/* let checkboxs = document.getElementById("categories") */
/* for(let checkbox of arrCheckbox){
  checkbox.addEventListener("change", (item) => {
    if (item.target.checked){
      arrayChecked.push(item.target.value);
    
    }
  })
 
}


console.log(arrayChecked) 

 */
/*  (checkbox) => {
    if (checkbox.checked){
      arrayChecked.push(checkbox.value)
    }
  })
  console.log(arrayChecked)
}
 */

/* checkboxs.addEventListener('click', handleClick)

function handleClick(e){
  console.log(e)
  console.log({target : e.target})
}

console.log(checkboxs2)


 arrayChecked = Array.from(checkboxs2).filter(checkbox => checkbox.checked){
  arrayChecked.push(checkbox)

 }
 console.log(arrayChecked)

 */

/* 

 let search = ""

 const form = document.getElementById('form')

 const input = document.getElementById('search')

form.addEventListener('submit', (e)=> {
  e.preventDefault()

  console.log(input.value)
  search.push(input.value)
  console.log(search)
}) */
