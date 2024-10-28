function sayHi(){
    console.log('hiii')
}
sayHi()

///IFFI///
(function(){
    console.log("Hi")
}())

//////
Generator
////////
function loop(userInput){
    for(i=0; i<userInput; i++){
        console.log(i)
    }
}

function * loop(userInput){
    for(i=0; i<userInput; i++){
        yield i
    }
}