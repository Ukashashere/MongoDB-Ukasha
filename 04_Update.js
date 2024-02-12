//To Update a Single Document
db.inventory.updateOne(
    { item: "paper" },          //go inside document "paper"
    {
      $set: { "size.uom": "cm", status: "P" },  //update "size.uom" to "cm" and 'status' to "P"
      $currentDate: { lastModified: true }      //gives a timestamp to parameter 'lastModified'
    }
 )

db.inventory.find(           //To check what changes have taken place
    { item: "paper" } )    
    
//To Update multiple Documents 
db.inventory.find(                 //to just find first what documents we are updating
  { "qty": { $lt: 50 } })         

db.inventory.updateMany(
  { "qty": { $lt: 50 } },
  {
    $set: { "size.uom": "in", status: "P" },
    $currentDate: { lastModified: true }
  }
)
