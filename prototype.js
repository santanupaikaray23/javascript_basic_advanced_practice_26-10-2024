function human(name){
    this.name = name;
    this.city = "London"
}

function robot(name){
    this.name = name;
    this.legs = 2;
    this.age = 10
}

var join = new ('Join')

join
human {name: 'Join', city: 'London'}
var peper = new robot('Pepper')
undefined
peper
robot {name: 'Pepper', legs: 2, age: 10}
human.prototype = new robot()
robot {name: undefined, legs: 2, age: 10}
var keev = new human('Keev')
undefined
keev
human {name: 'Keev', city: 'London'}

class geo{
    constructor(){
        this.lat = 43.22,
        this.long = 32.32
    }
}
class language1 extends geo{
    constructor(name,country){
        super()
        this.name = name;
        this.country = country
    }
    greet = () =>{
        return `Say Hi to ${this.name}`
    }
}