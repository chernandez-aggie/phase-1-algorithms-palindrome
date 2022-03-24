function isPalindrome(word) {
  // Write your algorithm here
  let newString = "";
  for (let i = word.length -1; i >= 0; i--){
        newString = newString + word[i];
  }
  console.log(`${word} and ${newString}`);
  if (word === newString) {
    return true;
  } else {
    return false;
  }

}

/* 
  Add your pseudocode here
  1. take in string
  2. loop over each character of string backwards
  3. while looping input that character into new string
  4. see if new string matches original string
  5. if yes, print true. if no, print false.
 
*/

/*
  Add written explanation of your solution here
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
