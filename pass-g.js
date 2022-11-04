let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");

function generatePassword(){
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";
  const symbol = "!@#$%^&*()_+=-{}[]':;.,<>?/~";

  const data = lowerAlphabet + upperAlphabet + numeric + symbol ;
  let generator = '';
  for (let index = 0; index < passwordLength.value; index++) {
    generator += data[~~(Math.random() * data.length)];
  }
  return generator
}

function getPassword (){
  const newPassword = generatePassword(passwordLength.value)
  password.value = newPassword;
  setTimeout(() => {
    alert ('password has been generate')
  }, 300);
}

function savePassword(){
  password.select();
  password.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(password.value);
  setTimeout(() => {
    alert("Text has been copied")
  }, 300);
}