
let numeroSecreto = 0;
let intentos=0;
let listaNumerosSorteados =[];
let numeroMaximo = 10
console.log (numeroSecreto);
 
function asignarTextoElemento(elemento,texto){
 let elementoHTML = document.querySelector(elemento);
 elementoHTML.innerHTML =texto; 
 return;
}
 function verificarIntento(){
    let numeroDigitado = parseInt(document.getElementById('numeroParticipante').value);
    
    if (numeroSecreto===numeroDigitado){
        asignarTextoElemento('p',`Acertastes el numero en ${intentos} ${(intentos===1)?'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
      }else{
      if (numeroDigitado > numeroSecreto){
      asignarTextoElemento('p','El numero es menor');
      }else
      {asignarTextoElemento('p','El numero es mayor');}
     }
     intentos++;
     limpiarCaja();
    return;
 }
function limpiarCaja(){
  document.querySelector('#numeroParticipante').value ='';
}

 function generarNumeroSecreto() {
   let numeroGenerado = Math.floor((Math.random()*numeroMaximo)+1);
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   if(listaNumerosSorteados.length==numeroMaximo){
    asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
   } else{
    // si el numero generado esta incluido en la lista
      if(listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
      } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
      }
    }
   }
 function condicionesIniciales(){
  asignarTextoElemento('h1','Juego del numero secreto');
  asignarTextoElemento('p',`Escoge un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos=1;
 }
 function reiniciarJuego(){
  
  // limpiar la caja
  limpiarCaja();
  // Indiicar mensaje de numero 
  // generar el numero aleatorio
  // inicializar el numero intentos
  condicionesIniciales()
  //desabilitar el boton nuevo juego
   document.querySelector('#reiniciar').setAttribute('disabled','true');

  }
 condicionesIniciales()

 

