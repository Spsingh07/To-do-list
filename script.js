const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const btn = document.querySelector(".btn");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else if (inputBox.value === " "){
    alert("You must write something!");
  } else {
    const listItem = document.createElement("li");
    listItem.innerHTML = inputBox.value;
    listContainer.appendChild(listItem);
    const span = document.createElement("span");
    span.innerHTML = "&#x2715;";
    listItem.appendChild(span);
  }
  inputBox.value = " ";
  saveData();
}

btn.addEventListener("click", function () {
  addTask();
});

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();

console.log(window);