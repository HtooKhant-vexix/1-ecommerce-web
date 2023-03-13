import { hide, show } from './loader';
import './style.scss'

let items = [ ];
let c =  document.querySelector(".item-card");

show();
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
              items =  json;
              console.log(items);
              hide();

              
              // console.log(card);
                items.forEach(item => {
                let card =  document.createElement("div");
                card.classList.add("col-sm-6", "col-lg-4", "col-xl-3");
                  card.innerHTML = `
                    <div class="card  p-4 ">
                      <span >
                        <img class="img mb-4 mx-auto d-flex" src="${item.image}">
                      </span>
                         <div class="fw-bold fs-5 mb-2 text-truncate">${item.title}</div>
                          <div class="">
                            <p>${item.description.substring(0,100)}</p>
                          </div>
                        <div class="d-flex justify-content-between mt-auto">
                            <p class="fs-5 fw-bold my-auto">$ ${item.price}</p>
                          <button class="btn add btn-outline-primary">
                          <i class="fa-solid me-2 fa-cart-shopping pe-none"></i>Add to cart 
                          </button>
                        </div>
                    </div>
                  `;
                c.append(card);
                // console.log(item)
              });

            });

c.addEventListener("click",e=>{

  let cart =  document.querySelector(".cart");
  let cartGps = cart.getBoundingClientRect();

  if(e.target.classList.contains('add')){
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
      cart.addEventListener("animationend",()=>{
        cart.classList.remove("animate__tada");
      });
    },300);

    document.body.append(newImg);
    console.log(imgGps);
  }
})
 

