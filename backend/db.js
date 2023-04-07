const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://farmmykitchen:farmmykitchen@farmmykitchen.j8xitf7.mongodb.net/farmmykitchen?retryWrites=true&w=majority'
const mongoDB =async() =>{
    await mongoose.connect(mongoURI,{useNewUrlParser:true},async (err, result)=>{
    if(err) console.log("---", err)
    else{
        console.log("Connected to the Database")
        const fetched_data = await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(async function(err, data){
            const food_catagory= await mongoose.connection.db.collection("food_catagory");
            food_catagory.find({}).toArray(function(err,catData){
            if(err) console.log(err);
            else {
                global.food_items=data;
                global.food_catagory=catData;
                
            }
            })

            // if(err) console.log(err);
            // else {
            //     global.food_items=data;
                
            // }
        })
    } 

});

}

module.exports=mongoDB;