"use strict";

const cocktails = {
  "moscow mule": ["vodka", "ginger beer", "lime"],
  "gin and tonic": ["gin", "lime", "tonic"],
};

const ingredients = document.querySelectorAll(".ingredient");

// clicking the ingredients toggles them on
for (let i = 0; i < ingredients.length; i++) {
  ingredients[i].addEventListener("click", function () {
    document.querySelector(`.${ingredients[i].textContent}`).style
      .backgroundColor == ""
      ? (document.querySelector(
          `.${ingredients[i].textContent}`
        ).style.backgroundColor = "green")
      : (document.querySelector(
          `.${ingredients[i].textContent}`
        ).style.backgroundColor = "");
  });
}

// //clicking the ingredients displays their respective cocktails
// for (let i = 0; i < ingredients.length; i++) {
//   ingredients[i].addEventListener("click", function () {
//     const ingredientClicked = ingredients[i].textContent;
//     for (const cocktail in cocktails) {
//       if (cocktails[cocktail].includes(ingredientClicked)) {
//         console.log(cocktail);
//       }
//     }
//   });
// }
