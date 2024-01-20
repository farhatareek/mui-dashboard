import { User } from "./models"
import { connectToDB } from "./utils"
import { Product } from "./models"

export const fetchproductdata = async(q,page)=>{
    const regex =new RegExp(q,"i")
    const PAGE_ITEM = 5
    try{
    connectToDB()
    const count = await Product.find({title:{$regex:regex}}).count()
    const products = await Product.find({title:{$regex:regex}}).limit(PAGE_ITEM).skip(PAGE_ITEM *(page-1))
    return {count,products};
    }catch (err){
    throw new Error("faild to serv")
    }
}

export const fetchuserdata = async(q,page)=>{
    const regex =new RegExp(q,"i")
    const PAGE_ITEM = 5
    try{
    connectToDB()
    const count = await User.find({username:{$regex:regex}}).count()
    const users = await User.find({username:{$regex:regex}}).limit(PAGE_ITEM).skip(PAGE_ITEM *(page-1))
    return {count,users};
    }catch (err){
    throw new Error("faild to serv")
    }
}


export const fetchUser = async (id) => {
  console.log(id);
    try {
      connectToDB();
      const user = await User.findById(id);
      return user;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch user!");
    }
  };

  export const fetchProduct = async (id) => {
    try {
      connectToDB();
      const product = await Product.findById(id);
      return product;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch product!");
    }
  };








