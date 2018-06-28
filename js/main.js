




const boton = document.getElementById("verSaldo");
fetch('http://www.psep.cl/api/Bip.php?&numberBip={´$nTarjeta´}')
     .then(response => response.json())
     .then( data => {
       console.log(data)
      });



//indexp boton para agregar las targetas 
const btn = document.getElementById("agregar");

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
})
  
        