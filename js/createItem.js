import { text } from "./utility";

export const create = function createUi(item) {
    let c =  document.querySelector(".item-card");
    let card =  document.createElement("div");
                card.classList.add("col-sm-6", "col-lg-4", "col-xl-3");
                  card.innerHTML = `
                    <div class="card card1  p-4 " cart-id="${item.id}">
                      <span >
                        <img class="img mb-4 mx-auto d-flex" src="${item.image}">
                      </span>
                         <div class="fw-bold fs-5 mb-2 text-truncate">${item.title}</div>
                          <div class="">
                            <p>${text(item.description)}</p>
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
}