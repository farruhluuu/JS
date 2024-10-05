// const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota']

// for(let item of autoBrands) {
//   console.log(item)
// }

// autoBrands.forEach(function(item, index){
//   console.log(item)
// })

// autoBrands.forEach(printBrand)

// function printBrand(brand, i) {
//   console.log(`${brand} => ${i + 1}`)
// }

// const person = {
//   userName : 'Mark',
//   age : 30,
//   isMarried: false
// }

// console.log(person['age'])

// person.profession = 'developer'

// const person = {
//   userName : 'Mark',
//   age : 30,
//   isMarried : false,
//   sayHi : function() {
//     console.log('Привет')
//     return  
//   }
// }

// const person = {
//   userName : 'Faruh',
//   age : 17,
//   isMarried : false,
//   profession : 'wev Dev',
//   sayHi : function (name) {
//     console.log(`Hello ${name}`)
//   }
// }

// person.sayHi('Farruh')

// const users = {
//   user1: 'mark',
//   user2: 'faruh',
//   user3: 'aziz',
//   user4: 'uluk',
//   user5: 'visola',
// }

// for(let i = 0; i < users.length; i++) {
//   console.log(users)
// }

// for(let key in users) {
//   console.log(users[key])
// }

// class Person {
//   constructor(name, age, isMarried) {
//     this.name = name
//     this.age = age
//     this.isMarried = isMarried
//   }

//   sayHi(name) {
//     return `Hello ${name}`
//   }
// }

// const person1 = new Person('Марк', 30, true)
// const person2 = new Person('Фарух', 17, false)

// console.log(person1)
// console.log(person2)

// console.log(person1.sayHi(`Faruh`))

// let txt = document.getElementById('txt').classList.add('red')

// let text = document.getElementById("text")

// text.addEventListener('click', (event) => {
//   console.log(this)
//   console.log(event);
// })

// const person = {
//   name : 'Farruh',
//   age : 17,
//   greet: function() {
//     console.log('Greet')
//   }
// }

// Object.prototype.sayHello = function() {
//   console.log('hello')
// }

// function Person(first, last, age, gender) {
//   this.name = {
//     first: first,
//     last: last,
//   }
//   this.age = age;
//   this.gender = gender;
// }

// instanceof

// const myDate = new Date()

// function Auto(brend, price, maxspeed) {
//   this.brend = brend,
//   this.price = price,
//   this.maxspeed = maxspeed
// }

// const Audi = new Auto('Audi', 12000, 200) 
// const Mercedes = new Auto('Mercedes', 100000, 380) 
// console.log(Audi)
// console.log(Mercedes)

// const person = {
//   userName : 'Faruh',
//   age : 17,
//   isJob : false,
//   greet : function() {
//     console.log('hello world')
//   }
// }

// Object.prototype(function sayHello(){ console.log('hello world')})

// Object.prototype.sayHello = () => {
//   console.log('hello world', this.age)
// }

// const sasha = {
//   name: 'sasha',
//   age: 16,
//   isJob: true,
// }

// function hello() {
//   console.log('Hello', this)
// }

// const person = {
//   name : 'faruh',
//   age: 17,
//   logInfo: function() {
//     console.log(`Name is ${this.name}`)
//     console.log(`Age is ${this.age}`)
//   }
// }

// const sasha = {
//   name: 'sasha',
//   age: 16,
// }

// person.logInfo.bind(lena)()

// function sayHi(name) {
//   const greeting = 'Hello';
  
//   return `${greeting} ${name}!`
// }

// sayHi()

// function makePhrase() {
//   const greeting = "hello"

//   function greet(name) {
//     return `${greeting} ${name}`
//   }

//   return greet
// }

// const sayHi = makePhrase()

// sayHi('Faruh')

// function  hello() {
//   console.log('hello')
//   return this
// } 

// const car = {
//   model: 'Toyota',
//   year: 2007,
//   showModel: function() {
//     return this.model
//   }
// }

// const car = {
  
//   showModel: function(color, engine) {
//     return (`${this.model}, ${color}, ${engine}, ${this.year}`)
//   }
// }

