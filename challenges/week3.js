function getSquares(nums) {
    if (nums === undefined) throw new Error("nums is required");
    let squaredArr = nums.map(function (item) {
        return item * item;
      })
      return squaredArr;
    }

  
  function camelCaseWords(words) {
    if (words === undefined) throw new Error("words is required");
    let camelStr = words[0];
  if (words.length === 1) {
    return camelStr;
  } else {
    for (let i = 1; i < words.length; i++) {
      camelStr = camelStr + (words[i].charAt(0).toUpperCase() + words[i].slice(1))
    }
    return camelStr
  }
}
  
  function getTotalSubjects(people) {
    if (people === undefined) throw new Error("people is required");
    let total = 0;
    people.forEach(function (item) {
      total = total + item.subjects.length;
    })
    return total;
  } 
  
  function checkIngredients(menu, ingredient) {
    if (menu === undefined) throw new Error("menu is required");
    if (!ingredient) throw new Error("ingredient is required");
    if (!ingredient) throw new Error("ingredient is required");
    let ingredientFound = false
    menu.forEach(function (menuItem) {
      menuItem.ingredients.forEach(function (menuItemIngredient) {
        if (menuItemIngredient === ingredient) {
          ingredientFound = true;
        }
      })
  
    })
    return ingredientFound;
  }

  
  function duplicateNumbers(arr1, arr2) {
    if (arr1 === undefined) throw new Error("arr1 is required");
    if (arr2 === undefined) throw new Error("arr2 is required");
    const tallyArr = arr1.filter(element => arr2.includes(element))
  tallyArr.sort((a, b) => a - b);
  const uniqueSet = new Set(tallyArr)
  const resultArray = [...uniqueSet]
  return resultArray;
}
  
  module.exports = {
    getSquares,
    camelCaseWords,
    getTotalSubjects,
    checkIngredients,
    duplicateNumbers
  };