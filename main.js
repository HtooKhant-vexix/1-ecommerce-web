import { hide, show } from './loader';
import './style.scss';
import { create } from './js/createItem'; 
import { atc } from './js/addToCart';
import * as bootstrap from 'bootstrap'
import { text } from './js/utility';

export let items = [ ];
let c =  document.querySelector(".item-card");

show();
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
              items =  json;
              hide();

                items.forEach(item => {
                  create(item);
              });
              // console.log(items)
            });

  c.addEventListener("click",e=>{
  atc(e);
})
 

