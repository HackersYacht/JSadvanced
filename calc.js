//var sum = require('./sumLib').sum
var {sum, sub} = require('./sumLib')

var a1 = Math.random()*1000
var a2 = Math.random()*1000

var res = sum(a1, a2)
console.log(res)
