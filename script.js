const colores = ['#f0f8ff', '#ffe4e1', '#e0ffe0', '#fef9c3', '#e0f7fa', '#f3e5f5'];
const frases = [
  '¡Hoy es un gran día!',
  'Sigue aprendiendo y creciendo.',
  'La creatividad no tiene límites.',
  'Haz clic y transforma tu mundo.',
  '¡Tu código puede cambiar el mundo!',
  'Colores nuevos, ideas nuevas.'
];

function cambiarColor() {
  let nuevoColor, nuevaFrase;

  do {
    nuevoColor = colores[Math.floor(Math.random() * colores.length)];
  } while (nuevoColor === document.body.style.backgroundColor);

  do {
    nuevaFrase = frases[Math.floor(Math.random() * frases.length)];
  } while (nuevaFrase === document.getElementById("frase").innerText);

  document.body.style.backgroundColor = nuevoColor;
  document.getElementById("frase").innerText = nuevaFrase;
}
