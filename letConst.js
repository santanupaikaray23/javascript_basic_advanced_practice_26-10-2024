var > We are able to redeclare and reassign
let > We cann't redeclare but we can reassign
const > We can't redeclare but nor reassign

var a > declare
a = 10 > assignment
10
a

var a = 10
undefined
> a
10
> var a = 12
undefined
> a
12
> a = 13
13
> a
13

var a
a = 10

let b = 20
undefined
> b
20
> let b = 21
Uncaught SyntaxError: Identifier 'b' has already been declared
> b = 21
21

const c = 10
undefined
> const c = 12
Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 23
Uncaught TypeError: Assignment to constant variable.