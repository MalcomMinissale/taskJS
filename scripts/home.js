
function crearUnaTarjeta(arr, contenedor){

let card = document.querySelector(".sectionCards")

card.innerHTML = ""
  
for(let i = 0;i < data.events.length; i++){

    let sectionCards = document.querySelector(".sectionCards");
  
    let card = document.createElement('div')
    card.classList = 'card';
  
    let eventCard = `
      <img src=${data.events[i].image} class="card-img-top">
      <div class="card-body">
          <h5>${data.events[i].name}</h5>
         
            <div class="footer-card">
              <p>Price: $${data.events[i].price}</p>
              <a href="./details.html?id=${data.events[i]._id}">Ver más</a>
            </div>
      </div>        
      `;
  
      card.innerHTML += eventCard;
  
      sectionCards.appendChild(card);
    };
  }
   
      // console.log(data.events[i].category)
  
    let categories = [];

    for(let i = 0; i < data.events.length; i++){

        
        if(!categories.includes(data.events[i].category)){
            categories.push(data.events[i].category)
        }
    }

        for(let i = 0;i < categories.length; i++){

        let idCategories = document.getElementById("categories") 

        let divCategory = document.createElement("div")

        let eventCategory = `

        <input type="checkbox" id="${categories[i]}" name="${categories[i]}" value="${categories[i]}">
        <label for="${categories[i]}">${categories[i]}</label>

             
        `;

        divCategory.innerHTML += eventCategory

        idCategories.appendChild(divCategory)

        console.log(categories.indexOf)

        
        }
;
  




const checkboxs2 = document.querySelectorAll("input[type='checkbox']");

let arrayChecked = [];

checkboxs2.forEach(unNombre => unNombre.addEventListener('change', unaFuncion))

function unaFuncion(){
  arrayChecked = []
 
}
let arrCheckbox = Array.from(checkboxs2).filter(boton => boton.checked)
for (const event of data.events){
  arrCheckbox.forEach(input => {
    if (event.category == input.value){
      arrayChecked.push(input.value)
      
    }
  })
} if (arrayChecked.length > 0){
    crearUnaTarjeta(arrayChecked, ".sectionCards")
} else {
    crearUnaTarjeta(data.events, ".sectionCards")
}


console.log(arrayChecked)



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