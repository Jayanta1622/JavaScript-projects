let userName = prompt("Enter your name:");

let modifiedName =
  userName[0].toLowerCase() === userName[0]
    ? userName[0].toUpperCase() + userName.slice(1)
    : userName;
console.log(modifiedName);