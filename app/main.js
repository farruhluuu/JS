// типы данных
    // 1 string - строка 
    // 2 number - номер
    // 3 boolean - логический тип
    // 4 null - пустой
    // 5 undefined - не существует либо не установлено
    // 6 object - обьект
  
    // 7 bigint - число
    // 8 symbol()

    // 1 string с кавычкой  "" '' ``

    
    // 2 number номер без кавычки
    // let a = 10 // number
    // let b = '10' // string
    

    // console.log(typeof a) // резултат -> number
    // console.log(typeof b) // резултат -> string
    
    // операторы + - * / = 
    
    // a = 12
    // a = 'hello'
    
    // let a = 'hello'
    // let b = 'world'

    // console.log(a, b)    
    
    // let a = '10';
    // let b = '20';
    // let c = 10;
    // let d = 20
    // console.log(a + b) // резултат 1020
    // console.log(c + d) // резултат 30 
    
    // let c = 20;
    // console.log(c) // резултат 20
    // c = 15;
    // c + 5
    // c = c + 10; // 25
    // c = c - 5; 
    // c + 15;
    // console.log(c + 15) // 

    // переобразовать типы данных
    // let a = "text"
    
    // let b = '20'

    // console.log(+a) // number NaN
    
    // console.log(typeof +b) // number 20
    

    // let c = 30;

    // console.log(c.toString()) // string 30

    // let a = prompt('напиши свою имя')
    // console.log(a)


    // let number1 = +prompt('number...'); // type string
    // let number2 = +prompt('number...');
    // console.log(number1 + number2) // output number
    
    // output привет Ороз ты +2023 - +32 году родилься и нам нужен такой developer 
    // let a = null;
    // console.log(a)
    // правда либо не правда true false boolean
    // let a = confirm('18+?')
    // console.log(a) // output boolean true false
    // let a = 5
    // a += 5
    // console.log(a)
    // + - * /
    // let a = 5;
    // a += 5 // a = a + 5;
    // a++ // a = a + 1
    // // a--
    // // a*=10
    // console.log(a) // 11

    // Asan Uson 
    // 1234 4321

    // условные операторы 
    // == равен
    // === строгий равен
    // !== не равен
    // < меньше
    // > больше
    // <= меньше или равен
    // >= больше или равен
    // console.log(5 == 5) // true
    // console.log(5 == 6) // false
    // console.log(5 == '5') // true
    // console.log(5 === '5') // false
    // console.log(1 > 2) // false
    // console.log(1 < 2) // true
    // console.log(1 !== 2) // true
    // console.log(2 >= 2) // true
    // console.log(2 <= 2) // true
    // console.log('Asan' == 'Uson') // false
    // console.log(null === undefined) // false
    // console.log(null == undefined) // true

    // if(5 == 5) {
    //   // если условия true
    //   console.log('правда')    
    // } else {
    //   // если условия false
    //   console.log('не правда')
    // }
    
    
    // && - и жана
    // || - или же болбосо

    
    // if(name === 'Asan')
    // let name = 'Uson'
    //     // false
    // if("Uson" !== name || name == 'Asan') {
    //   console.log('правда')
    // } else {
    //   console.log('не правда')
    // }


    // if(1 == 1 && 2 == 3) {
    //   console.log('и оператор',true)
    // } else {
    //   console.log('и оператор',false)
    // }
    // if(1 == 1 || 2 !== 3) {
    //   console.log('или оператор',true)
    // } else {
    //   console.log('или оператор',false)
    // }

    // let login = prompt('логин');
    // let password = +prompt('password'); '1234'

    // if(login === 'Umar' && password === 1234 && password === 1234){
    //     console.log("hello")
    // } else {
    //     console.log("error")
    // }

    // 'Asan', '1234'
    // 'Uson', '4321'
    // true output hello Asan
    // false output invalid password and login

// let a = 10
// let b = '10'
// console.log(typeof a)
// console.log(typeof b)  

// console.log(+b)

// let c = 30

// console.log(c.toString())


// let text = prompt('text..') 
// let number1 = prompt('number')
// let number2 = prompt('number')

// console.log(typeof text) // string
// console.log(number1 + number2) // 


// let name = prompt('как тебя зовут') //faruh
// let age = prompt('сколько тебе лет') // 17
// let year = prompt('сейчас какой год?') // 2023
// let work = prompt('кем ты работаеш?') // dev

// console.log(`привет ${name} ты ${+year - +age } году родился и нам нужен такой ${work}`)


// let a = confirm("18?")
// console.log(a)

