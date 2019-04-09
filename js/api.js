// let firstname = 'Sayon'
// let lastname= 'coullibaly'

// let fullname = 'her name is' + firsname + lastname

// let anotherfullname = `her name is ${firstname}${lastname}`
// console.log(anotherfullname)

// let eventname = 2
// let url = `api.up-next.co/events/${eventname}`

// console.log(url)


let smsParams={
 apiKey : 'cd56252ba7d02d00a6a6',
 sendId : 'Jemima',
 baseUrl : 'https://apps.mnotify.net/',
}

let   phone = document.getElementById('phone').value
let   message = document.getElementById('message').value
let   phone = '050 074 9420'
let phone = '0201300005'
let   message = 'Need to send bulk sms?.Contact 0548316465 or send a message to my mail'
let url = `${smsParams.baseUrl}smsapi?key=${smsParams.apiKey}&to=${phone}&msg=${message}&sender_id=${smsParams.sendId}`
console.log(url)

fetch(url).then(res => {
res.json().then(res2 => console.log(res2))
}).catch(err => console.log(err)) //it wii return a promise and to get it ,you use .then(). if promise is not resolved, you have to catch the error with .catch()



// let url = 'http://localhost:3000/api/genre'

// fetch(url,{mode: 'no-cors'} ).then(res=>console.log(res).catch(err=> console.log(err)))





