// Constants
const generateBtn = document.querySelector("#generate");

// Functions

/**
 * writes a generated password to the #password
 */
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/**
 * generate a password based on certain criteria
 */
function generatePassword(){

  let passwordLength = prompt("Enter a password that is the length of at least 8 characters and no more than 128 characters!");

  let passwordUperCase = confirm(" Do you want to use upcase?")

  let passwordLowerCase = confirm(" Do you want to use lowercase?")
  let passwordNumbers = confirm(" Do you want to use numbers?")
  let passwordSpecialCharacters = confirm(" Do you want to use specail characters?")

  console.log(passwordLength, passwordLowerCase, passwordNumbers, passwordSpecialCharacters, passwordUperCase)


  // Password is currently blank! We need to make a better one
  let password = "";





  return password;
}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
