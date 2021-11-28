"use strict";

const cocktails = {
  "moscow mule": ["vodka", "ginger beer", "lime"],
  cosmopolitan: ["vodka", "cranberry", "lemon", "cointreau", "simple syrup"],
  "vodka cranberry": ["vodka", "cranberry"],
  "lemon drop": ["vodka", "cointreau", "lemon", "simple syrup"],

  "gin and tonic": ["gin", "lime", "tonic"],
  "tom collins": ["gin", "lemon", "simple syrup", "club soda"],
  gimlet: ["gin", "lime", "simple syrup"],
  bramble: ["gin", "lemon", "creme de mure"],
  "gin fizz": ["gin", "lemon", "simple syrup", "egg white", "club soda"],
  "french 75": ["gin", "lemon", "simple syrup", "champagne"],
  "south side": ["gin", "lime", "simple syrup", "mint"],
  "gin mule": ["gin", "lime", "ginger beer"],
  negroni: ["gin", "aperol", "vermouth"],
  martini: ["gin", "vermouth"],

  "whiskey sour": ["whiskey", "lemon", "simple syrup", "egg white", "bitters"],
  "irish mule": ["whiskey", "lime", "ginger beer"],
  sidecar: ["cognac", "cointreau", "lemon"],
};

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
          //target cocktail class
          const div = document.querySelector(".cocktails");

          //create a list element in html
          const li = document.createElement("li");

          //store name of cocktail
          li.textContent = cocktail;

          //give the content a class
          li.className = cocktail;

          //appends the text to the list
          div.appendChild(li).style.display = "block";
        }
      }
    }
    //unhighlight the selected item
    else {
      ingredient.style.backgroundColor = "";
    }
  });
}
