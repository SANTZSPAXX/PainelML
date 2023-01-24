var save_button = document.getElementById('Save')
save_button.onclick = saveData;

function saveData(){
  var input = document.getElementById("saveServer");
  localStorage.setItem("server", input.value);
  var storedValue = localStorage.getItem("server");
}