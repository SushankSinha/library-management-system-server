import express from 'express'
import AllBook from '../Models/bookSchema.js';

const router = express.Router();

// Route to get all Tasks

router.get('/books', async (req, res) => {

  try {
    const books = await AllBook.find();
    res.send(books);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving Books' });
  }
});

// Route to get one Task

router.get('/books/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const book = await AllBook.findOne({id:id});
    res.send(book);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving Books' });
  }
});

// Route to add a new Task

router.post('/add', async (req, res) => {

  const {name, poster, rating, summary} = req.body;


  try {
              
          const bookDetails = new AllBook({name, poster, rating, summary});

          await bookDetails.save();            
          
          res.status(201).json({message : "Book Saved!", bookDetails})
      
          } catch(err){
      console.log(err)
  }
});

router.put('/edit/:id', async (req, res) => {

  const id = req.params.id;

  const {name, poster, rating, summary} = req.body;

    try {
      const updatedAllBooks = await AllBook.updateOne({id:id}, { name, poster, rating, summary}, { new: true });
      res.status(201).json({message : "Book details Updated!", book: updatedAllBooks});
      if (!updatedAllBooks) {
        return res.status(404).json({ message: "Book not found" });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating Book', error });
    }
});

router.delete('/:id', async (req, res) => {
  const id  = req.params.id;

  try {
    await AllBook.findByIdAndDelete({id:id})
    res.status(204).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Book', error });
  }
});


export default router;