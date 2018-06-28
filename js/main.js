window.dataBip = (NTarjeta) => {
fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${NTarjeta}`)
  .then(response => response.json())
  .then( data => {
  console.log(data)
  })};


  let mail= document.getElementById("email_contacto");
  const btniniciar = document.getElementById('iniciar');
  const btnSaldo = document.getElementById('VerSaldo');
  const btnCalcTarifa = document.getElementById('CalcularTarifa');
  const btnPerfil = document.getElementById('Perfil');
  const btnPreguntasF = document.getElementById('Preguntas');
  const btn = document.getElementById("agregar");//agregar Ntarjetas


  
 
function Saldo(){
  window.location="indexSaldo.html"
}


const btonSaldo= document.getElementById("Saldo");
const vista=document.getElementById("info");



btonSaldo.addEventListener("click",event=>{
  const nTarjeta= document.getElementById("nro").value;
  fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${nTarjeta}`)
  .then(response=>response.json())
  .then(datos=>{
    console.log(datos);
    imprimirSaldo(datos)
  })
})

const imprimirSaldo= (datosTarjeta)=>{
  let saldoTarjeta= datosTarjeta["Saldo  tarjeta"];
  vista.innerHTML= "Tu saldo es " + saldoTarjeta;
}



//indexp boton para agregar las targetas 
/*const btn = document.getElementById("agregar");

boton.addEventListener("click", () => {  
    let comments = document.getElementById("comment").value;
    document.getElementById("comment").value = "";
    const cont = document.getElementById("cont");
    const newComments = document.createElement("div");
    
    
   
    const contenedorElemento = document.createElement("p");
    let textNewComment = document.createTextNode(comments);
    contenedorElemento.appendChild(textNewComment);
    
    
    newComments.appendChild(contenedorElemento);
    cont.appendChild(newComments);
*/