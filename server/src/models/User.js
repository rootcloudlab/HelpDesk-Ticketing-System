import mongoose from "mongoose";
export default mongoose.model("User",new mongoose.Schema({name:{type:String,required:true},email:{type:String,unique:true,lowercase:true},password:{type:String,required:true,select:false},role:{type:String,enum:["customer","agent","admin"],default:"customer"}},{timestamps:true}));
