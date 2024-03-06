function addNumber(num1, num2){
    let sum= 0;
    for(const num of arguments){
        sum= sum + num;
    }
    
    return sum;
}
const sum= addNumber(23, 13, 50, 100);
console.log(sum);