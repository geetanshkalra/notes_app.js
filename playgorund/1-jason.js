const fs = require('fs')
// const book = {
//     title: '2 states',
//     author: 'Chetan Bhagat'

// }
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.author)

const AS = fs.readFileSync('1-json.json')
const dataJSON = AS.toString()
const user = JSON.parse(dataJSON)

user.name = 'Geetansh',
user.age = '20'

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)
