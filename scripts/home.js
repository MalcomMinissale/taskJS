
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

        <input type="checkbox" id="category${[i]}" name="category${[i]}" value="${[i]}">
        <label for="category${[i]}">${categories[i]}</label>

             
        `;

        divCategory.innerHTML += eventCategory

        idCategories.appendChild(divCategory)

        console.log(categories.indexOf)

        
        }

  
