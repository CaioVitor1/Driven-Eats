let prato;
let bebida;
let sobremesa;

function escolherPrato1() {
    let frango1 = document.querySelector(".item1");
    let frango2 = document.querySelector(".item2");
    let frango3 = document.querySelector(".item3");
    let ok1 = document.querySelector(".icone1");
    let ok2 = document.querySelector(".icone2");
    let ok3 = document.querySelector(".icone3")

    ok1.classList.remove("desligar1");
    ok2.classList.add("desligar2");
    ok3.classList.add("desligar3");
    frango1.classList.add("bordas");
    frango2.classList.remove("bordas");
    frango3.classList.remove("bordas");   
}
function escolherPrato2() {
    let frango1 = document.querySelector(".item1");
    let frango2 = document.querySelector(".item2");
    let frango3 = document.querySelector(".item3");
    let ok1 = document.querySelector(".icone1");
    let ok2 = document.querySelector(".icone2");
    let ok3 = document.querySelector(".icone3")

    ok1.classList.add("desligar1");
    ok2.classList.remove("desligar2");
    ok3.classList.add("desligar3");
    frango1.classList.remove("bordas");
    frango2.classList.add("bordas");
    frango3.classList.remove("bordas");   
}
function escolherPrato3() {
    let frango1 = document.querySelector(".item1");
    let frango2 = document.querySelector(".item2");
    let frango3 = document.querySelector(".item3");
    let ok1 = document.querySelector(".icone1");
    let ok2 = document.querySelector(".icone2");
    let ok3 = document.querySelector(".icone3");

    ok1.classList.add("desligar1");
    ok2.classList.add("desligar2");
    ok3.classList.remove("desligar3");
    frango1.classList.remove("bordas");
    frango2.classList.remove("bordas");
    frango3.classList.add("bordas");   

 }
/* Escolhendo a bebida */

function escolherBebida1() {
    let bebida1 = document.querySelector(".item4");
    let bebida2 = document.querySelector(".item5");
    let bebida3 = document.querySelector(".item6");
    let ok1 = document.querySelector(".icone4");
    let ok2 = document.querySelector(".icone5");
    let ok3 = document.querySelector(".icone6");

    ok1.classList.remove("desligar4");
    ok2.classList.add("desligar5");
    ok3.classList.add("desligar6");
    bebida1.classList.add("bordas");
    bebida2.classList.remove("bordas");
    bebida3.classList.remove("bordas");   
}
function escolherBebida2() {
    let bebida1 = document.querySelector(".item4");
    let bebida2 = document.querySelector(".item5");
    let bebida3 = document.querySelector(".item6");
    let ok1 = document.querySelector(".icone4");
    let ok2 = document.querySelector(".icone5");
    let ok3 = document.querySelector(".icone6");

    ok1.classList.add("desligar4");
    ok2.classList.remove("desligar5");
    ok3.classList.add("desligar6");
    bebida1.classList.remove("bordas");
    bebida2.classList.add("bordas");
    bebida3.classList.remove("bordas");   
}
function escolherBebida3() {
    let bebida1 = document.querySelector(".item4");
    let bebida2 = document.querySelector(".item5");
    let bebida3 = document.querySelector(".item6");
    let ok1 = document.querySelector(".icone4");
    let ok2 = document.querySelector(".icone5");
    let ok3 = document.querySelector(".icone6");

    ok1.classList.add("desligar4");
    ok2.classList.add("desligar5");
    ok3.classList.remove("desligar6");
    bebida1.classList.remove("bordas");
    bebida2.classList.remove("bordas");
    bebida3.classList.add("bordas");   

 }

 /* Escolhendo a sobremesa */

 function escolherSobremesa1() {
    let sobremesa1 = document.querySelector(".item7");
    let sobremesa2 = document.querySelector(".item8");
    let sobremesa3 = document.querySelector(".item9");
    let ok1 = document.querySelector(".icone7");
    let ok2 = document.querySelector(".icone8");
    let ok3 = document.querySelector(".icone9");

    ok1.classList.remove("desligar7");
    ok2.classList.add("desligar8");
    ok3.classList.add("desligar9");
    sobremesa1.classList.add("bordas");
    sobremesa2.classList.remove("bordas");
    sobremesa3.classList.remove("bordas");   
}
function escolherSobremesa2() {
    let sobremesa1 = document.querySelector(".item7");
    let sobremesa2 = document.querySelector(".item8");
    let sobremesa3 = document.querySelector(".item9");
    let ok1 = document.querySelector(".icone7");
    let ok2 = document.querySelector(".icone8");
    let ok3 = document.querySelector(".icone9");

    ok1.classList.add("desligar7");
    ok2.classList.remove("desligar8");
    ok3.classList.add("desligar9");
    sobremesa1.classList.remove("bordas");
    sobremesa2.classList.add("bordas");
    sobremesa3.classList.remove("bordas");   
}
function escolherSobremesa3() {
    let sobremesa1 = document.querySelector(".item7");
    let sobremesa2 = document.querySelector(".item8");
    let sobremesa3 = document.querySelector(".item9");
    let ok1 = document.querySelector(".icone7");
    let ok2 = document.querySelector(".icone8");
    let ok3 = document.querySelector(".icone9");

    ok1.classList.add("desligar7");
    ok2.classList.add("desligar8");
    ok3.classList.remove("desligar9");
    sobremesa1.classList.remove("bordas");
    sobremesa2.classList.remove("bordas");
    sobremesa3.classList.add("bordas");   
 }



