var a = [4,5,6,7,8,9,23,34,54,12]
a.map((data) => {return data*2})

var a = [4,5,6,7,8,9,23,34,54,12]
a.map((data) => {return data})
(10) [4, 5, 6, 7, 8, 9, 23, 34, 54, 12]

var a = [4,5,6,7,8,9,23,34,54,12]
a.map((data) => {return data*2})
(10) [8, 10, 12, 14, 16, 18, 46, 68, 108, 24]

var a = [4,5,6,7,8,9,23,34,54,12]
a.map((data) => {return `<p>data*2</p>`})
['<p>data*2</p>', '<p>data*2</p>', '<p>data*2</p>', '<p>data*2</p>', '<p>data*2</p>', '<p>data*2</p>', '<p>data*2</p>', '<p>data*2</p>', '<p>data*2</p>', '<p>data*2</p>']


>map is use to iterate over the Array
>It always return same length of output as input Array
>It is use to apply logics(sum,mul,div) or return html, bind data

var a = [4,5,6,7,8,9,23,34,54,12]
a.filter((data) => {return data>10})
[23, 34, 54, 12]

>filter is use to filter out the value
>It may or may not return same length of input Array
>It only return those value for which condition/output is true

var a = [0,1,2,3]
a.map((data) => {return data*2})
a.filter((data) => {return data*2})