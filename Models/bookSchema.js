import mongoose from 'mongoose'

const allBookData = new mongoose.Schema({
    name : String,
    poster : String,
    author : String,
    summary : String 
})

const AllBook = mongoose.model('ALLBOOK', allBookData);

export default AllBook;