// ==
// ===
// !==
// >
// <
// >=
// <=


// let login = prompt("логин")
// let age = prompt("пароль")
// if (login === 'Asan' && age === '1234' || login === 'Uson' && age === '4321') {
//     console.log("привет", login)
// } else {
//     console.log("error")
// }


// let num1 = +prompt()
// let sumbol = prompt()
// let num2 = +prompt()
// if (sumbol == '+') {
//     console.log(num1 + num2)
// } 
// if (sumbol == '-') {
//     console.log(num1 - num2)
// } 
// if (sumbol == '*') {
//     console.log(num1 * num2)
// } 
// if (sumbol == '/') {
//     console.log(num1 / num2)
// } 

 
// let a = '10';

// if(a == '11'){
//     console.log('1')
// } else if (a == '9') {
//     console.log('2')
// } else if (a == '10') {
//     console.log('3')
// } else {
//     console.log('error')
// }

// let login = prompt('login');
// if(login === 'Asan') {
//     console.log('hello Asan');
// } else if (login === 'Uson') {
//     console.log('hello Uson')
// } else if (login === 'Marat') {
//     console.log('hello Marat');
// } else if (login === 'Aiperi') {
//     console.log('hello Aiperi');
// } else {
//     console.log('invalid login')
// } 


// let age = prompt('age')
// if (age <= 6 && age > 0) {
//     console.log('малыш')
// } else if (age > 6 && age < 18) {
//     console.log('школьник')
// } else if (age >= 18 && age < 23) {
//     console.log('студент')
// } else if (age >= 23 && age < 45) {
//     console.log('рабочий')
// } else if (age >= 45 && age < 65) {
//     console.log('директор')
// } else if (age >= 65 && age <= 100) {
//     console.log('пенсионер')
// } else {
//     console.log('invalid age')
// }


// let age = confirm('тебе 18+')

// if(age == true) {
//     let text = prompt('как тебя зовут')
//     if(text !== '') {
//         console.log('hello ' + text)
//     } else{
//         console.log('напиши свое имя')
//     }
// } else {
//     console.log('ты малыш')
// }


// let smoking = confirm('ты куриш??')
// if (smoking == true) {
//     let year = +prompt("сколько лет ты куриш")
//     if (year >= 5) {
//         console.log('тебе конец')
//     } else if (year < 5) {
//         console.log('у тебя есть еще шанс бросить курит')
//     } else {
//         console.log('укажи сколько лет ты куриш')
//     }
// } else {
//     console.log('молодец')
// }

// let number = +prompt('угадай число')

// let a = Math.floor(Math.random() * 10);


// if (number === a) {
//     console.log('ты угадал')
// } else {
//     console.log('не угадал')
// }


// let num = prompt()
// if (+num >= 0) {
//     console.log(+num+ +num)
// } else if (+num < 0) {
//     console.log(+num - +num)
// } else {
//     console.log(num)
// }
 
    
// for(let i = 0; i <= 20; i+=2) {
//     console.log(i)
// }



// for(let i = 20; i >  0; i--){
//     console.log(i)
// }

// for(let i = 0; i <= 20; i +=2){
//     console.log(i)
// }


// for(let i = 1990; i <= 2023; i++) {
//     // console.log(`${i} год`)
//     if (i == 2023) {
//         console.log("hello world",i)
//     } 
// }


// for(let i = 0; i<=2023; i++) {
//     if (i <= 1955) {
//         continue // break 
//     } else { 
//         console.log(i)
//     }
// }


// for(let i = 0; i <= 20; i++) {
//     if(i == 15) {
//         console.log('hello world',i)
//         break
//     }
// }



// объект

// let animal = {
//     animal: 'Cat',
//     animal1: 'Dog',
//     animal2: 'Cow',
//     animal3: 'Chiken',
//     animal4: 'Cok'
    
// }
// console.log(animal.animal1, animal.animal4)
// Dog Cok

// let animal = {
//     animal: 'Cat',
//     age: 2,
//     kg: 1.5,
//     color: 'gray',
//     isActove: false,
//     variant: {
//         color: 'black',
//         isActive: true,
//         kg: 1.6,
//     }
// } 

// let a = {...animal}
// console.log(animal)

// a.animal = 'hello'
// console.log(a)


// console.log(animal.animal, animal.color, animal.variant.isActive)

// console.log(anidmal.variant)
// console.log(animal.variant.color)

// animal.animal = 'Dog';
// console.log(animal.color)

// const animal2 = {...animal} 