// const car2 = {
//   model: 'Mercedes-Benz',
//   year: 2023,
// }

// const car3 = {
//   model: 'Porsche',
//   year: 2021,
// }

// const car4 = {
//   model: 'Audi',
//   year: 2018,
// }

// const car5 = {
//   model: 'ferrari',
//   year: 2013,
// }

// const sayHi = function() {
//   console.log('hello', this)
// }
// const person = {
//   txt: sayHi.bind(window)
// }

/*  
  @param {string} input - Входная строка для обработки.
*/

// function processString() {
//   // Ваш код для обработки строки
//   console.log('Обработка строки:', input);
// }

// Пример использования функции

// console.log(`
// ${car.showModel.call(car2)},\n
// ${car.showModel.call(car3)},\n
// ${car.showModel.call(car4)},\n
// ${car.showModel.call(car5)},\n
// `)

// console.log(car.showModel.call(car3, 'grey','gas'))

// console.log(car.showModel.apply(car2, ['red', 'diesel']))

// const modelShower = car.showModel.bind(car3)
// modelShower('black', 'gas')

// const MyObject = {
//   myFunction: function() {
//     console.log('Это встроенная функция в объект')
//   }
// }

// window.MyObject = MyObject
// MyObject.myFunction()

// const array = [1, 2, 3, 4, 5]

// Array.prototype.multBy = function(n) {
//   return this.map(function(i) {
//     return i * n
//   })
// }

// array.multBy(2)
// console.log(array.multBy(15))

/*

Замыкания это способность функции помнить переменные вокгруг себя в том месте где она была создана

*/

// function createCalcFunction(n) {
//   return function() {
//     console.log(1000 * n)
//   }
// }

// function createAddress(type) {
//   const address = type.toUpperCase();
//   return function(name) {
//     return `${address} ${name}`
//   }
// }

// const addressGrazhdanin = createAddress('Гражданин')
// const addressGrazhdanka = createAddress('Гражданка')

// console.log(addressGrazhdanin('Василий'))
// console.log(addressGrazhdanka('Александра'))

// function sayHiBye(firstName, lastName) {
//   function getFullName() {
//     return `${firstName} ${lastName}`
//   }
//   console.log(`Hello, ${getFullName()}`)
//   console.log(`Bye, ${getFullName()}`)
// }

// const WindowTxt = sayHiBye
// console.log(WindowTxt('farruh', 'ibragimov'))

// function changeBalance() {
//   let balance = 0;
//   return function(sum) {
//     balance + sum < 0 ? console.log(`Недостаточно стердств`) : 
//     balance += sum
//     console.log(`Баланс: ${balance}`)
//   }
// }

// const change = changeBalance()

// не замыкания
// function App(newPrice) {
//   let price = 0
//   price += newPrice
//   console.log(price)
// }

// const newApp = App

// function createIncrement() {
//   let count = 0;
//   function increment() {
//     count++
//   }
//   let message = `Count is ${count}`
//   function log() {
//     console.log(message)
//   }
//   return [increment, log]
// }

// const [increment, log] = createIncrement()
// increment()
// increment()
// increment()
// log()

// function createCalcFunction(n) {
//   return function() {
//     console.log(1000 * n)
//   }
// }

// const calc = createCalcFunction(42)
// calc()

// function createIncrementor(n) {
//   return function(num) {
//     return n + num
//   }
// }

// const addOne = createIncrementor(10)
// console.log(addOne(1))

// function bind(context, fn) {
//   return function(...args) {
//     fn.apply(context, args)
//   }
// }

// function logPerson() {
//   console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }

// const person1 = { name: 'Михаил', age: 22, job: 'Frontend'}
// const person2 = { name: 'Елена', age: 19, job: 'SMM'}


// bind(person1, logPerson)
// bind(person2, logPerson)

// console.log('Start')

// console.log('Start 2')

// window.setTimeout(function() {
//   console.log('Inside timeout, after 2000 second')
// }, 2000)

// console.log('End')

// console.log("Request data...")

// setTimeout(() => {
//   console.log('Preparing data...')

//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working'
//   }

