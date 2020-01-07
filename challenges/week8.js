const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  if (nums.includes(n)) {
    const foundNum = nums.indexOf(n) + 1;
    if (typeof nums[foundNum] === 'undefined') return null;
    return nums[foundNum];
  }
  return null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  const obj = { 1: 0, 0: 0 };
  str.split('').forEach(num => {
    if (num === "1") obj[1]++;
    if (num === "0") obj[0]++;
  })
  return obj;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return n.toString().split('').reverse().join('') * 1;
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let total = 0;
  arrs.forEach(array => {
    total = total + array.reduce((a, b) => a + b);
  })
  return total;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length > 1) {
    const firstNum = arr.shift();
    const lastNum = arr.pop();
    arr.unshift(lastNum);
    arr.push(firstNum);
    return arr;
  } else return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  const string = Object.values(haystack).toString(',').toLowerCase()
  return string.includes(searchTerm.toLowerCase())
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  let obj = {};
  let array = str.replace(/[^a-zA-Z ]/g, "").toLowerCase().split(' ');
  array.filter(word => {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === word) counter++
      obj[word] = counter
    }
  })
  return obj
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};

