//Aggregation Pipeline, passes a query through some 'stage of operation' and then it runs
db.orders.aggregate( [

    // Stage 1: Filter pizza order documents by pizza size
    {
       $match: { size: "medium" }  //matches(selects) all the documents whose size is "medium"
    },
 
    // Stage 2: Group remaining documents by pizza name and calculate total quantity
    {
       $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } }  //"$name" coz we are referring the name fiels and not a particular name
    }
 
 ] )

/*Gives the output as follows:
{
  _id: 'Pepperoni',
  totalQuantity: 20
}
{
  _id: 'Cheese',
  totalQuantity: 50
}
{
  _id: 'Vegan',
  totalQuantity: 10
}
*/

db.orders.find({name:"Pepperoni"})
/*Output:
{
  _id: 0,
  name: 'Pepperoni',
  size: 'small',
  price: 19,
  quantity: 10,
  date: 2021-03-13T08:14:30.000Z
}
{
  _id: 1,
  name: 'Pepperoni',
  size: 'medium',
  price: 20,
  quantity: 20,
  date: 2021-03-13T09:13:24.000Z
}
{
  _id: 1,
  name: 'Pepperoni',
  size: 'medium',
  price: 20,
  quantity: 20,
  date: 2021-03-13T09:13:24.000Z
} */    

db.orders.find({name:"Pepperoni",size: "medium"})
/*Output:
{
  _id: 1,
  name: 'Pepperoni',
  size: 'medium',
  price: 20,
  quantity: 20,
  date: 2021-03-13T09:13:24.000Z
}*/