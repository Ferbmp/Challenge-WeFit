// Menu

const menu = document
   .getElementById("menu")
   .getElementsByClassName("btn-group-vertical")[0];

menu.style.display = "flex";
menu.style.flexDirection = "row";
menu.style.alignItems = "center";

let menuButtonsContainer = document.getElementsByClassName("col-lg-12")[0];
menuButtonsContainer.style.padding = 0;
menuButtonsContainer.style.width = "100%";
menuButtonsContainer.style.maxWidth = "516px";

let menuButtons = menu.getElementsByClassName("btn btn-secondary");
menuButtons = Array.prototype.slice.call(menuButtons);
menuButtons.forEach((button) => {
   button.style["borderRadius"] = "4px";
   button.style.margin = "0 4px";
   button.style.padding = "8px";
   button.style.width = "auto";
});

// Header
const header = document
   .getElementById("header")
   .getElementsByClassName("jumbotron")[0];

header.style.textAlign = "right";
header.style.backgroundColor = "#6c757d";
header.style.color = "#fff";

const button = header.getElementsByTagName("a")[0];
button.style.backgroundColor = "#53A651";
button.style.border = "0";

// Cards

let cards = document.getElementsByClassName("col-lg-3");
cards = Array.prototype.slice.call(cards);
const newDiv = document.createElement("div");

newDiv.classList.add("cardsContainer");

newDiv.style.display = "flex";
newDiv.style.flexDirection = "row";
newDiv.style.width = "100%";

cards.forEach((card) => {
   card.parentNode.insertBefore(newDiv, card);
   newDiv.appendChild(card);
});

for (let j = 0; j < cards.length; j++) {
   cards[j].style.display = "flex";
   cards[0].style.order = "1";
   cards[1].style.order = "4";
   cards[2].style.order = "3";
   cards[3].style.order = "0";
   const buttonToChangeColor = cards[0].getElementsByTagName("a")[0];
   buttonToChangeColor.style.backgroundColor = "#53A651";
   buttonToChangeColor.style.border = "none";
}

// List

let ul = document.getElementsByClassName("list-group")[0];
let listItems = document.getElementsByClassName("list-group-item");
listItems = Array.prototype.slice.call(listItems);
listItems[0].classList.remove("active");

let fourth = document.createElement("li");
fourth.classList.add("list-group-item");
fourth.classList.add("active");

fourth.appendChild(document.createTextNode("Quarto Item"));
ul.appendChild(fourth);

let fifth = document.createElement("li");
fifth.classList.add("list-group-item");

fifth.appendChild(document.createTextNode("Quinto Item"));
ul.appendChild(fifth);
