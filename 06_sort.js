//To fetch only the first document
db.inventory.find().limit(1)

//To skip the first document and fetch others
db.inventory.find().skip(1)

//To sort it by quantity '1'(To arrange in ascending order, with a difference of 1)
db.inventory.find().sort({qty: 1})

/*The output was-
{
  _id: ObjectId('65ca8dd1ed3be255948dc53a'),
  item: 'journal',
  qty: 25,
  tags: [
    'blank',
    'red'
  ],
  size: {
    h: 14,
    w: 21,
    uom: 'cm'
  }
}
{
  _id: ObjectId('65ca8dd1ed3be255948dc53c'),
  item: 'mousepad',
  qty: 25,
  tags: [
    'gel',
    'blue'
  ],
  size: {
    h: 19,
    w: 22.85,
    uom: 'cm'
  }
}
{
  _id: ObjectId('65ca8dd1ed3be255948dc53b'),
  item: 'mat',
  qty: 85,
  tags: [
    'gray'
  ],
  size: {
    h: 27.9,
    w: 35.5,
    uom: 'cm'
  }
} */

//To sort it in descending order
db.inventory.find().sort({qty: -1})

//Achieving Pagination using MongoDB find and limit
/*To do pagiantion in a 'Blog' if we are making a blog*/
pageNo
1 to 10

db.blogs.find().skip(0).limit(10)  //will give from 1 to 10 blogs (will show 10 blogs)
db.blogs.find().skip((pageNo-1)*8).limit(8)  //want to show 8 blogs in 1 page, in every page

no =8   //no. of blogs per page
db.blogs.find().skip((pageNo-1)*no).limit(no)  //'no' is a variable that shows how many blogs we want to show in a page
pageNo =1 -> db.blogs.find().skip(0).limit(8)
pageNo =2 -> db.blogs.find().skip(8).limit(8)  //will skip first 8 blogs and show next 8
pageNo =3 -> db.blogs.find().skip(16).limit(8) //will skip first 16 blogs and show next 8

/* MongoDB cloud based DataBase , no need to deploy on machine(PC) 
--> MongoDB Atlas , https://cloud.mongodb.com/v2/65ca9d9372da9f01b205b2e7#/overview 
*/

/*Ahead also studied about 'MongoDB Operators' and 'Aggregation Pipeline' */