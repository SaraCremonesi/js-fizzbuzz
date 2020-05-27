// Variabile per appendere la lista
var lista = document.getElementById('lista');
// Variabile per assegnare ogni numero
var elemento;

// Ciclo for ed if per controllare i multipli di 3, 5 ed entrambi
for (var i = 0; i <= 100; i++) {
  if (i % 3 === 0) {
    elemento = 'Fizz';
  } else if (i % 5 === 0) {
    elemento = 'Buzz';
  } else if ((i % 3 === 0) && (i % 5 === 0)) {
    elemento = 'FizzBuzz';
  } else {
    elemento = i;
  }

  // Operazione di stampa a schermo della lista ottenuta
  lista.innerHTML = lista.innerHTML + '<li>' + elemento + '</li>'
};
