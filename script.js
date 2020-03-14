// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Defining all arrays
  var numericArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*"];
  var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var combinedArray = [] //Array for password possibilities 
  var randomNbr = 0;
  var resultArray = [] //Password to return in text box
  var arrayLength = 0; //Length of your password possibilities


  // For loops to prompt questions
  for (var i = 0; i < 1000; i++) {
    var passwordLength = prompt("How many characters would you like your password to contain?");
    if ((passwordLength < 8) || (passwordLength > 128))
      alert("You must enter a value between 8 and 128")
    else break;
  }

  var specialCharacters = confirm("Click OK to confirm special characters.");
  if (specialCharacters === true)
    for (var j = 0; j < 8; j++) {
      combinedArray.push(specialArray[j]);
      arrayLength++;
    }
  var numericCharacters = confirm("Click OK to confirm numeric characters.");
  if (numericCharacters === true)
    for (var j = 0; j < 10; j++) {
      combinedArray.push(numericArray[j]);
      arrayLength++;
    }
  var upperCaseLetters = confirm("Click OK to confirm upper case letters.");
  if (upperCaseLetters === true)
    for (var j = 0; j < 26; j++) {
      combinedArray.push(upperCaseArray[j]);
      arrayLength++;
    }
  var lowerCaseLetters = confirm("Click OK to confirm lower case letters.");
  if (lowerCaseLetters === true)
    for (var j = 0; j < 26; j++) {
      combinedArray.push(lowerCaseArray[j]);
      arrayLength++;
    }

  for (var k = 0; k < passwordLength; k++) {
    randomNbr = Math.floor(Math.random() * Math.floor(arrayLength));
    resultArray.push(combinedArray[randomNbr]);
  }

  return resultArray.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







