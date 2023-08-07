// script.js
const flavorList = [
    "Original",
    "Tropical Burst",
    "Berry Blast",
    "Citrus Splash",
    "Cherry Crush"
];

const flavorListContainer = document.getElementById("flavor-list");
const ul = document.createElement("ul");

flavorList.forEach(flavor => {
    const li = document.createElement("li");
    li.textContent = flavor;
    ul.appendChild(li);
});

flavorListContainer.appendChild(ul);
