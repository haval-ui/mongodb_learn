// reqire mongoose to use as a driver.  

const mongoose=require('mongoose');
// this line is to conect with the local server for the mongodb database.
mongoose.connect('mongodb://localhost:27017/fruitsDB');
//create a schema for the data that you want to save. 
const fruitsSchema =new mongoose.Schema({
    name : {
        type:String,
        required: [true, 'there is no rfuit withot a name !!']
    },
    rating:Number,
    review:String,

});
//create a model for the schema.  
const Fruit =mongoose.model("Fruit",fruitsSchema);
//add documents with this lines for one data and many 
const hanar =new Fruit({
    name:"hanar",
    rating:7,
    review:"pretty solid aas a fruit."
});
// hanar.save()
//remove below coment tosave one data.
//peach.save(); 
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
// remove below comment to sasve as many  data as you want in one line. 


// let att=[banana,orange,kiwi];
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
    favoretFruit:fruitsSchema,
});

const Person=mongoose.model("Persons",personsSchema);
const hama =new Person({
    name:"hama",
    age:20,
    favoretFruit:hanar,
})



//remove coment below to svae the data.
hama.save();

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

//below codeis used to delet doc from the db.

// Fruit.deleteOne({name:"banana"},function(err){
//     if (err){
//         console.log(err)
//     }else{
//         console.log("ok")
//     }
// });
// the below code is used to delet all the items that ,mach the condition 

Person.deleteMany({id:"630f506f0066d71311930004"},(err)=>{
    if (err){
        console.log(err)
    }else{
        console.log("ok")
    }
});