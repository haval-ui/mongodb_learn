// reqire mongoose to use as a driver.  

const mongoose=require('mongoose');
// this line is to conect with the local server for the mongodb database.
mongoose.connect('mongodb://localhost:27017/fruitsDB');
//create a schema for the data that you want to save. 
const fruitsSchema =new mongoose.Schema({
    name : String,
    rating:Number,
    review:String,

});
//create a model for the schema.  
const Fruit =mongoose.model("Fruit",fruitsSchema);
//add documents with this lines for one data and many 
const fruit =new Fruit({
    name:"Apple",
    rating:7,
    review:"pretty solid aas a fruit."
});
//remove below coment tosave one data.
// fruit.save(); 
const kiwi = new Fruit({
    name:"kiwi",
    rating:5,
    review:"not bad but I dont love it "
})
const orange = new Fruit({
    name:"orange",
    rating:8,
    review:"good fruit"
})
const banana=new Fruit({
    name:"banana",
    rating:10,
    review:"now we tokinf the best out there"
});
//remove below comment to sasve as many  data as you want in one line. 
//let att=[banana,orange,kiwi];
// Fruit.insertMany(att,(err)=>{
//     if (err){
//         console.log(err)
//     }else{
//         console.log("sucsses")
//     }

// });



// another collectoin for tha same data base (fruitsDb)
const personsSchema = new mongoose.Schema({
    name:String,
    age:Number,
});
const Person=mongoose.model("Persons",personsSchema);
const person=new Person({
    name:"mamz",
    age:2.
})
//remove coment below to svae the data.
// person.save();

// weuse bellow methis to get the data inside the database.**it work just like js objects**
Fruit.find((err,fruits)=>{
    if(err){
        console.log(err)
    }else{
        mongoose.connection.close();
        fruits.forEach(element => {
            console.log(element.name)
        
    })};
});

//this line **mongoose.connection.close();** is used to close the conection to the local db automaticaly