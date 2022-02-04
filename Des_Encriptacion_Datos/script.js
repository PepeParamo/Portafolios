/*Proceso de encriptacion*/
function procesoEncriptar() {
        
    let textoencriptar = document.getElementById("input-texto").value;
    textoencriptar = textoencriptar.toLowerCase();
    textoencriptar = textoencriptar.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
    if (!textoencriptar) {
      alert("Algo paso... Verificar");
    } else {
      let encriptando = textoencriptar.replace(/e/g, "enter");
  
      encriptando = encriptando.replace(/i/g, "imes");
      //console.log("imes", encriptando);
      encriptando = encriptando.replace(/a/g, "ai");
      //console.log("ai", encriptando);
      encriptando = encriptando.replace(/o/g, "ober");
      //console.log("o", encriptando);
      encriptando = encriptando.replace(/u/g, "ufat");
      //console.log("u", encriptando);
  
      document.getElementById("msg").value=encriptando;
      document.getElementById("input-texto").value="";
      
    }
}  

/*Proceso de DES-encriptacion*/
function procesoDesencriptar() {
let textodesencriptar = document.getElementById("input-texto").value;
textodesencriptar = textodesencriptar.toLowerCase();
textodesencriptar = textodesencriptar.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

if (!textodesencriptar) {
    alert("Algo paso... Verificar");
}else {
  let encriptando = textodesencriptar.replace(/enter/g, "e");
  encriptando = encriptando.replace(/imes/g, "i");
  encriptando = encriptando.replace(/ai/g, "a");
  encriptando = encriptando.replace(/ober/g, "o");
  encriptando = encriptando.replace(/ufat/g, "u");

  document.getElementById("msg").value=encriptando;
  document.getElementById("input-texto").value="";
 
}
}


/*Copiar informacion */
function copiarPortapapeles() {

    var content = document.getElementById('msg');
    
    content.select();
    document.execCommand('copy');

    alert("El texto esta en el Portapapeles!");
}


