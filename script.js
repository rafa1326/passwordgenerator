// Assignment code here
var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('')
var UppercaseLetters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
var NumericCharacters = '0123456789'.split('')
var SpecialCharacters = '!@#$%&*+'.split('')


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function getRandomindex(array){
  var index =Math.floor(Math.random()*array.length)
return array[index]
}
function generatePassword(){
  var charLength = 0
  do {
     charLength = parseInt(prompt("Please enter the length of the password (8<=characters<=128):")) 
  } while (charLength < 8 || charLength > 128);
  var includeLowerCaseChars = confirm("Would you like your password to include lowercase letters?")
  var includeUpperCaseChars = confirm("Would you like your password to include Uppercase letters?")
  var includeNumericChars = confirm("Would you like your password to include Numbers?")
  var includeSpecialChars = confirm("Would you like your password to include special charcaters?")
  var results=[] 

var charoptions=[]

if (includeLowerCaseChars) {
  charoptions=charoptions.concat(lowercaseLetters)
results.push(getRandomindex(lowercaseLetters))
}


if (includeUpperCaseChars) {
  charoptions=charoptions.concat(UppercaseLetters)
results.push(getRandomindex(UppercaseLetters))
}

if (includeNumericChars) {
  charoptions=charoptions.concat(NumericCharacters)
results.push(getRandomindex(NumericCharacters))
}
if (includeSpecialChars) {
  charoptions=charoptions.concat(SpecialCharacters)
results.push(getRandomindex(SpecialCharacters))

}
console.log(charLength)

console.log(charoptions)


for (let index = results.length; index < charLength; index++) {
  results.push(getRandomindex(charoptions))
  
}


return results.join('')


}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
