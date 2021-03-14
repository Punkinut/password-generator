// This is selecting the button that says 'Generate password'
var generateBtn = document.querySelector("#generate");

// The function that creates the random password
function writePassword() {

  
  function lengthAll(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

 function threeOne(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function threeTwo(length) {
  var result = '';
  var characters = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function threeThree(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function threeFour(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function twoOne(length) {
  var result = '';
  var characters = '0123456789!@#$%^&*';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function twoTwo(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function twoThree(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function twoFour(length) {
  var result = '';
  var characters = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function twoFive(length) {
  var result = '';
  var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function twoSix(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function oneOne(length) {
  var result = '';
  var characters = 'abcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function oneTwo(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function oneThree(length) {
  var result = '';
  var characters = '0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function oneFour(length) {
  var result = '';
  var characters = '@#$%^&*';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// Below are variables that store the users answers
  var passwordLengthChoice;
  var lowercaseChoice;
  var uppercaseChoice;
  var numberChoice;
  var specialChoice;

  // Below is the overal run function that runs through all the sub functions
  var run = function() {

    var startOfProgram = function () {
      var lengthOfPassword = window.prompt ("Choose a password length between 8 & 128")
      if ( parseInt(lengthOfPassword) >= 8 && parseInt(lengthOfPassword) <= 128) {
        passwordLengthChoice = lengthOfPassword
      } else {
        window.alert("You did not write a valid number. Please press 'OK' and start again!")
        startOfProgram()
      }
    };
   
    // Function for lowercase confirmation
    var lowerCaseCheck = () => {
      var lowerCaseConfirm = window.confirm("Do you want some LOWERCASE elements? Click OK or CANCEL");
      if (lowerCaseConfirm == true) {
        lowercaseChoice = true;
      } else {
        lowercaseChoice = false;
      }
    };

    // Function for uppercase confirmation
    var upperCaseCheck = () => {
      var upperCaseConfirm = window.confirm("Do you want some UPPERECASE elements? Click OK or CANCEL");
      if (upperCaseConfirm == true) {
        uppercaseChoice = true;
      } else {
        uppercaseChoice = false;
      }
    };

    // Function for number confirmation
    var integerCheck = () => {
      var numberValueConfirm = window.confirm("Do you want some NUMBER elements? Click OK or CANCEL");
      if (numberValueConfirm == true) {
        numberChoice = true;
      } else {
        numberChoice = false;
      }
    };

    // Function for special characters confirmation
    var specialCharacterCheck = () => {
      var specialValueConfirm = window.confirm("Do you want some SPECIAL elements? Click OK or CANCEL");
      if (specialValueConfirm == true) {
        specialChoice = true;
      } else {
        specialChoice = false;
      }
    };

    // Runs all the needed functions
    startOfProgram();
    lowerCaseCheck();
    upperCaseCheck();
    integerCheck();
    specialCharacterCheck();
    
    // Runs the program again if the if they click cancel for everything!
    if (lowercaseChoice === false && uppercaseChoice === false && numberChoice === false && specialChoice === false) {
      window.alert("You don't want anything in your password? Please start again")
      run();
    }
  }

  // This is the main function that when called, runs everything
  run();

  // This is the decisions making process which decides which randomizer to run
  var password = () => {
    var chooseRandomizer;
    if (lowercaseChoice === true && uppercaseChoice === true && numberChoice === true && specialChoice === true) {
      chooseRandomizer = lengthAll(passwordLengthChoice);
    } else if (lowercaseChoice === false && uppercaseChoice === true && numberChoice === true && specialChoice === true) {
      chooseRandomizer = threeOne(passwordLengthChoice);
    } else if (lowercaseChoice === true && uppercaseChoice === false && numberChoice === true && specialChoice === true) {
      chooseRandomizer = threeTwo(passwordLengthChoice);
    } else if (lowercaseChoice === true && uppercaseChoice === true && numberChoice === false && specialChoice === true) {
      chooseRandomizer = threeThree(passwordLengthChoice);
    } else if (lowercaseChoice === true && uppercaseChoice === true && numberChoice === true && specialChoice === false) {
      chooseRandomizer = threeFour(passwordLengthChoice);
    } else if (lowercaseChoice === false && uppercaseChoice === false && numberChoice === true && specialChoice === true) {
      chooseRandomizer = twoOne(passwordLengthChoice);
    } else if (lowercaseChoice === false && uppercaseChoice === true && numberChoice === false && specialChoice === true) {
      chooseRandomizer = twoTwo(passwordLengthChoice);
    } else if (lowercaseChoice === false && uppercaseChoice === true && numberChoice === true && specialChoice === false) {
      chooseRandomizer = twoThree(passwordLengthChoice);
    } else if (lowercaseChoice === true && uppercaseChoice === false && numberChoice === false && specialChoice === true) {
      chooseRandomizer = twoFour(passwordLengthChoice);
    } else if (lowercaseChoice === true && uppercaseChoice === false && numberChoice === true && specialChoice === false) {
      chooseRandomizer = twoFive(passwordLengthChoice);
    } else if (lowercaseChoice === true && uppercaseChoice === true && numberChoice === false && specialChoice === false) {
      chooseRandomizer = twoSix(passwordLengthChoice);
    } else if (lowercaseChoice === true && uppercaseChoice === false && numberChoice === false && specialChoice === false) {
      //  Only lowercase
      chooseRandomizer = oneOne(passwordLengthChoice);
    } else if (lowercaseChoice === false && uppercaseChoice === true && numberChoice === false && specialChoice === false) {
      //  Only uppercase
      chooseRandomizer = oneTwo(passwordLengthChoice);
    } else if (lowercaseChoice === false && uppercaseChoice === false && numberChoice === true && specialChoice === false) {
      //  Only numbers
      chooseRandomizer = oneThree(passwordLengthChoice);
    } else if (lowercaseChoice === false && uppercaseChoice === false && numberChoice === false && specialChoice === true) {
      //  Only special
      chooseRandomizer = oneFour(passwordLengthChoice);
    }
    return chooseRandomizer;
  };

  // Line 12 selects tha password section, line 13 prints the password to the website
  var passwordText = document.querySelector("#password");
  passwordText.value = password();

}

// This below is saying that when the button is clicked, follow out the write password function
generateBtn.addEventListener("click", writePassword);

