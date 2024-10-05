const person = new Object({
    name: 'Maxim',
    age: 25,
    greet: function() {
        console.log("greet")
    }
})


Object.prototype.sayhello = function() {
    console.log("hello")
}

const lena = Object.create(person)
lena.name = 'Elena'

const str = new String('I am string')



