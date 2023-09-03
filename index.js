const mongoose = require('mongoose');
const Recipe = require('./models/Recipe.model');
const data = require('./data');
const MONGODB_URI = 'mongodb://127.0.0.1:27017/recipe-app';
// Import of the model Recipe from './models/Recipe.model.js'
// Import of the data from './data.json'


// Connection to the database "recipe-app"
mongoose
.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(async () => {
  try{
    await  Recipe.deleteMany()
  
  .then(() => {
    // Run your code here, after you have insured that the connection was made
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

  let newRecipe = await Recipe.findOneAndUpdate(
    { title: "Rigatoni alla Genovese" },
    { duration: 100 },
    { new: true }
  );

  if(newRecipe){
    console.log('Got new Update',
    newRecipe.title
    )
  }else{
    console.log('Didnt Update');
  }


  let deletRecipe =await Recipe.deleteOne({title:'Carror Cake'});
  if(deletRecipe){
    console.log('deleted');
  }else{
    console.log('Didnt Delete')
  }

}
  catch (error) {
    console.error("failed", error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
    console.log(" connection closed.");
  }
})
.catch((error)=>{
  console.log('done',error)
});

