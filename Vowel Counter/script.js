let userName = prompt("Enter your name:");
let count =0 ;

for (let i = 0; i < userName.length; i++) {
    let character = userName[i].toLowerCase();
     if(character==="a"||character==="e"||character==="i"||character==="o"||character==="u"){
        count++;
    }
}
