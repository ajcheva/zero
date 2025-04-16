const boton = document.querySelector(".saludar");
const mensaje = document.getElementById("mensaje");
const switchModo = document.getElementById("modoSwitch");

document.body.classList.add("dark-mode");


boton.addEventListener("click", function () {
  const ahora = new Date();
  const hora = ahora.toLocaleTimeString(); 

  mensaje.textContent = `¡Hola invitado! Son las ${hora}. Bienvenido a mi página.`;
  console.log("Hola Consola! Bienvenido a tu página");
  alert(`¡Pop-up activado! Son las: ${hora}`);
});

mensaje.classList.add("glow");

switchModo.addEventListener ("click", ()=> {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toString("light-mode");

  if (document.body.classList.contains ("dark-mode")){
    switchModo.textContent = "cambiar a modo claro";
  } else{
    switchModo.textContent = "cambiar a modo oscuro";
  }
});