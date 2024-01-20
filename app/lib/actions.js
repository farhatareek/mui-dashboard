"use server"
import { revalidatePath } from "next/cache"
import { Product, User } from "./models"
import { connectToDB } from "./utils"
import { redirect } from "next/navigation"
import bcryptjs from "bcryptjs"
import {  signIn, signOut } from "../auth"




export const addUsers = async (formData)=>{
    const {username, email, password ,phone,role,activity,info}=Object.fromEntries(formData)
    try{
        connectToDB()
        const salt = await bcryptjs.genSalt(10)
        const hashedpass = await bcryptjs.hash(password, salt)
        const newUser = new User({
            username,
            email,
            password:hashedpass,
            phone,
            role,
            activity,
            info
        });
        await newUser.save()
    }catch (err){
        console.log(err);
        throw new Error("faild to add new one")
    }
    revalidatePath("/dashboard/user")
    redirect("/dashboard/user")
};
export const updateUser = async (formData) => {
    const { id, username, email, password, phone, info , role, activity } =
    Object.fromEntries(formData);
    try {
        connectToDB();
    const updateFields = {
        username,
        email,
        password,
        phone,
        info,
    role, 
    activity,
    };
    Object.keys(updateFields).forEach(
        (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
        );
        await User.findByIdAndUpdate(id, updateFields);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to update user!");
    }
    revalidatePath("/dashboard/user");
    redirect("/dashboard/user");
    };


export const addProduct = async (formData)=>{
    const {title,desc, category ,stock, price,color}=Object.fromEntries(formData)
    try{
    connectToDB()
        const newProduct = new Product({
            title,
            desc,
            category,
            stock,
            price,
            color
        });
        await newProduct.save()
    }catch (err){
        console.log(err);
        throw new Error("faild to add new one")
    }
    revalidatePath("/dashboard/product")
    redirect("/dashboard/product")
};

  
   


export const deleteProducts = async (formData)=>{
    const {id}=
    Object.fromEntries(formData)
    try{
    connectToDB()
        await Product.findByIdAndDelete(id)
    }catch (err){
        console.log(err);
        throw new Error("faild to add new one")
    }
    revalidatePath("/dashboard/product")
}

export const updateProduct = async (formData) => {
    const { id, title, desc, price,category , color, stock } =
      Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      const updateFields = {
        title,
        desc,
        price,
        stock,
        color,
        category
      };
  
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key] === "" || undefined) && delete updateFields[key]
      );
  
      await Product.findByIdAndUpdate(id, updateFields);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to update product!");
    }
  
    revalidatePath("/dashboard/product")
    redirect("/dashboard/product")
  };
  

export const deleteUsers = async (formData)=>{
    const {id}=
    Object.fromEntries(formData)
    try{
    connectToDB()
        await User.findByIdAndDelete(id)
    }catch (err){
        console.log(err);
        throw new Error("faild to add new one")
    }
    revalidatePath("/dashboard/user")
}


export const authentcate = async (prevState,formData) =>{
    const {username} = Object.fromEntries(formData)
 try {
    await signIn("credentials", { username });
 }catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
}

export const handleSignOut = async () => {
    await signOut(); // Perform the sign-out logic here
  };

  