// Cria a tabela
var table = document.createElement("table");

// Cria a linha
var row = document.createElement("tr");

// Cria as células
var cell1 = document.createElement("td");
var cell2 = document.createElement("td");

// Cria o botão
var button = document.createElement("button");
button.innerHTML = "Clique aqui";

// Adiciona o botão à primeira célula
cell1.appendChild(button);

// Adiciona as células à linha
row.appendChild(cell1);
row.appendChild(cell2);

// Adiciona a linha à tabela
table.appendChild(row);

// Adiciona a tabela à sua página HTML
document.body.appendChild(table);
