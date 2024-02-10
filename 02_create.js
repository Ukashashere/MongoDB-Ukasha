//To insert single document
db.inventory.insertOne(
    { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
 )                                 


/*
After this runs, press enter, and changes in DB will take place,and this will be shown 
in console:

  acknowledged: true,
  insertedId: ObjectId('65c6cf6a1dc5a08a3e9990d3')

 Every time you execute it a new 'insertId'  will be shown, its unique
 
 acknowledged: true,
  insertedId: ObjectId('65c6cf6a1dc5a08a3e9990d4')
*/ 

//To insert multiple documents
db.inventory.insertMany(
    [{ item: "canvas1", qty: 10, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } },
    { item: "canvas2", qty: 40, tags: ["copper"], size: { h: 28, w: 5.5, uom: "cm" } },
    { item: "canvas3", qty: 50, tags: ["zinc"], size: { h: 28, w: 35, uom: "cm" } },
    { item: "canvas4", qty: 60, tags: ["nickle"], size: { h: 8, w: 35.5, uom: "cm" } }]
)

/*
Shows this:
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('65c7709e6f0c4da6e1901203'),
    '1': ObjectId('65c7709e6f0c4da6e1901204'),
    '2': ObjectId('65c7709e6f0c4da6e1901205'),
    '3': ObjectId('65c7709e6f0c4da6e1901206')
  }
*/

//