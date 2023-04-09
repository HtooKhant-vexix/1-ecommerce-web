import { items } from "../main";
export const atc = function addtc(e){
    
    let cart =  document.querySelector(".cart");
    let cartGps = cart.getBoundingClientRect();
    let cartCounter = document.querySelectorAll(".cartCounter");
    let total =  document.querySelectorAll(".castCost");

    let cartInt = function(){
      let count =  parseInt(cartCounter[0].innerText);
      cartCounter.forEach(e => {
        e.innerText = count +1;
      });
    };

    const totalCost = function(){};


    if(e.target.classList.contains('add')){

      let currentCart = e.target.closest(".card");
      let cartId = currentCart.getAttribute("cart-id");
      let cItem =items.find(item => item.id == cartId);
      console.log(cItem.title);

      let div = document.createElement("div");
      div.classList.add("col-12");
      div.innerHTML = `
      <div class="card mt-3 p-3 itemInCart">
        <span class="" >
          <img class="h" src="${cItem.image}">
        </span>
        <div class="card-body p-0 mt-3">
          <p class="">
            <span class="fw-bold my-auto">${cItem.title}</span>
          </p>
          <div class="d-flex justify-content-between">
            <p class="fs-5 fw-bold  my-auto">$ <span class="castCost">${cItem.price}</span> </p>
            <div class="input-group w-50">
              <button class="btn btn-primary">-</button>
              <input value=1 class="ip text-end form-control">
              <button class="btn btn-primary" onclick="inbtn(event,${cItem.price})">+</button>
            </div>
          </div>
        </div>
      </div>
      `;
  
          
    window.inbtn = function(event, price){
      let parent =  event.target.closest(".itemInCart");
      let input = parent.querySelector(".ip");
      let castCost = parent.querySelector(".castCost");
      input.value = parseInt(input.value) + 1;
      castCost.innerText = (cItem.price * parseInt(input.value)).toFixed(2);
    };

      let itemInCart = function(){
        let cartCon = document.querySelector(".a");
        cartCon.append(div);
  
      };

      let oldImg = e.target.closest(".card").querySelector(".img");
      let newImg = document.createElement("img");
      newImg.src = oldImg.src;
      let imgGps = oldImg.getBoundingClientRect();
  
      newImg.style.zIndex = 2000;
      newImg.style.position = "fixed";
      newImg.style.top = imgGps.top+"px";
      newImg.style.left = imgGps.left+"px";
      newImg.style.height = 115+"px";
      newImg.style.transition = 0.5+"s";
      
  
      setTimeout(()=>{
        newImg.style.top = (cartGps.top+15)+"px";
        newImg.style.left = (cartGps.left+35)+"px";
        newImg.style.height = 0;
        newImg.style.transform = "rotate(360deg)";
      },100);
      
      setTimeout(()=>{
        cart.classList.add("animate__tada");
        cartInt();
        itemInCart();
        cart.addEventListener("animationend",()=>{
          cart.classList.remove("animate__tada");
          newImg.remove();
        });
      },300);
  
      document.body.append(newImg);
      // console.log(imgGps);
    }
 
    // console.log(cartCounter[1].innerHTML)

};