let list = document.getElementById('list')
let form = document.getElementById('form')

const handleSubmit = (e) => {
    e.preventDefault();
}
const requestUsers = async () => {
    const response = await fetch('https://dummyjson.com/docs/users')
    return response.json()
}
const getUsers = async () => {
    const data = await requestUsers()
    console.log(data)
    data.users.map(item => {
        return list.innerHTML += `<li class="list-item">
        <span>firstName: ${item.firstName}</span>
        <span>username: ${item.username}</span>
        <span>password: ${item.password}</span>
        </li>`
    })
}
const posLogin = async () => {
    const response = await fetch('')
    return response.json()
}






getUsers()
form.onsubmit = handleSubmit;