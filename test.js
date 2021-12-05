// const cocktail = document.querySelector(".cocktails");

// function addList(cocktailList, element) {
//   for (const cocktail in cocktailList) {
//     const li = document.createElement("li"); //creates an <li>
//     li.textContent = cocktail; //li.textContent adds items in that list
//     element.appendChild(li); //adds them into the html
//   }
// }
// addList(cocktails, cocktail);

// function findcocktail(cocktails, memo=[]) {
//   for (cocktail in cocktails) {
//     //you clicked gin
//     const ingredientClicked = "gin"
//     memo.push(ingredientClicked)
//     if (cocktails[cocktail].includes(ingredientClicked)) {
//       console.log(cocktail);
//     }
//   }
// }

// findcocktail(cocktails);

let lookingFor = ["gin"];
let target = ["gin", "tonic", "lime"];

console.log(lookingFor.every((v) => target.includes(v)));

let arr = [];
for (const cocktail in cocktails) {
  arr.push(ingredientClicked);
  if (arr.every((v) => cocktails[cocktail].includes(v))) {
    const strippedCocktailNameSpace = cocktail.replace(/\s+/g, "");

    //TODO: every click => clear old li view, and generate a new list
    //when unhighlighting research list

    //target cocktail class
    const div = document.querySelector(".cocktails");

    //create a list element in html
    const li = document.createElement("li");

    //give it the html name
    li.textContent = cocktail;

    //give the list a class
    li.className = strippedCocktailNameSpace;

    //appends the text to the list
    div.appendChild(li).style.display = "block";
  }
}
