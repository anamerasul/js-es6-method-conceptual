//1.what is es06 & why we should use it

//2 let

var myNAMe ='programming hero'

let myname="programing hero"

// age=30;
// let age =1

// let myname='sadik' do not redlclar using let  do not call besore declare and block scope

//3 const

const mytask='reading'

// same with let but different can not reassign property



//4 template litaral

const myDiv =`<h2>this is my ${mytask}</h2>`

console.log(myDiv)

//5 arrow function

function  add (num1,num2){
        return num1+num2
}

add(2,3);
console.log(add(2,3))


const sum =(a,b)=>a+b;

console.log(sum(10,12))

const single =a=>a;

const noparameter =()=>{

}

const MultipleParameter =(a,b,c)=>{
        let sum1 =a+b;
        let sum2=b+c;
        let sum3=a-c-b;
        const result=sum1+sum2+sum3
        return result;
}


console.log(MultipleParameter(100,90,80))



//6 array disstructing

const mycars =['toyota','bmw','tata','ford','tesla'];

// const firstcar =mycars[0];

const [first,second,third]=mycars

// console.log(firstcar)

console.log(first)

//7 spread oparetor

const numbers=[2,3,4,5,6,7,8,9,89];

const number2=[11,12,13,45,56]

const arry=[...numbers,number2]

console.log(numbers)
console.log(...numbers)

console.log(arry)

//8 the for/of loop

for(const number of numbers){
        console.log(number)
}
// for(const number in numbers){
//         console.log(typeof number)
// }

//9 Default paramenter values

function multiplay(num1,num2=6 ,isAdd=true){
        if(isAdd){
                return num1*num2;
        }
        {
                return num1-num2
        }
}
console.log(multiplay(5,2,false));
//10.map,filter,find
const numbers2=[2,4,3,6,7,8,8,9]

const numbersMap =numbers2.map(num=>num*3);

console.log(numbersMap)
const numbersfilter = numbers2.filter(num=> num%2===1)
console.log(numbersfilter)

const numbersFind=numbers2.find(num=>num%2===1);

console.log(numbersFind)