//   setTimeout(() => {
//     backendData.modified = true
//     console.log('Data recevied', backendData)
//   }, 2000)
// }, 2000)

// обрабатывать асинхронные операции и управлять потоком выполнения кода
// Promise в JavaScript — это обещание выполнения асинхронной задачи, которая может быть успешной или с ошибкой.

// const p = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     console.log('Preparing data...')
//     const backendData = {
//       server: 'aws',
//       port: 2000,
//       status: 'working'
//     }
//     resolve(backendData)
//   }, 3000)
// })

// p.then((data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true 
//       resolve(data)
//     }, 2000)
//   })

  // p2.then(clientData => {
  //   console.log('Data received', clientData)
  // })

// })

// .then(clientData => {
//   console.log('Data received', clientData)
//   clientData.fromPromise = true
//   return clientData
// }).then(data => {
//   console.log('Modified', data)
// })
// .catch(err => console.log('Error: ',err))
// .finally(() => console.log('Finally')) 

// const sleep = ms =>{ 
//   return new Promise(resolve => {
//     setTimeout(() => resolve(), ms)
//   })
// }

// sleep(2000).then(() => console.log('After 2 sec'))
// sleep(3000).then(() => console.log('After 3 sec'))

// Promise.all([sleep(2000), sleep(3000)])
//   .then(() => {
//     console.log('All Promises')
//   })

// const promise = new Promise((resolve, reject) => {
  
//   setTimeout(() => {

//     if(true) {
//       resolve('promise completed!')
//     } else {
//       reject()
//     }
//   }, 2000)  
// })

// promise.then(data => {
//   console.log(data)
// }).catch(error => {
//   console.log(error)
// })

// асинхронный код

// console.log("Начало выполнения кода");

// // Асинхронная операция с таймером
// setTimeout(() => {
//   console.log("Асинхронная операция завершена");
// }, 2000);

// console.log("Продолжение выполнения кода");

// не асинхронный код

// console.log("Начало выполнения кода");

// // Синхронная операция
// const result = addNumbers(3, 4);
// console.log("Результат сложения:", result);

// console.log("Продолжение выполнения кода");

// // Функция сложения двух чисел (синхронная)
// function addNumbers(a, b) {
//   return a + b;
// }

// let btn1 = document.querySelector('#btn1')
// let btn2 = document.querySelector('#btn2')
// let btn3 = document.querySelector('#btn3')

// let promise1 = new Promise((resolve, reject) => {
//   btn1.addEventListener('click', () => {
//     resolve()
//   });
// });

// let promise2 = new Promise((resolve, reject) => {
//   btn2.addEventListener('click', () => {
//     resolve()
//   })
// })

// let promise3 = new Promise((resolve, reject) => {
//   btn3.addEventListener('click', () => {
//     resolve()
//   })
// })

// let promisesArr = [promise1, promise2, promise3]

// Promise.all(promisesArr).then(() => {
//   alert('done!!!')
// })

// const person1 = Object.create(
//   {
//     calculateAge() {
//       console.log('Age', new Date().getFullYear() - this.birthYear)
//     }
//   }, 
//   {
//     name: {
//       value: "Faruh",
//       enumerable: true,
//       writable: true,
//       configurable: true,
//     },
//     birthYear: {
//       value: 1993,
//       enumerable: false,
//       writable: false,
//       configurable: false,
//     },
//     age: {
//       get() {
//         return new Date().getFullYear() - this.birthYear
//       },
//       set(value) {
//         document.body.style.background = 'red'
//         console.log('Set age', value)
//       }
//     }
//   }
// )

// for (let key in person) {
//   console.log('key', person[key])
// }

// const usersinfo = {
//   name: "faruh"
// }

// classes

// class Animal {

//   static type = "ANIMAL"

//   constructor(options) {
//     this.name = options.name
//     this.age = options.age
//     this.hasTail = options.hasTail
//   }

//   voice() {
//     console.log('I am Animal')
//   }
// }

// const animal = new Animal({
//   name: 'Animal',
//   age: 5,
//   hasTail: true
// })

// const animal2 = new Animal({
//   name: 'cat',
//   age: 7,
//   hasTail: true
// })


