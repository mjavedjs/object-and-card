const electronicItems = [
    {
      name: "Laptop",
      brand: "Dell",
      model: "Inspiron 15",
      price: 750,
      availability:true,
      warranty: "2 Years"
    },
    {
      name: "Smartphone",
      brand: "Samsung",
      model: "Galaxy S21",
      price: 999,
      availability: false,
      warranty: "2 year"
    },
    {
      name: "Tablet",
      brand: "Apple",
      model: "iPad Pro",
      price: 1200,
      availability: false,
      warranty: "1 Year"
    },
    {
      name: "Smartwatch",
      brand: "Garmin",
      model: "Forerunner 945",
      price: 600,
      availability:true,
      warranty: "2 Years"
    }
  ];

  let container=document.querySelector("#container");
  let item=document.querySelector("#item");
  for(let i=0; i<electronicItems.length; i++){
    container.innerHTML +=`  
        <div class='card-container'>
    <div class="card">
     <h3> ${electronicItems[i].name}</h3>
     <h3> ${electronicItems[i].model}</h3>
     <h3> ${electronicItems[i].price}</h3>
     <h3> ${electronicItems[i].model}</h3>
     <h3> ${electronicItems[i].availability ? "Available" :"unavailable"} </h3>
    <button id="btn${i}" onclick="buttonDisable(${i})">Add to Cart</button>
      </div>
      </div>
      `
  }

  function buttonDisable(index) {
    let button=document.querySelector(`#btn${index}`)
    if (electronicItems[index].availability === true) {
      item.innerHTML =` item is available`

    } 

    else{
      button.disabled = true; 
      
      console.log("item is not aviable");
      button.style.backgroundColor = 'grey'; 
     item.innerHTML =` item is  Not available`

    }
}