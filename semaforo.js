const pulse = document.getElementById("start");
const espere = document.getElementById("texto");
const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const amarillo = document.getElementById("amarillo");
const texto = document.getElementById("caja");
let tiempo;
Inicial();


function pulsar(){
  pulse.removeEventListener("click",pulsar);
  pulse.style.background =" #3e8e41";
  espere.style.background ="rgb(233, 190, 51)";
  espere.style.boxShadow = " 0 0 10px 1px rgb(231, 172, 24)";
  tiempo = setTimeout(luzAmarilla,3000);
}

function luzAmarilla(){
  //luz amarilla
  encenderAmarillo();
  apagar(verde);
  tiempo = setTimeout(luzRoja,2000);

}
function luzRoja(){
  apagar(amarillo);
  encenderRojo();
  texto.innerHTML = "Cruce";
  tiempo = setTimeout(Inicial,5000);
}

function encenderVerde(){
  verde.style.background="green";
  verde.style.boxShadow ="0 0 10px 1px  green";
}
function encenderAmarillo(){
  amarillo.style.background="rgb(231, 172, 24)";
  amarillo.style.boxShadow =" 0 0 10px 1px rgb(231, 172, 24)";
}
function encenderRojo(){
  rojo.style.background ="rgb(190, 43, 43)";
  rojo.style.boxShadow="0 0 10px 1px rgb(190, 43, 43)";
}

function apagar(o){
  o.style.background="rgb(40, 39, 40)";
  o.style.boxShadow ="none";
}
function Inicial(){
  encenderVerde();
  apagar(amarillo);
  apagar(rojo);
  texto.innerHTML ="Espere";
  espere.style.backgroundColor="#2c3e50";
  espere.style.boxShadow= "none";
  pulse.addEventListener("click",pulsar);
  pulse.style.background = "#4CAF50";



}






