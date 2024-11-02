var moviename = "Avengers"
var movierating = 4.5
var movielang = "English"

var moviename1 = "Jab we Met"
var movierating1 = 4.8
var movielang = "Hindi"

var movies = {
    name:"Avengers",
    rating:4.4,
    language:"English"
}
var movies = {
    name:"Avengers",
    rating:4.4,
    language:"English"
}
undefined
typeof(movies)
'object'
movies.name
'Avengers'
movies.rating
4.4
movies.language
'English'
movies.ind="Bollywood"
'Bollywood'
movies
{name: 'Avengers', rating: 4.4, language: 'English', ind: 'Bollywood'}
delete movies.language
true
movies
{name: 'Avengers', rating: 4.4, ind: 'Bollywood'}
delete movies.name
true
movies
{rating: 4.4, ind: 'Bollywood'}

/////json
>javascript object notation

var movies = [
    {
        name:'Avengers',
        rating:4.4,
        language:'English'
    },
    {
        name:'Jab We Met',
        rating:4.8,
        language:'Hindi'
    }
]

var movies = [
    {
        name:'Avengers',
        rating:4.4,
        language:'English'
    },
    {
        name:'Jab We Met',
        rating:4.8,
        language:'Hindi'
    }
]

///constructor
var movie = new Object();
movies.name = "Death Race"

Freeze:
----------
> We can't do any opperation.

var movies = {
    name:'Avengers',
    rating:4.4,
    language:'English'
    }
    
    undefined
    Object.freeze(movies)
    {name: 'Avengers', rating: 4.4, language: 'English'}
    movies.name
    'Avengers'
    movies.rating=4.6
    4.6
    movies
    {name: 'Avengers', rating: 4.4, language: 'English'}

Seal :
--------
We can't add or delete but we can update the value.

var movies = {
    name:'Avengers',
    rating:4.4,
    language:'English'
    }
    undefined
    Object.seal(movies)
    {name: 'Avengers', rating: 4.4, language: 'English'}
    movies.rating = 4.6
    4.6
    movies
    {name: 'Avengers', rating: 4.6, language: 'English'}
    delete movies.language
    false
    movies
    {name: 'Avengers', rating: 4.6, language: 'English'}