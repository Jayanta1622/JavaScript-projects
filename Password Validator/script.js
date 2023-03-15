let password = prompt("Enter password:");
let confirmedPassword = prompt("Confirm password:");

if (password === confirmedPassword) {
  console.log("Password Matched. Password validation Successful.");
} else {
  console.log("Password didn't match. Password validation unsuccessful");
}