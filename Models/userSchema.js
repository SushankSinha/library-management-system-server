import mongoose from 'mongoose'

const allUserData = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
    bloodGroup : String, 
    profilePhoto : String 
})

const AllUser = mongoose.model('ALLUSER', allUserData);

export default AllUser;