// массив
// let arr = ['Asan', 'Uson', 'Marat', 'Aiperi',['faruh','Umar',['hello','world']]] // index



// let hello = {
//     hello: 'hi',
//     arr2 : ['world','by']
// }


// const admin = {
//     name: 'talamt',
//     age: 23,
//     massa: 75,
//     cars:['BMW','Toyota','Mercedes','Honda'],
//     friend:['Asan','Uson','Marat','Aiperi'],
// }

// console.log()


// console.log(admin.cars[2])


// let array = ['Faruh','Uson','Said','Bilol','Islam']

// const array2 = ['Ismayil', ...array, 'Kanykei']
// array2[2] = 'Talant';
// console.log(array)  
// console.log(array2)


// const admin = {
//     name: 'talamt',
//     age: 23,
//     massa: 75,
//     cars:['BMW','Toyota','Mercedes','Honda'],
//     friend:['Asan','Uson','Marat','Aiperi'],
// }

// const admin2 = {vothrast:[23,42,11,50], rost:[1.5,1.8,1.6,2.0], ...admin,}
// admin2.cars[4] = 'Ferrari'  
// admin2.friend[3] = 'Kanykei'  
// console.log(admin)   
// console.log(admin2)

// let i = 1
// while (i < 11) {
//     console.log(i)
//     i++
// }



// let object = {
//     name: 'asan',
//     age: 32
// }
// if ('Asan' === object.name && 32 == object.age) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// let arr = ["asan", 32]

// if ("asan" === arr[0] && 32 === arr[1]) {
//     console.log(true)
// } else {
//     console.log(false)
// }



// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

// for(let i = 0; i < array.length; i++) {    
//     if(i % 2 == 1){
//         console.log(array[i])
//     }
// }


// let array = [
//     {admin: 'Asan', passwors: 1234},
//     {admin: 'Uson', passwors: 4321},
//     {admin: 'Marat', passwors: 5678},
//     {admin: 'Kanat', passwors: 8765},
//     {admin: 'Aiperi', passwors: 3333},
//     {admin: 'Aikerim', passwors: 4444},
//     {admin: 'Kanykei', passwors: 5555},
//     {admin: 'Baihan', passwors: 6666}
// ]
// for(let i = 0; i < array.length; i++) {
//     if(array[i].admin === 'Uson') {
//         console.log(array[i].admin)
//     }
// }

// let login = prompt('login')
// let password = +prompt('password')
// let error
// for(let i = 0; i < array.length; i++) {
//     if (array[i].admin == login && array[i].passwors == password) {
//         console.log(`hello ${login}`)
//         break
//     } else if (i == 7) {
//         console.log(`Error ${login} or ${password}`)
//     }
// }


// let members = [
//     { gender: 'Male', age: 32 },
//     { gender: 'Female', age: 30 },
//     { gender: 'Male', age: 45 },
//     { gender: 'Female', age: 55 },
//     { gender: 'Male', age: 25 },
//     { gender: 'Female', age: 18 },
//     { gender: 'Male', age: 22 },
//     { gender: 'Female', age: 80 },
//     { gender: 'Male', age: 85 },
//     { gender: 'Female', age: 12 },
//     { gender: 'Male', age: 10 },
//   ]
//   let male = 0;  
//   let female = 0;
//   let maleAge = 0;
//   let femaleAge = 0;
//   for (let i = 0; i < members.length; i++) {
//     if (members[i].gender == "Male"){
//         male++
//         if(maleAge < members[i].age){
//           maleAge = members[i].age
//         }
//     } else if (members[i].gender === "Female"){
//         female++
//         if(femaleAge < members[i].age){
//           femaleAge = members[i].age
//         }
//     } 
//   }
//   console.log(`maximum age male >> `, maleAge)
//   console.log(`maximum age female >> `, femaleAge)
//   console.log(`male >> `, male)
//   console.log(`female >> `, female)



