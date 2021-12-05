"use strict";
//this is sorta dumb but the html is reading from the cocktails.js file

const ingredientSelected = document.querySelectorAll(".ingredient");
const cocktailContainer = document.querySelector(".cocktails-container");
let ingredientList = [];
let counter = 0;

for (let i = 0; i < ingredientSelected.length; i++) {
  //regex get classname of element by textContent
  const ingredientClass = document.querySelector(
    `.${ingredientSelected[i].textContent.replace(/\s+/g, "")}`
  );
  //each ingredient when clicked
  ingredientSelected[i].addEventListener("click", function () {
    //ingredient is green when selected
    if (ingredientClass.style.backgroundColor == "") {
      ingredientClass.style.backgroundColor = "green";

      //display the cocktails that contain selected ingredients
      const ingredient = ingredientSelected[i].textContent;
      ingredientList.push(ingredient);
      showCocktail();
    } else {
      //unhighlight the selected item
      ingredientClass.style.backgroundColor = "";
      ingredientList.pop();
      showCocktail();
    }
  });
}

//this function compares the list of clicked items to the list of
//ingredients that make up that respective cocktail
function showCocktail() {
  if (ingredientList.length > 0) {
    for (const cocktail in cocktailList) {
      //TODO make sure the list isnt empty
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
    while (cocktailContainer.hasChildNodes) {
      cocktailContainer.removeChild(cocktailContainer.childNodes[0]);
    }
  }
}
