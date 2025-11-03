function cambiarGear(gear) {
  const personaje = document.getElementById("personaje");
  const nubes = document.getElementById("nubes");
  const videoFondo = document.getElementById("videoFondo");

  switch (gear) {
    case 'gear2':
      personaje.src = "Gear2.gif";
      document.body.style.backgroundColor = "";
      nubes.style.opacity = 0;
      videoFondo.style.opacity = 0;
      break;
    case 'gear3':
      personaje.src = "Gear3.gif";
      document.body.style.backgroundColor = "#506070";
      nubes.style.opacity = 0;
      videoFondo.style.opacity = 0;
      break;
    case 'gear4':
      personaje.src = "Gear4.gif";
      document.body.style.backgroundColor = "#3E2622";
      nubes.style.opacity = 0;
      videoFondo.style.opacity = 0;
      break;
    case 'gear5':
      personaje.src = "Gear5.gif";
      document.body.style.backgroundColor = "#49557D";
      nubes.style.opacity = 1;
      videoFondo.style.opacity = 1;
      break;
    default:
      personaje.src = "Luffy.gif";
      document.body.style.backgroundColor = "#f0f0f0";
      nubes.style.opacity = 0;
      videoFondo.style.opacity = 0;
  }
}