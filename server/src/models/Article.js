import mongoose from "mongoose";
export default mongoose.model("Article",new mongoose.Schema({title:{type:String,required:true},category:String,excerpt:String,body:{type:String,required:true},published:{type:Boolean,default:false},author:{type:mongoose.Schema.Types.ObjectId,ref:"User"},views:{type:Number,default:0}},{timestamps:true}));
