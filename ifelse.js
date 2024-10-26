if(condition){
    //do something
}else{
    //do something
}

var a = 3453
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
var a = 3456
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}

VM70:3 Number 3456 is even
undefined
var a = 3453
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}

VM74:5 Number 3453 is odd

var name = "Santanu";
if(name=="Sidhanta"){
    console.log(`Hi ${name} you are Admin`)
}else if(name=="Sipun"){
    console.log(`Hi ${name} you are Super Admin`)
}else{
    console.log(`Hi ${name} I don't know you`)
}

var role = "Admin"
var name = "John"
if(role == "Admin"){
    if(name =="Aakash"){
        console.log(`hi ${name} you are ${role}`)
    }else{
        console.log(`hi ${name} you are unknown`)
    }
}

hi John you are unknown

var role = "Admin"
var name = "Aakash"
if(role == "Admin"){
    if(name =="Aakash"){
        console.log(`hi ${name} you are ${role}`)
    }else{
        console.log(`hi ${name} you are unknown`)
    }
}
hi Aakash you are Admin

//Any condition can match
var name = "Tina"
if(name == "Tina" || name == "Nikita"){
    console.log(`hi ${name} you are welcome`)
}

//Both condition should match
var name = "Tina"
if(name=="Tina" && role=="Admin"){
    console.log(`hi ${name} you are ${role}`)
}

var a = 1
if(a){
    console.log("Hi")
}else{
    console.log("Bie")
}

var a = 0 
if(a){
    console.log("Hi")
}else{
    console.log("Bie")
}

var a = -1
if(a){
    console.log("Hi")
}else{
    console.log("Bie")
}

truthy > Any number except 0 weather +ve or -ve /String/true
false > 0, false, null, undefined

/////
Ternary > Single Line if else
////

var a = 10
a>10?"hiii":"Bie"