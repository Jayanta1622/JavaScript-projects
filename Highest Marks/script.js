let marks = [];
for(let i = 0 ; i<5 ;i++){
    let studentMark = prompt(`Enter the marks of ${i+1} student`);
    marks.push(studentMark);
}
let maxScore = marks.reduce((i,j) => i>j?i:j);
console.log(`The highest marks scored by a student is: ${maxMarks}`);