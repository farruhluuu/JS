const requestURL = 'https://jsonplaceholder.typicode.com/users'


function sendResquest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }

    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json()
        } 
        return response.json().then(error => {
            const e = new Error('')
            e.data = error
            throw e
        })
    })  
}

// sendResquest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


const body = {
    name: 'Vladilen',
    age: 26
}

sendResquest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))
























