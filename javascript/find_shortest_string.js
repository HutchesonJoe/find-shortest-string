function findShortestString(arr) {
  let stringLengths = []
  for (let string of arr){
    splitStr = string.split('');
    let splitLength = splitStr.length;
    stringLengths.push(splitLength);
  }
  let minIndex = stringLengths.indexOf(Math.min(...stringLengths))
    return arr[minIndex]
} 


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  const startTime = Date.now();
  let longArr = []

  for (i=100; i<10000; i + 100){
    longArr.push(i)
  }

  for (i =0; i < 1000; i++){
    findShortestString(['flower', 'juniper', 'lily', 'dadelion']);
    findShortestString(longArr)
  }

  const avgTime = (Date.now() - startTime)/ 2000
  console.log(avgTime)
}




module.exports = findShortestString;

// Given an array of strings, return the shortest string length; if two strings have the same length, return the first one.
//this function takes an array of strings
//interates through the array converting EACH string to it's own array
//find the first minimum array.length
//rejoins the array into a string and returns
// And a written explanation of your solution
