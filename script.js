// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var passwordLength = prompt("How many characters would you like your password to contain?");
  var specialCharacters = confirm("Click OK to confirm special characters.");
  var numericCharacters = confirm("Click OK to confirm numeric characters");
  var upperCase = confirm("Click OK to confirm upper case letters.")
  var lowerCase = confirm("Click OK to confirm lower case letters.")
}

