function checkDivisibility(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element % 3 === 0 && element % 2 !== 0){
            console.log(element);
        }
    }
}
