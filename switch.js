//multiple condition and multiple output(ifelse)
//One condition and one output (ternary)
//One condition and multiple output(Switch)

var name = "Eva"

switch(name){
case "Santanu":
console.log(`hi ${name}`)
break;
case "Sidhanta":
console.log(`Hi ${name}`)
break;
default:
console.log(`hi default case`)
}

var input = "2"

switch(input%2){
case 0:
console.log(`Number is Even`)
break;
case 1:
console.log(`Number id Odd`)
break;
default:
console.log(`hi default case`)
}

switch(new Date().getDay()){
    case 0:
        console.log(`Today is saturday`)
        break;
        case 4:
        console.log(`Today is sunday`)
         break;
        default:
        console.log(`Invalid Input`)
}