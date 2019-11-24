function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName[0].toUpperCase() + '.' + lastName[0].toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return Math.round(originalPrice * 100 + (originalPrice * vatRate)) / 100;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
   return Math.round(originalPrice * 100 - (originalPrice * reduction)) / 100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  if(str.length % 2 === 0){
    return str[(str.length/2)-1]+str[str.length/2];
  }else {
    return str[Math.floor(str.length / 2)];
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  const reversedWords = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let reverseWord = word.split("").reverse().join("");
    reversedWords.push(reverseWord);
  }
  return reversedWords
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let linuxUser = users.filter(function (user) {
    return user.type === "Linux"; 
  })
  return linuxUser.length;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let sum = 0
  scores.forEach(function (score) {
    sum = sum + score
  })
  return Math.round((sum / scores.length) * 100) / 100
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 === 0 && n % 5 === 0) {
    return 'fizzbuzz';
  }
  else if (n % 3 === 0) {
    return 'fizz';
  }
  else if (n % 5 === 0) {
    return 'buzz';
  }
  else { return n }
}


module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
