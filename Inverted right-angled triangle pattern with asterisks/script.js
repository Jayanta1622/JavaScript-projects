let rows = parseInt(prompt("Enter the number of rows"));

for (let i = 0; i < rows; i++) {
    let line = "";
    for (let j = i; j < rows; j++) {
        line += "*";
    }
    console.log(line);
}