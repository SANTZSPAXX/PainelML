document.addEventListener("DOMContentLoaded", function() {

    var botao = document.createElement('button');
    botao.innerHTML = 'ISL-0-1-003 (Z1)';
    document.body.appendChild(botao);
    var contador = 0;
    botao.onclick = function() {
      contador++;
      if (contador == 1) {
        botao.style.backgroundColor = 'green';
      } else if (contador == 2) {
        botao.style.backgroundColor = 'red';
      } else {
        botao.style.backgroundColor = 'white';
        contador = 0;
      }
    };
    });