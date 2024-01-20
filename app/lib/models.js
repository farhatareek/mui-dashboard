import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        min:6,
        max:25,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:Boolean,
        default:false,
    } ,
    activity:{
        type:Boolean,
        default:false,
    },
    phone:{
        type:String
    },
    info:{
        type:String
    }

},{timestamps:true});

const productSchema = new mongoose.Schema({
    
title:{
        type: String,
        unique:true,
        required:true,
        min:6,
        max:25,
    },
    desc:{
    type:String,
    required:true,
    },
    category:{
    type:String
   },
   stock:{
   type:String
   },
    price:{
        type:String,
        min:0,
    },
    color:{
        type:String
    }

},{timestamps:true});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

