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

const cocktail = document.querySelector(".cocktails");

function addList(cocktailList, element) {
  for (const cocktail in cocktailList) {
    const li = document.createElement("li"); //creates an <li>
    li.textContent = cocktail; //li.textContent adds items in that list
    element.appendChild(li); //adds them into the html
  }
}

addList(cocktails, cocktail);

// function findcocktail(cocktails) {
//   for (ingredient in cocktails) {
//     if (cocktails[ingredient].includes("gin")) {
//       console.log(ingredient);
//     }
//   }
// }

// findcocktail(cocktails);
