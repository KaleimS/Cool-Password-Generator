var generateBtn = document.querySelector("#generate");
alert("Welcome to my Password Generator");

// Function to prompt user for password options
function getPasswordOptions() {
  // Variables for what characters can be used through line 6 to 9
  const specialCharacters = "@%+\\/'!#$^?:,)(}{][~-_.";
  const numericCharacters = "0123456789";
  const lowerCasedCharacters = "abcdefghijklmnopqrstuvwxyz";
  const upperCasedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let newPassword = "";
  let multiSelect = "";

  // Prompt to tell user how long the password has to be
  const passwordLength = prompt("Pick the length of your password. It must be between 8 and 128 characters.(Example: 12)");

  //If statement for getting the password options
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    //If the password length is less than 8 or more than 128 line 19 alert "Please try again will show"
    alert("Please try again. Password can have 8 to 128 characters");
    return; //If password length does not meet requirements it will return the alert above on like 19
  } else {
    // else statement to ask which characters you want to include in your password
    var upperCase = confirm(
      "Do you want to include uppercase characters in your password?"
    );
    var lowerCase = confirm(
      "Do you want to include lowercase characters in your password?"
    );
    var specialChar = confirm(
      "Do you want to include special characters in your password?"
    );
    var numericChar = confirm(
      "Do you want to include numeric characters in your password?"
    );
  }

  //if statements which specify which characters you chose and which characters to add or not add to multiSelect which is a empty variable
  if (upperCase) {
    multiSelect += upperCasedCharacters;
  }

  if (lowerCase) {
    multiSelect += lowerCasedCharacters;
  }

  if (specialChar) {
    multiSelect += specialCharacters;
  }

  if (numericChar) {
    multiSelect += numericCharacters;
  }

  // This for statement is randomizing the newPassword. By now it has all the info it needs to do the math to create a password which whichever fields the user input or chose
  for (i = 0; i < passwordLength; i++) {
    newPassword += multiSelect[Math.floor(Math.random() * multiSelect.length)];
  }
  return newPassword;
}

var placeholderBox = document.querySelector("#password"); //This finds the id #password from the html
function writePassword(newPassword) {
  if (newPassword.length === 0) {
    return;
  }
  placeholderBox.value = newPassword;
}

// Add event listener to generate button
// This will run the function getPasswordOptions
generateBtn.addEventListener("click", function () {
  writePassword(getPasswordOptions());
});
