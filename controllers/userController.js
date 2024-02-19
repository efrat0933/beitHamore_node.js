import { userModel } from "../models/user.js";
import mongoose from "mongoose";

export const createUser = async function (req, res) {

    // שמירה בדטה בייס שני דרכים.
    // 1 
    const myUser = new userModel(req.body);
    try {
        const doc = await myUser.save();
        res.send(doc);
    } catch (err) {
        res.send(err.message)
    }


    // דרך שניה לשמירה
    // await userModel.create(req.body);
    // console.log('saved')
    // res.send("saved"); 
}


export const getUserById = async function (req, res) {
    // const user = await userModel.findById(req.params.id).populate('bestFriend'); 

    // תנאי כלשהוא
    // const user = await userModel.find({age: 25}).populate('bestFriend'); 

    // בחירת שדות מסויימים
    //const users = await userModel.find({age: 25}).populate('bestFriend').select('username'); 


    // שימוש בפונקציה הסטטית
    const users = await userModel.findByUsername("efrat");
    users[0].sayHi();
    // const user =  await userModel.where('age').lt(26).where("username").equals("efrat").limit(1);
    res.send(users);
}


export const updateUser = async function (req, res) {

    const user = await userModel.findById(req.params.id);
    user.age = user.age + 1;
    user.save();
    res.send(user);
}


export const getAllUsers = async function(req, res) {
    res.status(401).send();
    try {
       const users = await userModel.find(); 
       res.send(users);
    } catch (err) {
        res.send(err)
    }
     
}