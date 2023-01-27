for (let j = 0; j <= 3; j++) {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    container.style.flexWrap = "wrap";
    container.style.backgroundColor = "blue";
    container.style.color = "white";
    container.style.padding = "20px";
  
    const title = document.createElement("h1");
    title.innerHTML = "MEZANINO " + (j+1);
    title.style.marginBottom = "20px";
    title.style.textAlign = "center";
    container.appendChild(title);
  
    for (let i = 1; i <= 20; i++) {
      const button = document.createElement("button");
      button.innerHTML = "Z" + i;
      button.style.margin = "10px";
      button.style.padding = "20px";
      button.style.fontSize = "20px";
      button.style.backgroundColor = "white";
      button.style.color = "black";
      button.style.border = "1px solid black";
      if(localStorage.getItem("Z"+(j+1)+i) === "true"){
        button.style.backgroundColor = "green";
      }
      button.addEventListener("click", function() {
        if (localStorage.getItem("Z"+(j+1)+i) === "true") {
          button.style.backgroundColor = "white";
          localStorage.setItem("Z"+(j+1)+i, "false");
        } else {
          button.style.backgroundColor = "green";
          localStorage.setItem("Z"+(j+1)+i, "true");
        }
      });
      container.appendChild(button);
    }
  
    document.body.appendChild(container);
  }
  