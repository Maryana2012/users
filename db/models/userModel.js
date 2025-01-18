import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';


const userSchema = new Schema({
    name: {type: String, required:true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    token:{ type:String},
    status:{type: String}
},
{
    versionKey: false
});

userSchema.methods.hashPassword = async function (password){
    this.password = await bcrypt.hash(password);
}


const User = model('user', userSchema);
export default User;