
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
  
    for(let i = 0; i < data.events.length; i++){
      // console.log(data.events[i].category)
  
  
      let categories = data.events[i].category
      console.log(categories)
  
    }