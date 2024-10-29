//local scope
//global scope

//enclose something

var a = 10
function add(){
    var b = 20
    return a+b
}
console.log("a>>>",a)
console.log(add())
console.log("b>>>",b)

// varaible that can be access outside the curly bracket and inside also that is
// in global scope.
// varaible that can be access inside curly bracket that is local scope.

// var a;
// function add(){
//     a = 20
//     console.log("<<<<a inside>>",a)
//     var b = 20
//     return a+b
// }
// console.log("a outside>>>",a)
// console.log(add())
// console.log("b>>>",b)

var a = 10
for (i=0;i<5;i++){
    let b = 20
    console.log(a+b+i)
}
console.log("a outside>>>>>",a)
console.log("b>>>>",b)

function mul(a,b,c){
    return a*b*c
}
mul (1,2,3)

mul(1)(2)(3)()

function mul(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }

}
mul(1)(2)(3)

var movies = {
    name: 'Avengers',
    rating:4.4,
    language:'English'
}
for (key in movies){
    console.log(key)
}