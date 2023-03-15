function double(arr) {
    arr.forEach((element,index) => {
        arr[index]=element*2;
    });
    return arr;
}