// let operators = [
//     {operator: 'Megacom', code: '559'},
//     {operator: 'Megacom', code: '558'},
//     {operator: 'Megacom', code: '557'},
//     {operator: 'Megacom', code: '556'},
//     {operator: 'Megacom', code: '555'},
//     {operator: 'Megacom', code: '554'},
//     {operator: 'Megacom', code: '553'},
//     {operator: 'Megacom', code: '552'},
//     {operator: 'Megacom', code: '551'},
//     {operator: 'Beeline', code: '779'},
//     {operator: 'Beeline', code: '778'},
//     {operator: 'Beeline', code: '777'},
//     {operator: 'Beeline', code: '776'},
//     {operator: 'Beeline', code: '775'},
//     {operator: 'Beeline', code: '774'},
//     {operator: 'Beeline', code: '773'},
//     {operator: 'Beeline', code: '772'},
//     {operator: 'Beeline', code: '771'},
//     {operator: 'Beeline', code: '770'},
//     {operator: 'O!', code: '709'},
//     {operator: 'O!', code: '708'},
//     {operator: 'O!', code: '707'},
//     {operator: 'O!', code: '706'},
//     {operator: 'O!', code: '705'},
//     {operator: 'O!', code: '704'},
//     {operator: 'O!', code: '703'},
//     {operator: 'O!', code: '702'},
//     {operator: 'O!', code: '701'},
// ]
// let number = prompt("phone")
// if(number[0]==='0' && number.length === 10 || (number.substr(0,4) === "+996" && number.substr(0,14))) {
//     for(let i = 0; i < operators.length; i++) {
//         if(number.substr(1,3) === operators[i].code || number.substr(4,3) === operators[i].code) {
//             console.log(`тариф ${operators[i].operator}`)
//         } else if(number.substr(1,3) !== operators[i].code) {
//             console.log(`такого тарифа не существует ${number}`)
//             break
//         } 
//     }
// } else {
//     console.log("Invalid number")
// }


// map filter find findIndex forEach push

// let a = []
// a.push(4)
// a.push('Asan')
// a.push("hello","world")
// console.log(a)

// for(let i = 1; i <= 100; i++) {
//     // if (i <= 5) {
//     //     a.push(i)
//     // }
//     if (i % 3 == 0) {
//         a.push(i)
//     }
// }
// console.log(a)

// let questions = [
//     {question: 'КР президенти ким?', output: 'Садыр Жапаров', score: 2},
//     {question: 'Кыргызстанда канча область бар?', output: '7', score: 2},
//     {question: 'Озгон району кайсы областка кирет', output: 'Ош', score: 2},
//     {question: 'Бетховин ким болгон?', output: 'Композитор', score: 2},
//     {question: 'Узбекистандын борбор шаары кайсы', output: 'Ташкент', score: 2}
// ]
// let input

// for(let i=0; i < 5; i++){
//     input = prompt(questions[i].question)
//     if (input == questions[i].output){
//         correct++
//         total+=questions[i].score
//         arrCorect.push(questions[i].question)
//     } else if (input != questions[i].output){
//         notCorrect++
//         arrNotCorect.push(questions[i].question)
//     }
// }




// function Myfunc (name) {
//     if(name === "Asan") {
//         console.log('hello',name)
//     } else  {
//         console.log('error')
//     }
// }

// Myfunc();


// function Myfunc2 (name) {
//     Myfunc(name)
// }

// Myfunc2('Uson')
// Myfunc2('Asan')
// Myfunc2('Uson')



// function Myfunc (a,b) {
//     console.log(a+b)
// }

// Myfunc(10,11)
// Myfunc('Asan ','Uson')
// Myfunc('Asan ',15)


// function Myfunc (a,b) {
//     if (a === undefined || b === undefined) {
//         console.log('введите первое или второе значение')
//     } else {
//         console.log('hello wolrd')
//     }
// }
 
// Myfunc(10,10)


// function myfunc (a, b='') {
//     return a+b
// }

// console.log(myfunc("Asan "))
// console.log(myfunc(15,20))

// function checkAge (age) {
//     if(age > 18)  {
//         return true
//     } else {
//         return confirm("тебе родители разрешили")
//     }
// }
// let age = +prompt('тебе сколько  лет')
// if(checkAge()) {
//     alert('доступ откыт')
// } else {
//     alert('доступ закрыт')
// }


// сокращенные условия

// console.log("A" == "a" ? true : false)

// console.log(confirm() == true ? "hello" : "world")


// const myfunc = () => {
//     console.log('hello world')
// }
// myfunc()

// const myfunc = () => console.log('hello world')
// myfunc()


// const myFunc = (a) => {
//     for(let i = 0; i < a.length; i++) {
//         // console.log(a[i])
//         // console.log(`${i} :${a[i]}`)
//     }
// }
// let array = [1,2,3,4,5,6,7,8,9]
// myFunc(array)


// const myfunc = (a, b='') => {
//     for(let i = 0; i < a.length; i++) {
//         for(let j = i + 1; j < a.length; j++) {
//             if(a[i] + a[j] == b) {
//                 console.log(`${i}:${a[i]}, ${j}:${a[j]}`)
//                 break
//             }
//         }
//     }
// }

