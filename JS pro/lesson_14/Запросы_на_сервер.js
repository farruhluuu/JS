const requestURL = 'https://jsonplaceholder.typicode.com/users'


function sendResquest(method, url, body = null) {
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)
        
        xhr.responseType = 'json'   
        xhr.setRequestHeader('Content-Type', 'application/json')


        xhr.onload = () => {
            // console.log(JSON.parse(xhr.response))
            if(xhr.status >= 400) {
                console.error(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }
        
        xhr.onerror = () => {
            reject(xhr.response)
        }  
        xhr.send(JSON.stringify(body))
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