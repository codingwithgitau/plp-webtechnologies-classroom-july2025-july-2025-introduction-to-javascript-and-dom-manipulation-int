// ------Variables & Conditionals ------
function checkAge() {
  let age = document.getElementById("ageInput").value;
  let result = "";

  if (age >= 18) {
    result = " You are an adult.";
  } else if (age > 0) {
    result = " You are still a minor.";
  } else {
    result = " Please enter a valid age.";
  }

  document.getElementById("ageResult").textContent = result;
}

// ------ Functions -------
function showGreeting() {
  let name = prompt("Enter your name:");
  let message = `Hello, ${name}! Welcome to JavaScript.`;
  document.getElementById("greeting").textContent = message;
}

// Function with parameters and return
function calculateTotal(quantity, price) {
  let total = quantity * price;
  document.getElementById("totalResult").textContent =
    `Total cost for ${quantity} items: KSH ${total}`;
  return total;
}

// ---- Loops ---
function listFruits() {
  let fruits = [" Apple", " Banana", "Pineapple", " Grapes"];
  let list = document.getElementById("fruitList");
  list.innerHTML = ""; // clear before adding new items

  for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i];
    list.appendChild(li);
  }
}

function countdown(start) {
  let display = document.getElementById("countdownDisplay");
  display.textContent = "";

  let i = start;
  let timer = setInterval(function() {
    display.textContent = i;
    i--;
    if (i < 0) {
      clearInterval(timer);
      display.textContent = "🚀 Blast off!";
    }
  }, 1000);
}

// --------- DOM Manipulation ----
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

function addNewItem() {
  let newItem = prompt("Enter a new item:");
  if (newItem) {
    let li = document.createElement("li");
    li.textContent = newItem;
    document.getElementById("itemList").appendChild(li);
  }
}

// Extra: change box color on click
document.getElementById("dynamicBox").addEventListener("click", function() {
  this.style.backgroundColor =
    this.style.backgroundColor === "lightblue" ? "lightgreen" : "lightblue";
});
