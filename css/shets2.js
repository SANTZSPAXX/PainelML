const apiUrl = 'https://api.sheety.co/0c265defc9752d9e9b6d9bfdd60b33f4/db/db';

const data = {
    MU: "Value1",
    DT: "Value2",
    HR: "Value3",
    LC: "Value4"
};

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
};

fetch(apiUrl, options)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error(error));
