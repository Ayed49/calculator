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

 
// const numbers =[2,4,6,8];
// const output=[];
// const dobbleIt= number => number *2
// for(const number of numbers){
//     const result= dobbleIt(number);
//     output.push(result);
// }
// console.log(output);


// class teamMember{
//     name;
//     designation ='support web devloper';
//     address= 'bd'
//     constructor(name, address){
//         this.name=name;
//         this.address= address;
//     }
// }

// class support extends teamMember {
//     groupSupportTime;
    
//     constructor(name, address, time){
//         super(name, address);
//         this.groupSupportTime=time;
//     }
//      startSession(){
//         console.log(this.name, 'start a support session');
//     }
// }

// class studentCare{
//     name;
//     designation=' student care';
//     address= 'mon';
//     constructor(name, address){
//         this.name=name;
//         this.address=address;
//     }
//     buildARoutine(student){
//         console.log(this.name, 'build a routine for', student);
//     }
// }
// const amr = new support('amir khan', 'bd');
// const ayed= new support();
// amr.startSession();


// const uo = new support('uo khan', 'dhaka', '11');
// console.log(uo);

// const number=[2,4,5,6,7];
// const max= Math.max(2,4,5,6,7);
// const mathArray=Math.max(...number);
// console.log(mathArray);

// const shop ={
//     name:'ayed',
//     address='dhaka',
//     profit= 1400,
//     product= ['laptop', 'hone'],
//     isExpensive: false
// }
// const shopStringfild=JSON.stringify(shop);
// console.log(shop);
// console.log(shopStringfild);

