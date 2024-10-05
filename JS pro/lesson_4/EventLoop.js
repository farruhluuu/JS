console.log('Start')

console.log('Start 2')

function timeout2sec() {
    console.log('timeout2sec');
}

window.setTimeout(function() {
    console.log('Inside timeout, after 2000 seconds');
}, 2000)

setTimeout(timeout2sec(), 2000)

console.log('End')

// $.on('button', 'click', function() {
//     console.log('Button clicked ');
// })