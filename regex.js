RegExp
regular expression
^$

var a = "Hi"
a.match("^([a-z])$")
null

var a = "h"
a.match("^([a-z])$")
['h', 'h', index: 0, input: 'h', groups: undefined]

var a = "hi"
a.match("^([a-z] {2})$")
['hi', 'hi', index: 0, input: 'hi', groups: undefined]

var a = "hii"
a.match("^([a-z] {2})$")
null

var a = "Hi"
a.match("^([A-Za-z]{2})$")
['Hi', 'Hi', index: 0, input: 'Hi', groups: undefined]


var a = "iHii"
a.match("^([A-Za-z]{2,5})$")

var a = "iHJii90$"
a.match("^([D-Ja-z0-9$#@]+)$")

var a = "8965678934"
a.match("^([0-9] {10})$")

var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")