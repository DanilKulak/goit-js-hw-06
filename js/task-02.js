const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];


const ulIngredients = document.getElementById("ingredients");
const arr = [];
ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient; 
  li.classList.add("item"); 
  arr.push(li);
});

 ulIngredients.append(...arr); 




























