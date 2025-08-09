const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');

    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    AOS.init({
    duration:1000,
    once:false,
    })

    let button = document.querySelector("#click")
    let products = document.querySelector(".product-btn")
    let products2 = document.querySelector(".product-btn2")
    let products3 = document.querySelector(".product-btn3")
    let explore= document.querySelector("#explore")
    button.addEventListener("click",()=>{
      console.log("btn is clicked")
      location.href="http://127.0.0.1:5500/payment.html"
    })
    products.addEventListener("click",()=>{
      console.log("btn is clicked")
      location.href="http://127.0.0.1:5500/payment.html"

    })
    products2.addEventListener("click",()=>{
      console.log("btn is clicked")
      location.href="http://127.0.0.1:5500/payment.html"

    })
    products3.addEventListener("click",()=>{
      console.log("btn is clicked")
      location.href="http://127.0.0.1:5500/payment.html"

    })

    explore.addEventListener("click",()=>{
      location.href="http://127.0.0.1:5500/products.html"
    })

    document.querySelector("#arrow").addEventListener("click",()=>{
      location.href="http://127.0.0.1:5500/peace.html"
    })