for
while
do while
for of
for in
Map
filter

/////////////////
for> generate series of value or help to iterate over the Array

for(i=0;i<5;i++){
    console.log(i)
}

////
while
////////
var i = 0
while(i<5){
    console.log(i)
    i++
}

/////////
do while
//////////
var i = 5
do{
    console.log(i)
    i++
}
while(i<5)

////////
for of
////////
var city = ["London","Delhi",["Bmw","Audi","Skoda"],"Newyoke","Paris"]
for (mycity of city){
if(Array.isArray(mycity)){
    for (cars of mycity){
        console.log(cars)
    }
}else{
    console.log(mycity)
}
}

var myarray = ["London","Delhi","Newyoke","Paris"]