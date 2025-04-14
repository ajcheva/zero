const boton = document.querySelector(".saludar");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
  const ahora = new Date();
  const hora = ahora.toLocaleTimeString(); 

  mensaje.textContent = `¡Hola Agustín! Son las ${hora}. Bienvenido a tu página.`;
  console.log("Hola Consola! Bienvenido a tu página");
  alert(`¡Pop-up activado! Son las: ${hora}`);
});

mensaje.classList.add("glow");
