db.inventory.find()     //To fetch(/read) all the documents of the database
db.inventory.find({})   //To fetch(/read) all the documents of the database

db.inventory.find({qty:25})  //To fetch(/read) a particular document by a 'query comdition' (/an argument)
db.inventory.find( { tags: { $in: [ "red", "D" ] } } )  //query is that if these strings- "red" or "D" are there in the 'tags' field, fetch it
/*A 'query' is a request for data or information from a database table or combination of
tables.So in short,
'query is a request of data'
*/
db.inventory.find( { status: { $in: [ "A", "D" ] } } )

//using AND operator,status equals "A" and qty is 'less than' ($lt) 30:
db.inventory.find( { status: "A", qty: { $lt: 30 } } )

//using OR operator
db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )
/*
Using the $or operator, you can specify a compound query that joins each clause with a logical OR conjunction so that the query selects the documents in the collection that match at least one condition
*/

//for fetching only one document
db.inventory.findOne( { status: { $in: [ "A", "D" ] } } )
