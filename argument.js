// function addNumber(num1, num2) {
//     let sum = 0;
//     for (const num of arguments) {
//         sum = sum + num;
//     }

//     return sum;
// }
// const sum = addNumber(23, 13, 50, 100);
// // console.log(sum);


// function getFullName(firstName, lastName) {
//     let fullName = '';
//     for (const part of arguments) {
//         fullName = fullName + part + ' ';
//     }
//     return fullName;
// }
// const fullName = getFullName('go', 'hu', 'lo', 'koo');
// console.log(fullName);


// const add = (num1, num2) => num1 + num2;
// const ans = add(20, 30);
// console.log(ans);

// const doMath= (x, y) =>{
//     const sum=x+y;
//     const dff=x-y;
//     const result=sum*dff;
//     const output=result*8;
//     return output;
// }
// const total =doMath(12, 8);
// console.log(total);


// const number= [23,12,35];
// const max= Math.max(23,12,35);
// const arrayNumber=Math.max(...number);
// console.log(max, arrayNumber);


const numbers =[2,4,6,8];
const output=[];

for(const number of numbers){
    const result= number *2;
    output.push(result);
}
console.log(output);
