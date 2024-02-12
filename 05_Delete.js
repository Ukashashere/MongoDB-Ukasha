//To Delete All Documents
db.inventory.deleteMany({})

//To Delete Only One Document that Matches a Condition
db.inventory.deleteOne( { status: "D" } )  //deletes first document that comes with status: "D"

//To Delete All Documents that Match a Condition
db.inventory.deleteMany({ status : "A" })