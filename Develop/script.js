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
  let passwordUpperCase = confirm(" Do you want to use uppercase?")
  let passwordLowerCase = confirm(" Do you want to use lowercase?")
  let passwordNumbers = confirm(" Do you want to use numbers?")
  let passwordSpecialCharacters = confirm(" Do you want to use specail characters?")

  console.log(passwordLength, passwordLowerCase, passwordNumbers, passwordSpecialCharacters, passwordUpperCase)

  const alphabetUpperCase=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  const alphabetLowerCase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  const numbers=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

  const specialCharacters=


  // Password is currently blank! We need to make a better one
  let password = "";





  return password;
}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
