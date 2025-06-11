function cambiarColor() {
  const colores = ['#f0f0f0', '#ffcccc', '#ccffcc', '#ccccff', '#ffffcc'];
  const colorActual = document.body.style.backgroundColor;
  let nuevoColor;
  
  do {
    nuevoColor = colores[Math.floor(Math.random() * colores.length)];
  } while (nuevoColor === colorActual);
  
  document.body.style.backgroundColor = nuevoColor;
}