// class Cat extends Animal {
//   static type = "CAT"

//   constructor(options) {
//     super(options)
//     this.color = options.color
//   }

//   voice() {
//     super.voice()
//     console.log("I am cat")
//   }

//   get ageInfo() {
//     return this.age * 7
//   }

//   set ageInfo(newAge) {
//     this.age = newAge
//   }
// }

// const cat = new Cat({
//   name: 'Cat',
//   age: 7,
//   hasTail: true,
//   color: 'black'
// })

// const delay = ms => {
//   return new Promise(r => setTimeout(() => r(), ms))
// }

// https://jsonplaceholder.typicode.com/todos

// const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos() {
//   console.log('Fetch todo started...')
//   return delay(2000)
//     .then(() => fetch(url))
//     .then(response => response.json())
// }

// fetchTodos()
//   .then(data => {
//     console.log('Data:', data) 
//   })
//   .catch(e => console.error(e))

// async function fetchAsyncTodos() {
//   console.log('Fetch todo started...')
//   try {
//     await delay(2000)
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log("Data:", data)
//   } catch (e) {
//     console.error(e)
//   } finally {
//     console.log('Finally')
//   }
// }

// fetchAsyncTodos()

// Proxy

const person = {
  name: 'Faruh',
  age: 17,
  job: 'Fullstack'
}

const op = new Proxy(person, {
  get(target, prop) {
    // console.log('Target', target)
    // console.log('Prop', prop)
    console.log(`Getting prop ${prop}`)
    if (!(prop in target)) {
      return  prop
        .split('_')
        .map(p => target[p])
        .join(' ')
    }
    return target[prop]
  },
  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value
    } else {
      throw new Error(`No ${prop} field in target`)
    }
  },
  has(target, prop) {
    return ['age', 'name', 'job', 'gray'].includes(prop)
  },
  deleteProperty(target, prop) {
    console.log('Deleting...', prop)
    delete target[prop]
    return true
  }
})
// Functions 

const log = text => `Log: ${text}`

const fp = new Proxy(log, {
  apply(target, thisArg, args) {
    console.log(target)
    console.log(thisArg)
    console.log(args)
    
    return target.apply(thisArg, args).toUpperCase()
  }
})

// classes
// class Person {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
// }

// const PersonProxy = new Proxy(Person, {
//   construct(target, args) {
//     console.log('Construct...')

//     return new Proxy(new target(...args), {
//       get(target, prop) {
//         console.log(`Getting prop "${prop}"`)
//         return t[prop]
//       }
//     })
//   }
// })


// const p = new PersonProxy('Maxim', 30)




// const withDefaultValue = (target, defaultValue = 0) => {
//   return new Proxy(target, {
//     get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
//   })
// }


// const position = withDefaultValue(
//   {
//     x: 2,
//     y: 42
//   },
//   0
// )

// const withHiddenProps = (target, prefix = "_") => {
//   return new Proxy(target, {
//     has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
//     ownKeys: obj => Reflect.ownKeys(obj)
//       .filter(p => !p.startsWith(prefix)),
//     get: (obj, prop, receiver) => (prop in receiver) 
//       ? obj[prop]
//       : void 0
//   })
// }  


// const data = withHiddenProps({
//   name: 'Faruh',
//   age: 17,
//   _uid: '1231231'
// })


// const userData = [
//   {id: 11, name: 'Vladilen', job: 'Fullstack', age: 25},
//   {id: 22, name: 'Elena', job: 'Student', age: 22},
//   {id: 33, name: 'Victor', job: 'Backend', age: 23},
//   {id: 44, name: 'Vasilisa', job: 'Teacher', age: 24},
// ]


// const index = {}
// userData.forEach(i => (index[i.id] = i))


// const IndexedArray = new Proxy(Array, {
//   construct(target, [args]) {
//     const index = {}
//     args.forEach(item => (index[item.id] = item))


//     return new Proxy (new target(...args), {
//       get(arr, prop) {
//         switch (prop) {
//           case 'push':
//             return item => {
//               index[item.id] = item
//               arr[prop].call(arr, item)
//             }
//           case 'findById': 
//             return id => index[id]
//           default: 
//             return arr[prop]
//         }
//       }
//     })
//   }
// })


