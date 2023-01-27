import mongoose from "mongoose";

const Book = new mongoose.Schema( {
    author: String,
    image_Url: String,
    title: String,
    description: String,
   /* price: Number,
    ISBN: Number,
    puplication: Date,
    category: Array,
    age_Group: {type: String, required:true},
    pages: Number, 
    **/
    
});
export default mongoose.model("test-learning", Book)