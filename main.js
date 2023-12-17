const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


const entrees = document.querySelector("#entrees")
const c_entrees = document.querySelector("#c_entrees")
const sandwich =document.querySelector("#sandwiches")
const c_sandwich =document.querySelector("#c_sandwiches")
const burgers =document.querySelector("#burgers")
const c_burgers =document.querySelector("#c_burgers")
const meats =document.querySelector("#meats")
const c_meats =document.querySelector("#c_meats")
const deserts =document.querySelector("#deserts")
const c_deserts =document.querySelector("#c_deserts")
const bebidas = document.querySelector("#drinks");
const c_drinks = document.querySelector("#c_drinks");
const all = document.querySelector("#all");

abrir.addEventListener("click", ()=>{
    navbar.classList.add(".visible");
})


cerrar.addEventListener("click", () => {
    navburger.classList.remove("visible");
})

bebidas.addEventListener("click", ()=> {
    c_drinks.classList.add("visible");
})