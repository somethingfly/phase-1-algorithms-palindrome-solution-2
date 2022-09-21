function isPalindrome(word) {
  // Write your algorithm here
  const stringLength = word.length;
  const halfLength = Math.ceil(stringLength/2);
  const startHalf = word.substring(0,halfLength);
  const endHalf = word.substring(stringLength - halfLength);
  let endHalfBackward = "";
  for (element in endHalf) {
    endHalfBackward = endHalf[element] + endHalfBackward;
  };
  return (startHalf == endHalfBackward)
}

/* 
  Add your pseudocode here

  I'm going to take my working code from last time
  And then put it here
  Really don't get the point of this, am I supposed to copy the solution on the page?
  Don't understand and I don't think it was clear

*/

/*
  Add written explanation of your solution here

  it works last time, so it'll pcrobably work again

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
