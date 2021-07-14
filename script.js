function tempo(){
setInterval(addBola, 1000)
}
function addBola(){
    var bola = document.createElement("div");
    bola.setAttribute("class","bola");
    //math floor transforma um numero decimal em inteiro arredondando pra baixo
    var p1 =  Math.floor(Math.random() * 300);
    var p2 =  Math.floor(Math.random() * 500);
    bola.setAttribute("style", `left: ${p1}px; top: ${p2}px;`);
    bola.setAttribute("onclick", "estourar(this), contador()");;
    document.body.appendChild(bola);
}
function estourar(objeto){
    document.body.removeChild(objeto);
}
var count = 0
function contador(){
    let numero = document.querySelector('#contador')
    let contador = count+=1;
    numero.innerHTML = "<p>"+contador+"</p>"
}