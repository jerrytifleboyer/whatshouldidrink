"use strict";
//this is sorta dumb but the html is reading from the cocktails.js file
//dictionary is in cocktail.js

const ingredients = document.querySelectorAll(".ingredient");

for (let i = 0; i < ingredients.length; i++) {
  //strip the spaces of the ingredient clicked
  const ingredient = document.querySelector(
    `.${ingredients[i].textContent.replace(/\s+/g, "")}`
  );
  //save the stripped value as a variable to compare later
  const ingredientClicked = ingredients[i].textContent;

  //class listens clicks
  ingredients[i].addEventListener("click", function () {
    //highlight the selected item
    if (ingredient.style.backgroundColor == "") {
      ingredient.style.backgroundColor = "green";

      //check if the item selected is in the list of cocktails, return the cocktail
      for (const cocktail in cocktails) {
        if (cocktails[cocktail].includes(ingredientClicked)) {
          const strippedCocktailNameSpace = cocktail.replace(/\s+/g, "");

          //TODO: check if the cocktail is already present on the list, if is dont add it

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
    }
    //unhighlight the selected item
    else {
      ingredient.style.backgroundColor = "";
      //remove cocktails when unselecting the ingredient
      for (const cocktail in cocktails) {
        if (cocktails[cocktail].includes(ingredientClicked)) {
          const strippedCocktailNameSpace = cocktail.replace(/\s+/g, "");
          const div = document.querySelector(".cocktails");
          const li = document.querySelector(`.${strippedCocktailNameSpace}`);
          div.removeChild(li);
        }
      }
    }
  });
}
