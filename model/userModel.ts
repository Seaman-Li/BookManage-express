import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    nickname:{
        type:String,
    }
});

// const User = mongoose.model('User',userSchema)

export default userSchema;