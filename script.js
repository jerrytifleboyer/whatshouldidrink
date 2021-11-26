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
  const ingredient = document.querySelector(
    `.${ingredients[i].textContent.replace(/\s+/g, "")}`
  );
  const ingredientClicked = ingredients[i].textContent;

  ingredients[i].addEventListener("click", function () {
    if (ingredient.style.backgroundColor == "") {
      ingredient.style.backgroundColor = "green";
      for (const cocktail in cocktails) {
        if (cocktails[cocktail].includes(ingredientClicked)) {
          console.log(cocktail);
        }
      }
    } else {
      ingredient.style.backgroundColor = "";
    }
  });
}
