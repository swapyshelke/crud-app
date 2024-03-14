import mongoose from "mongoose";
// schema
const userSchema = mongoose.Schema({
    name: String,
    username: {
        type: String,
        unique: true
    },
    email: String,
    phone: Number
}, {
    timestamps: true
  })



// model
const User = mongoose.model('User', userSchema);

export default User;