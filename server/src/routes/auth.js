import {Router} from "express";import bcrypt from "bcryptjs";import jwt from "jsonwebtoken";import User from "../models/User.js";import {protect} from "../middleware.js";
const r=Router();
r.post("/login",async(req,res)=>{const u=await User.findOne({email:String(req.body.email||"").toLowerCase()}).select("+password");if(!u||!await bcrypt.compare(req.body.password||"",u.password))return res.status(401).json({message:"Invalid email or password"});res.json({token:jwt.sign({id:u._id},process.env.JWT_SECRET,{expiresIn:"1d"}),user:{id:u._id,name:u.name,email:u.email,role:u.role}})});
r.get("/me",protect,(req,res)=>res.json({user:{id:req.user._id,name:req.user.name,email:req.user.email,role:req.user.role}}));export default r;
