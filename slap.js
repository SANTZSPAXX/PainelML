const container = document.createElement("div");
container.style.textAlign = "center";

for (let i = 1; i <= 70; i++) {
  const box = document.createElement("div");
  box.innerText = i;
  container.appendChild(box);
}

document.body.appendChild(container);
