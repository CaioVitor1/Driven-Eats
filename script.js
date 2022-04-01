function escolherPrato1() {
    const frango1 = document.querySelector(".item1");
    const frango2 = document.querySelector(".item2");
    const frango3 = document.querySelector(".item3");
   
    frango1.classList.toggle("bordas");
    frango2.classList.remove("bordas");
    frango3.classList.remove("bordas");   
}
function escolherPrato2() {
    const frango1 = document.querySelector(".item1");
    const frango2 = document.querySelector(".item2");
    const frango3 = document.querySelector(".item3");
    

    frango1.classList.remove("bordas");
    frango2.classList.toggle("bordas");
    frango3.classList.remove("bordas");   
}
function escolherPrato3() {
    const frango1 = document.querySelector(".item1");
    const frango2 = document.querySelector(".item2");
    const frango3 = document.querySelector(".item3");
    

    frango1.classList.remove("bordas");
    frango2.classList.remove("bordas");
    frango3.classList.toggle("bordas");   
}