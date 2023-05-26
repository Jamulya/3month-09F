
// const rexExp = /Hello/gmi;

// const rexExp = new RegExp('Hello', 'gmi');

// function sayHello(str, subStr){
//     const rexExp = new RegExp(subStr);
//     return rexExp.test(str)
// }
// console.log(sayHello('Hello its me ', 'me'));


//i
// console.log(/Hello/i.test('Hello its me'));//true
// console.log(/HELLO/i.test('Hello its me'));//true
// console.log(/HELLO/.test('Hello its me'));//false


// const str = 'Hello, world!';
// const regex = /world/;
// const result = str.match(regex)
// console.log(result);

// const str = 'Hello world!';
// const regex = /l/g;
// const result = str.match(regex);
// console.log(result);


// const str = 'Hello\nWorld';
// const regex = /^world/gmi;
// const result = str.match(regex);
// console.log(result);

// let text =  'Привет мое имя Строка, но вы можете называть меня строка с маленькой буквы'
// let regex = /строка/gi;
// console.log(text.replace(regex, 'Alina'));


// const str = '123abc djj';
// const regex = /\d+/;
// const result = str.match(regex);
// console.log(result);

// const str = 'hello world';
// const regex = /\w+/gmi;
// const result = str.match(regex);
// console.log(result);

// const str = 'hello123world456';
// const regex = /\d/g;
// const result = str.match(regex);
// console.log(result);

// const str = 'Hello world';
// const regex = /world$/g;
// const result = str.match(regex);
// console.log(result);

// const str = `
// 1е место: Алина
// 2е место: Олег
// 3е место: Айбек
// `
// console.log(str.match(/^\d/gm));

// const re = /(\w+)\s(\w+)/;
// const text = 'Jony Depp';
// const result = text.replace(re, "$2, $1")
// console.log(result);

// console.log(/\d\d/.test('28 August'));
// console.log(/\d\d\d/.test('28 August'));

//рекурсия
// let count = 0;
// function recursion(){
//     count++;
//     console.log(count, ' = ');
//     if(count === 10){
//         return;
//     }else{
//         return recursion();
//     }


// }
// recursion();

function factorial (n) {
    if(n === 0){
        return 1;
    }else {
        return n * factorial(n -1)
    }
}


// factorial(4) = 4 * factorial(3)
// factorial(3) = 3 * factorial(2)
// factorial(2) = 2 * factorial(1)
// factorial(1) = 1 * factorial(0)

// factorial(0) = 1;
// factorial(1) = 1 * 1 = 1;
// factorial(2) = 1 * 2 = 2;
// factorial(3) = 3 * 2 = 6;
// factorial(4) = 4 * 6 = 24;


console.log(factorial(4));



