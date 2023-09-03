const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
title:{
  type:String,
  required:true,
},level:{
  type:String,
  required:true,
},ingredients:{
  type:[String],
  required:true,
},cuisine:{
  type:String,
  required:true,
},dishType:{
  type:String,
  enum:[
    'breakfast',
    'soup',
    'main-course',
    'snack',
    'drink',
    'dessert'
  ],
  required:true,
},duration:{
  type:Number,
  required:true,
},creator:{
  type:String,
  required:true,
},created:{
  type:Date,
  required:true,
},image:{
  type:String,
  default:"https://images.media-allrecipes.com/images/75131.jpg",
  required:true,
}



});

const Recipe = mongoose.model('Recipe', recipeSchema);



module.exports = Recipe;
