// Q.NO-1
// let message = "hello world"
// let ul = document.querySelector('ul')

// for(let i = 1; i <= 5; i++){
//     ul.innerHTML += `<li> ${i} ${message}</li>`
    
// }

// Q.NO-2

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// Q.NO-3

// let number = +prompt('Enter Your Table Number');
// let length = +prompt('How many Times Do you want?');

// for(let number = length; number <= length; number++){
//     for(let j = 1; j <= length; j++){
//     console.log(`${number} x ${j} = ${number*j}`);
//     }
// }

// Q.NO-4

// let mobileName = ["nokia","samsung","apple","iphone","tecno",];

// let ul = document.querySelector('ul');

// for(let i = 0; i < mobileName.length; i++){
//     ul.innerHTML += `<li>${mobileName[i]}</li>`
// }


// Q.NO-5

// fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']

// let ul = document.querySelector('#orderlist')
// let para = document.querySelector('#orderlist')

// for(let i = 0; i < fruits.length; i++){
//     ul.innerHTML += `<li> element at index ${i} ${fruits[i]} </li>`
// }

// Q.NO-6
// let head = document.querySelector('.head')
// let paragraph = document.querySelector('.para')
// let userValue = +prompt('enter your number')
// head.innerHTML = `enter your ${userValue}`

// let items = prompt ('enter your number?')

// for(let i = 0; i < items ; i++){
//     paragraph.innerHTML = `<li>your items number ${items}</li>`
// }

// Q.NO-7


// conting====>
// let h1 = document.querySelector('h1')

// for(let i = 1; i <= 15; i++){
//     h1.innerHTML += ` ${i} `
// }


// reverse-conting====>
// let h2 = document.querySelector('h2')

// for(let i = 15; i >=1; i--){
//     h2.innerHTML += ` ${i} `
// }

// even====>
// let h3 = document.querySelector('h3')

// for(let i = 2; i <= 20; i += 2){
//     h3.innerHTML += ` ${i} `
// }
// odd====>
// let h4 = document.querySelector('h4')

// for(let i = 3; i <= 20; i += 3){
//     h4.innerHTML += ` ${i} `
// }

// // series====>
// let h5 = document.querySelector('h5')

// for(let i = 2; i <= 20; i += 2){
//     h5.innerHTML += ` ${i + 'k, '} `
// }

// Q.NO-8
// const bakery = ["cake","apple pie","cookie","chips","patties",];
// const userInput = prompt ("enter any item");
// let isAvailable = false;

// for (let i = 0; i < bakery.length; i++){
//     if(userInput === bakery[i]){
//         console.log("item available hai")
//         isAvailable = true
//     }
// }
// if(isAvailabl === false){
//     console.log('item is not available') 
// }

// Q.NO-12

// for (let i = 5; i <= 100; i += 5){
//         console.log(i);
//     }

// Q.NO-13

// let table = document.querySelector('#table')
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];

// for (let i = 0; i < students.length; i++) {
//     table.innerHTML += `<table>
//     <tr>
//     <th>Student</th>
//     <th>Score</th>

//     </tr>
//     <td>${students[i]}</td>
//     <td>${scores[i]}</td>

//     </table>`
// }

// Q.NO-14

// var scores = [12, 45, 3, 22, 34, 50];
// (Hint: take stop value from user)
// E.g. if user gives 3 as input value print 12, 45, 3
// if user gives 34 as input value print 12, 45, 3, 22, 34

// let scores = [12, 45, 3, 22, 34, 50];
// let pro = +prompt('Enter your number')

// for(let i = 0; i < scores.length; i++){
//     if (pro === scores){
//         console.log(scores);
//     }
// }

// not complete

// Q.NO-15

// let ul = document.querySelector('ul')
// let nested = [ [1,2,3] , [4,5,6] , [7,8,9] ]

// for (let i = 0; i < nested.length; i++){
//     console.log(nested[i]);
//     ul.innerHTML += `<li>
//     ${nested[i]}
//     </li>`
// }


// Q.NO-19
// let input = 10;
// for (let index = 1; index <= 10; index++) {
//     let stars = '';
//     for (let j = 0; j < index; j++) {
//          stars += '*';
        
//     }
 
// console.log(stars)
    
// }
// 19 to 1

// let input = 10;
// for (let index = input; index >= 1; index--) {
//     let stars = '';
//     for (let j = 0; j < index; j++) {
//          stars += '*';
        
//     }

// console.log(stars)
    
// }

