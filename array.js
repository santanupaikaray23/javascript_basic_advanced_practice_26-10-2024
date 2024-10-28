 //Array is the collection of homogenious or hetrigenious data type

 var a = [1,3,5,33,56](Array of number)
 var b = ['wffd','dffe','dfgf','reddf'](Array of string)
 var c = [true,false,false,true](array of Boolean)

 var d = [3,4,5,'ddgd',56,true,false,'dfg']

 var city = ['London','Delhi','NewYork','Paris']

(6) ['London', 'Delhi', 'NewYork', 'Paris', 'Amsterdam', 'Dubai']
city.pop()
'Dubai'
city
(5) ['London', 'Delhi', 'NewYork', 'Paris', 'Amsterdam']
city.pop(2)
'Amsterdam'
city.pop(20000)
'Paris'
city
(3) ['London', 'Delhi', 'NewYork']
city.shift()
'London'
city
(2) ['Delhi', 'NewYork']
city.unshift('Bhubaneswar')
3
city
(3) ['Bhubaneswar', 'Delhi', 'NewYork']

push>Add in the end of the array
pop> Always remove the last value of the array
unshift> Add in the begining of the Array
shift> Always remove the first value of the Array

var city = ['London','Delhi','NewYork','Paris']
undefined
city.slice(1)
(3) ['Delhi', 'NewYork', 'Paris']
city.slice(2)
(2) ['NewYork', 'Paris']
city
(4) ['London', 'Delhi', 'NewYork', 'Paris']
city.splice(2,2)
(2) ['NewYork', 'Paris']
city
(2) ['London', 'Delhi']
city.splice(3,1,'Edinberg')
[]
city
(3) ['London', 'Delhi', 'Edinberg']
city.splice(2,1,'Check')
['Edinberg']
city
(3) ['London', 'Delhi', 'Check']

var a = ['a','b','c',1]
var b = [1,2,3]
a+b

var a = "Hii"
var b = ["hii"]

Array.isArray(a)

Array.isArray(b)

var city = ['London',2,'Delhi',false,'NewYork',1,4,true,'Paris']

var myarray = ['Amsterdam','Dubai',['BMW','Audi','Skoda'],'Edinberg','London','Mumbai']
for(i=0;i<myarray.length;i++){
    if(Array.isArray(myarray[i])){
    for(j=0;j<myarray[i].length;j++){
        console.log(myarray[i][j])
    }
}else{
    console.log(myarray[i])
}
}

Nested For Loop means outer loop run then the inner loop run.
