const apiUrl = 'https://sheetdb.io/api/v1/bx0bzt552stno';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const headerCell1 = document.createElement('th');
    headerCell1.textContent = "MU";
    const headerCell2 = document.createElement('th');
    headerCell2.textContent = "DT";
    const headerCell3 = document.createElement('th');
    headerCell3.textContent = "HR";
    const headerCell4 = document.createElement('th');
    headerCell4.textContent = "LC";
    headerRow.appendChild(headerCell1);
    headerRow.appendChild(headerCell2);
    headerRow.appendChild(headerCell3);
    headerRow.appendChild(headerCell4);
    table.appendChild(headerRow);
    data.forEach(row => {
      const tableRow = document.createElement('tr');
      const cell1 = document.createElement('td');
      cell1.textContent = row.MU;
      const cell2 = document.createElement('td');
      cell2.textContent = row.DT;
      const cell3 = document.createElement('td');
      cell3.textContent = row.HR;
      const cell4 = document.createElement('td');
      cell4.textContent = row.LC;
      tableRow.appendChild(cell1);
      tableRow.appendChild(cell2);
      tableRow.appendChild(cell3);
      tableRow.appendChild(cell4);
      table.appendChild(tableRow);
    });
    document.body.appendChild(table);
  })
  .catch(error => console.error(error));
