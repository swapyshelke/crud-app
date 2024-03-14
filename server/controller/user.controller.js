import User from "../schemas/user.schema.js";

const addUser = async (req, res) => {
   const user = req.body;

   const newUser = User(user);
   console.log(newUser);

   
   try {
     await  newUser.save();   
     console.log('User added to database 😊');
      res.status(201).json({
         message: "User register successfully"
      })
      
   } catch (error) {
      console.log('Error while saving user', error);
      res.status(500).json({
         message: "Error while saving user 😔"
      })
   }
}

export default addUser;