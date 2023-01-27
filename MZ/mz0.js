document.addEventListener("DOMContentLoaded", function() {
  var table = document.createElement("table");
  document.body.appendChild(table);
  var titulos = ["Z1", "Z2", "Z3", "Z4", "Z5"];
  for (var i = 0; i < 5; i++) {
      var row = table.insertRow();
      var cell = row.insertCell();
      var botao = document.createElement('button');
      botao.innerHTML = titulos[i];
      cell.appendChild(botao);
      var contador = 0;
      botao.onclick = function() {
          contador++;
          if (contador == 1) {
              botao.style.backgroundColor = 'green';
              localStorage.setItem("button" + i, "green");
          } else if (contador == 2) {
              botao.style.backgroundColor = 'red';
              localStorage.setItem("button" + i, "red");
          } else {
              botao.style.backgroundColor = 'white';
              localStorage.setItem("button" + i, "white");
              contador = 0;
          }
      };
      var storedColor = localStorage.getItem("button" + i);
      if (storedColor == "green") {
          botao.style.backgroundColor = "green";
      } else if (storedColor == "red") {
          botao.style.backgroundColor = "red";
      }
  }
  table.style.margin = "0 auto";
  table.style.display = "block";
});
