<table id="data-table">
  <tr>
    <th>MU</th>
    <th>DT</th>
    <th>HR</th>
    <th>LC</th>
  </tr>
</table>

fetch("https://api.sheety.co/0c265defc9752d9e9b6d9bfdd60b33f4/db/db")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const table = document.getElementById("data-table");
    data.forEach(row => {
        var tr = document.createElement("tr");
        Object.values(row).forEach(cell => {
            var td = document.createElement("td");
            td.innerHTML = cell;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
  })
  .catch(error => {
    console.error(error);
  });