// let array = [11,5,7,15,3,6,4];
// myfunc(array, 9)

// array.sort((a,b) => a - b)
// console.log(array)

// const b = array.filter((element) => element === 15)
// console.log(b)
// const v = array.map(element => element === 15 ? 20 : 15)
// console.log(v)


// -----BigInt-----

// const biggestNumber = Number.MAX_SAFE_INTEGER;
// console.log('max number',biggestNumber);
// console.log(biggestNumber + 1);
// console.log(biggestNumber + 2);
// console.log(biggestNumber + 3);


// const bigint = 100n;
// const bigint2 = BigInt(100)

// console.log(bigint, bigint2);

// const bigintNumber = BigInt(Number.MAX_SAFE_INTEGER);
// console.log(bigintNumber + 1n);


// const bigint = 100_000_000_000_000_000_000_000n;
// console.log(bigint + 20n)


// const bigint_1 = 10
// const bigint_2 = 10n
// console.log(bigint_1 == bigint_2);
// console.log(bigint_1 === bigint_2);


// let symbol = Symbol();
// console.log(typeof symbol)

// let symbolExample_1 = Symbol();

// let symbolExample_2 = Symbol('id');
// let symbolExample_3 = Symbol('id');

// console.log(symbolExample_2, symbolExample_3);

// console.log(symbolExample_2 === symbolExample_3);
// console.log(symbolExample_2 == symbolExample_3);

// alert(symbolExample_3);

// let symbolExample_4 = Symbol('id').toString();
// alert(symbolExample_4);

// let symbolExample_5 = Symbol('id');
// alert(symbolExample_5.description);


// let sym1 = Symbol('id');
// let sym2 = Symbol('id');
// console.log(sym1.description === sym2.description);





// let el = document.createElement('cost');
// el.textContent = total 



// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//         // console.log(response.json())
//         return response.json();
//     })
//     .then(posts => console.log(posts))
//     .catch(err => console.log(err))



// function getPost(id) {
//     return new Promise((resolve, reject) => {
//         fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//             .then(response => response.json())
//             .then(post => resolve(post))
//             .catch(err => reject(err))
//     }
//     )
// }

// getPost(1).then(post => console.log(post))


// function getPost2(id) {
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then(response => response.json())
// }


// getPost2(1).then(post => console.log(post)) 
// .catch(err => reject(err))



// let promise = fetch(`https://jsonplaceholder.typicode.com/posts`) 
// let js = response.json()
// console.log(js)



// let sName = prompt('привет как тебя зовут');
// while(sName == '' || sName == null) {
//     sName = prompt('привет как тебя зовут');
// }

// alert(sName + ', я загадал число от 1 до 100. Попробуй отгатать его за наименьший')
// let number = Math.ceil(Math.random() * 100);
// let q = prompt('какое число загодал')
// let g = 0
// while(q != number){
//     if (q > number) {
//         q = prompt('Много попробуй ещё раз')
//         g = g + 1
//     }
//     if (q < number) {
//         q = prompt('Мало попробуй ещё раз')
//         g = g + 1
//     }
// }


// let body = document.getElementsByTagName('body')[0]

// function rgb_body() {
//     let rgb1 = Math.ceil(Math.random() * 255)
//     let rgb2 = Math.ceil(Math.random() * 255)
//     let rgb3 = Math.ceil(Math.random() * 255)
//     body.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`
// }
// rgb_body()   

// let todos = [
//     { id: 1, title: 'title1' },
//     { id: 2, title: 'title2' },
//     { id: 3, title: 'title3' },
//     { id: 4, title: 'title4' },
//     { id: 5, title: 'title5' },
//     { id: 6, title: 'title6' },
//     { id: 7, title: 'title7' },
//     { id: 8, title: 'title8' },
//     { id: 9, title: 'title9' },
//     { id: 10, title: 'title10' },
//     { id: 11, title: 'title11' }
// ]


// map()
// find()
// findIndex()
// forEach()


// todos.map((e, i) => console.log(e))
// todos.find((e, i) => console.log(e))
// todos.findIndex((e, i) => console.log(e))
// todos.forEach((e, i) => console.log(e))



// localStorage.setItem('data',5)
// console.log(localStorage.getItem('data'))

// const a = [3, 4, 5];
// localStorage.setItem('a',a)
// let b = localStorage.getItem('b');
// console.log(    )



// var getTrack = function (artist, track) {
//     return artist + ' ' + track;
// }
// getTrack('Artist', 'Track')



// var getTrack = (artist, track) => artist + ' ' + track;