// const users = new IndexedArray([
//   {id: 11, name: 'Vladilen', job: 'Fullstack', age: 25},
//   {id: 22, name: 'Elena', job: 'Student', age: 22},
//   {id: 33, name: 'Victor', job: 'Backend', age: 23},
//   {id: 44, name: 'Vasilisa', job: 'Teacher', age: 24},
// ])


// const myNumber = 42

// localStorage.setItem('number',myNumber.toString())

// localStorage.setItem('number',myNumber.toString())

// localStorage.removeItem('number',myNumber.toString())

// localStorage.clear

// console.log(localStorage.getItem('number'))


// const object  = {
//   name: 'Max',
//   age: 20
// }


// localStorage.setItem('person', JSON.stringify(object))
// const raw = localStorage.getItem('person')
// const person = JSON.parse(raw)
// person.name = 'Faruh'


// console.log(raw)
// window.addEventListener('storage', event => {
//   console.log(event)
// })


// window.onstorage = () => {}


// const people = [
//   { name: 'Владилен', age: 25, budget: 40000 },
//   { name: 'Елана', age: 17, budget: 3400 },
//   { name: 'Игорь', age: 49, budget: 50000 },
//   { name: 'Михаил', age: 15, budget: 1800 },
//   { name: 'Василиса', age: 24, budget: 25000 },
//   { name: 'Виктория', age: 38, budget: 2300 },
// ]


// for(let i = 0; i < people.length; i++) {
//   console.log(people[i])
// }


// for(let i of people) {
//   console.log(i)
// }


// people.forEach(function(person) {
//   console.log(person)
// })


// const abults = people.filter(person => person.age >= 18)
// console.log(abults)


// const amount = people.reduce((total, person) => {
//   return total + person.budget
// }, 0)
// console.log(amount)


// const igor = people.findIndex(person => person.name === '11')
// console.log(igor)

// for(let k of 'Hello') {
//   console.log(k)
// }


// function* strGenerator() { yield 'H', yield 'e', yield 'l', yield 'l', yield 'o' } 
// const str = strGenerator()


// function* numberGen(n = 10) {
//   for (let i = 0; i < n; i++) {
//     yield i
//   }
// }
// const num = numberGen(7)


// const iterator = {
//   [Symbol.iterator](n = 10) {
//     let i = 0
//     return {
//       next() {
//         if (i < n) {
//           return {value: ++i, done: false}
//         }
//         return {value: undefined, done: true}
//       }
//     }
//   }
// }


// for(let k of iterator) {
//   console.log(k)
// }


// function* iter(n = 10) {
//   for (let i = 0; i < n; i++) {
//     yield i
//   }
// }
// for(let k of iter(6)) {
//   console.log(k)
// }




// const requestURL = 'https://jsonplaceholder.typicode.com/users'

// const xhr = new XMLHttpRequest()

// xhr.open('GET', requestURL)

// xhr.responseType = 'json'

// xhr.onload = () => {
//   if(xhr.status >= 400) {
//     console.log(xhr.response)
//   }
// }

// xhr.onload = () => {
//   console.log(xhr.response)
// }
// xhr.send()



// const citiesRussia = ['Москов','Санкт-Петербург','Казань','Новосибирск']
// const citiesEurope = ['Берлин','Прага','Париж']

// const citiesRussiaWithPopulation = {
//   Moscow: 20,
//   SainPetersburg: 3,
//   Kazan: 5,
//   Novosibirsk: 3
// }

// const citiesEuropeWithPopulation = { 
//   Berlin: 10,
//   Praha: 3,
//   Paris: 2,
// }

// console.log(...citiesRussia)
// console.log(...citiesEurope)



// const users = {
//   name: 'faruh',
//   lastname: 'ibragimov',
//   age: 16,
//   isDevelop: true
// }


// function objProps({name, lastname, age, isDevelop}) {
//   return {
//     name,
//     lastname,
//     age,
//     is
//   }
// }

// console.log(objProps(users))