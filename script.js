"use strict";
//this is sorta dumb but the html is reading from the cocktails.js file

const ingredientSelected = document.querySelectorAll(".ingredient");
const cocktailContainer = document.querySelector(".cocktails-container");
let ingredientList = [];

for (let i = 0; i < ingredientSelected.length; i++) {
  //classname of ingredient
  const ingredientClass = document.querySelector(
    `.${ingredientSelected[i].textContent.replace(/\s+/g, "")}`
  );
  //html of ingredient
  const ingredient = ingredientSelected[i].textContent;

  ingredientSelected[i].addEventListener("click", function () {
    //highlight selected
    if (ingredientClass.style.backgroundColor == "") {
      ingredientClass.style.backgroundColor = "#F5B041";

      //display cocktails
      ingredientList.push(ingredient);
      showCocktail();
    } else {
      //unhighlight the selected item
      ingredientClass.style.backgroundColor = "";

      //remove the cocktail from the list
      const removeIngredient = ingredientList.indexOf(ingredient);
      ingredientList.splice(removeIngredient, 1);
      showCocktail();
    }
  });
}

//this function compares the list of clicked items to the list of
//ingredients that make up that respective cocktail
function showCocktail() {
  if (ingredientList.length > 0) {
    console.log(ingredientList);
    clearDisplay();
    for (const cocktail in cocktailList) {
      if (ingredientList.every((e) => cocktailList[cocktail].includes(e))) {
        const mixedDrink = cocktail.replace(/\s+/g, "");
        //create a list element in html
        const li = document.createElement("li");
        //give it the html name
        li.textContent = cocktail;
        //give the list object a classname
        li.className = mixedDrink;
        //appends the text to the list
        cocktailContainer.appendChild(li).style.display = "block";
      }
    }
  } else {
    clearDisplay();
  }
}

//clear the cocktails screen
function clearDisplay() {
  while (cocktailContainer.hasChildNodes()) {
    cocktailContainer.removeChild(cocktailContainer.childNodes[0]);
  }
}
