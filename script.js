let prato;
let bebida;
let sobremesa;
let precoPrato;
let precoBebida;
let precoSobremesa;
let preco = precoPrato + precoBebida + precoSobremesa
let mensagemEncoded;
let mensagem;
let nome;
let endereco;

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
    
    prato = "Frango Yin Yang"
    precoPrato = 14.90

    if ( (prato === "Frango Yin Yang" || prato === "Hamburguer" || prato === "Frango empanado") && (bebida === "Coquinha Gelada" || bebida === "Água gelada" || bebida === "Cerveja gelada") && (sobremesa === "Pudim" || sobremesa === "Mousse" || sobremesa === "Milkshake") ) {
        let pedido =  document.querySelector(".texto-pedido");
        let cor = document.querySelector(".finalizar-pedido")

        pedido.innerHTML = "Fechar pedido"
        pedido.classList.add("texto-cor")
        cor.classList.add("verde");
    }
    
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
    
    prato = "Hamburguer"
    precoPrato = 16.90

    if ( (prato === "Frango Yin Yang" || prato === "Hamburguer" || prato === "Frango empanado") && (bebida === "Coquinha Gelada" || bebida === "Água gelada" || bebida === "Cerveja gelada") && (sobremesa === "Pudim" || sobremesa === "Mousse" || sobremesa === "Milkshake") ) {
        let pedido =  document.querySelector(".texto-pedido");
        let cor = document.querySelector(".finalizar-pedido")

        pedido.innerHTML = "Fechar pedido"
        pedido.classList.add("texto-cor")
        cor.classList.add("verde");
    }

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

    prato = "Frango empanado"
    precoPrato = 19.90

    if ( (prato === "Frango Yin Yang" || prato === "Hamburguer" || prato === "Frango empanado") && (bebida === "Coquinha Gelada" || bebida === "Água gelada" || bebida === "Cerveja gelada") && (sobremesa === "Pudim" || sobremesa === "Mousse" || sobremesa === "Milkshake") ) {
        let pedido =  document.querySelector(".texto-pedido");
        let cor = document.querySelector(".finalizar-pedido")

        pedido.innerHTML = "Fechar pedido"
        pedido.classList.add("texto-cor")
        cor.classList.add("verde");
    }

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

    bebida = "Coquinha Gelada"
    precoBebida = 4.90

    if ( (prato === "Frango Yin Yang" || prato === "Hamburguer" || prato === "Frango empanado") && (bebida === "Coquinha Gelada" || bebida === "Água gelada" || bebida === "Cerveja gelada") && (sobremesa === "Pudim" || sobremesa === "Mousse" || sobremesa === "Milkshake") ) {
        let pedido =  document.querySelector(".texto-pedido");
        let cor = document.querySelector(".finalizar-pedido")

        pedido.innerHTML = "Fechar pedido"
        pedido.classList.add("texto-cor")
        cor.classList.add("verde");
    }

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

    bebida = "Água gelada"
    precoBebida = 5.90

    if ( (prato === "Frango Yin Yang" || prato === "Hamburguer" || prato === "Frango empanado") && (bebida === "Coquinha Gelada" || bebida === "Água gelada" || bebida === "Cerveja gelada") && (sobremesa === "Pudim" || sobremesa === "Mousse" || sobremesa === "Milkshake") ) {
        let pedido =  document.querySelector(".texto-pedido");
        let cor = document.querySelector(".finalizar-pedido")

        pedido.innerHTML = "Fechar pedido"
        pedido.classList.add("texto-cor")
        cor.classList.add("verde");
    }

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

    bebida = "Cerveja gelada"
    precoBebida = 7.90

    if ( (prato === "Frango Yin Yang" || prato === "Hamburguer" || prato === "Frango empanado") && (bebida === "Coquinha Gelada" || bebida === "Água gelada" || bebida === "Cerveja gelada") && (sobremesa === "Pudim" || sobremesa === "Mousse" || sobremesa === "Milkshake") ) {
        let pedido =  document.querySelector(".texto-pedido");
        let cor = document.querySelector(".finalizar-pedido")

        pedido.innerHTML = "Fechar pedido"
        pedido.classList.add("texto-cor")
        cor.classList.add("verde");
    }

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

    sobremesa = "Pudim"
    precoSobremesa = 7.90

    if ( (prato === "Frango Yin Yang" || prato === "Hamburguer" || prato === "Frango empanado") && (bebida === "Coquinha Gelada" || bebida === "Água gelada" || bebida === "Cerveja gelada") && (sobremesa === "Pudim" || sobremesa === "Mousse" || sobremesa === "Milkshake") ) {
        let pedido =  document.querySelector(".texto-pedido");
        let cor = document.querySelector(".finalizar-pedido")

        pedido.innerHTML = "Fechar pedido"
        pedido.classList.add("texto-cor")
        cor.classList.add("verde");
    }

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

    sobremesa = "Mousse"
    precoSobremesa = 8.90

    if ( (prato === "Frango Yin Yang" || prato === "Hamburguer" || prato === "Frango empanado") && (bebida === "Coquinha Gelada" || bebida === "Água gelada" || bebida === "Cerveja gelada") && (sobremesa === "Pudim" || sobremesa === "Mousse" || sobremesa === "Milkshake") ) {
        let pedido =  document.querySelector(".texto-pedido");
        let cor = document.querySelector(".finalizar-pedido")

        pedido.innerHTML = "Fechar pedido"
        pedido.classList.add("texto-cor")
        cor.classList.add("verde");
    }

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

    sobremesa = "Milkshake"
    precoSobremesa = 10.90
    
    if ( (prato === "Frango Yin Yang" || prato === "Hamburguer" || prato === "Frango empanado") && (bebida === "Coquinha Gelada" || bebida === "Água gelada" || bebida === "Cerveja gelada") && (sobremesa === "Pudim" || sobremesa === "Mousse" || sobremesa === "Milkshake") ) {
        let pedido =  document.querySelector(".texto-pedido");
        let cor = document.querySelector(".finalizar-pedido")

        pedido.innerHTML = "Fechar pedido"
        pedido.classList.add("texto-cor")
        cor.classList.add("verde");
    }
 }


   /*
  function fazerPedido() {
    let mensagem = "olá, gostaria de fazer o pedido: " + "<br>" + 
    "- Prato: " + prato + "\n" + "<br>" +
    "- Bebida: " + bebida + "\n" +
    "- Sobremesa: " + sobremesa + "\n" +
    " Total: " 

    mensagemEncoded = encodeURIComponent(mensagem);

    window.open("https://wa.me/5586994846600?text=" + mensagemEncoded)
}
 */
 

function fazerPedido() {
    
    if ( (prato === "Frango Yin Yang" || prato === "Hamburguer" || prato === "Frango empanado") && (bebida === "Coquinha Gelada" || bebida === "Água gelada" || bebida === "Cerveja gelada") && (sobremesa === "Pudim" || sobremesa === "Mousse" || sobremesa === "Milkshake") ) {
    nome = prompt("Qual seu nome?");
    endereco = prompt("Qual seu endereço?");
    mensagem = `Olá, gostaria de fazer o pedido:
  - Prato: ${prato}
  - Bebida: ${bebida}
  - Sobremesa: ${sobremesa}
  Total: R$ ${(precoPrato + precoBebida + precoSobremesa).toFixed(2)}\n
  nome: ${nome}
  endereço: ${endereco}`;
  
    mensagemEncoded = encodeURIComponent(mensagem);
    window.open(`https://wa.me/5586994846600?text=${mensagemEncoded}`, "_blank");
    }
  }
   

