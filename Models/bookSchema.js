import mongoose from 'mongoose'

const allBookData = new mongoose.Schema({
    name : String,
    poster : String,
    author : String,
    summary : String,
    status : {
        type : String,
        default : 'Available'
    } 
})

const AllBook = mongoose.model('ALLBOOK', allBookData);

export default AllBook;