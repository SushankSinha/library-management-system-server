import mongoose from 'mongoose'

const allBookData = new mongoose.Schema({
    bookName : {
        type : String
    },
    poster : {
        type : String
    },
    rating : {
        type : Number
    },
    summary : {
        type : String
    }
    
})

const AllBook = mongoose.model('ALLBOOK', allBookData);

export default AllBook;