
let dbObj = {}

dbObj.user = [
    {
        name:'Alvin',
        city:'Amsterdam'
    },
    {
        name:"Priya",
        city:"Paris"
    }
]

dbObj.dbQuery = {
    find:(table)=>{return `Select * from ${table}`},
    insert:(table,data) => {return `insert into ${table} name,city values (${data.name})`} 
}

// module.exports = dbObj;
export default dbObj;