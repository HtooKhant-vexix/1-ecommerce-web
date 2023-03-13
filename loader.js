export function  show() {
    let con =  document.createElement("div");
    con.classList.add("loader","animate__animated","animate__fadeIn","fixed-top");
    con.innerHTML = `
    <div class="d-flex justify-content-center bg-secondary min-vh-100 align-items-center">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
            </div>
    `;
    document.body.append(con);
  };

 export function hide() { 
    const re =  document.querySelector(".loader");
    re.classList.replace("animate__fadeIn","animate__fadeOut");
    re.addEventListener("animationend",()=>{
      re.remove();
    });
  }
  
