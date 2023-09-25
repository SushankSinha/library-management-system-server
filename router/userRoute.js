import express from 'express'
import AllUser from '../Models/userSchema.js';

const router = express.Router();

// Route to get all Tasks

router.get('/users', async (req, res) => {

  try {
    const users = await AllUser.find();
    res.send(users);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving Users' });
  }
});

// Route to get one Task

router.get('/profile/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const user = await AllUser.findOne({_id:id});
    res.send(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving Users' });
  }
});

// Route to add a new Task

router.post('/create-user', async (req, res) => {

  const {name, email, age, bloodGroup, profilePhoto} = req.body;

  try {

          const existingUser = await AllUser.findOne({email : email})
          if(existingUser){
            res.status(400).json({message : 'User already exists!'})
          }else if (!existingUser){
              
          const userDetails = new AllUser({name : name, email : email, age : age, bloodGroup : bloodGroup, profilePhoto : profilePhoto});

          await userDetails.save();            
          
          res.status(201).json({message : "User Added!", userDetails})
          }
      
          } catch(err){
      console.log(err)
  }
});

router.put('/edit-user/:id', async (req, res) => {

  const id = req.params.id;

  const {name, email} = req.body;

    try {
      await AllUser.findByIdAndUpdate({_id:id}, {name : name, email : email}, { new: true });
      res.status(201).json({message : "User details Updated!"});
    } catch (error) {
      res.status(500).json({ message: 'Error updating User', error });
    }
});

router.put('/edit-profile/:id', async (req, res) => {

  const id = req.params.id;

  const {age, bloodGroup, profilePhoto} = req.body;

    try {
      await AllUser.findByIdAndUpdate({_id:id}, { age : age, bloodGroup : bloodGroup, profilePhoto : profilePhoto}, { new: true });
      res.status(201).json({message : "User details Updated!"});
    } catch (error) {
      res.status(500).json({ message: 'Error updating User', error });
    }
});

router.delete('/user/:id', async (req, res) => {
  const id  = req.params.id;

  try {
    await AllUser.deleteOne({_id:id})
    res.status(204).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting User', error });
  }
});


export default router;