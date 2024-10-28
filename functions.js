var a = 20
var b = 30
a+b

> These are 5 diferrents types Array.

//////////////
function
method
arrow function
iffi
generator
//////////
function add(a,b){
    return a+b
}
add(1,3)

add("a" ,"b")
ab
add(1,3)
4

function isEven(userInput){
    var out;
    if(userInput%2==0){
        out = `Number ${userInput} is even`
    }else{
        out = `Number ${userInput} is odd`
    }
    return out
}
isEven(3)
'Number 3 is odd'
isEven(2)
'Number 2 is even'

//////////
function test(a,b){
    return a,b
}
test(1,2)

function sayHello(){
    console.log('Check')
}
sayHello();


///////
method > When function assign to variable it becomes method.
///////////
var add = function(a,b){
    return a+b
    
}
add(1,2)

let add = (a,b) => {return a+b}
add(1,2)

let add = (...args) => {return a+b}
add(3,5)