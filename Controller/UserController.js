const User = require('../Models/UserModel');

module.exports = {
    create: async function (req, res) 
    {

        try {
            const newUser = new User(req.body);
            const { email } = newUser;
            const UserExist = await User.findOne({ email });
            if (UserExist) {
                return res.status(400).json({ message: "User Already Exist !" })
            }
            const SaveData = await newUser.save();
            res.status(200).json({ message: "User Sucessfully Created" });

        } catch (error) {
            res.status(500).json({ errorMessage: error.message })
        }

    }
    ,
    getAllUsers: async function (req,res) 
    {
        try {
            const UserData = await User.find();

            if(!UserData) 
            {
                return res.status(404).json({message:"User Not Found !"})
            }
            res.status(200).json({UserData});
        } catch (error) {
            res.status(500).json({errorMessage:message.error});
        }
        
    }
    ,
    getOneUser: async function (req,res) {
        try {
            const id = req.params.id;
            const UserExist = await User.findById(id);
            if(!UserExist)
            {
                return res.status(404).json({message:"User Not Found !"});
            }
            res.status(200).json({UserExist});
        } catch (error) {
            res.status(500).json({errorMessage: "error 500"});
        }
        
    },
    UpdateUser: async function (req,res) 
    {
        try {
            const id = req.params.id;
            const FindUser = await User.findById(id);
            if(!FindUser)
            {
                return res.status(404).json({message:"User Not Found !"});
            }
            const UpdatedUser = await User.findByIdAndUpdate(id, req.body, {
                new:true
            });
            res.status(200).json({message: "User Sucessfully Updated"});
        } catch (error) {
            res.status(500).json({errorMessage:message.error});
        }
    },

    DeleteOne: async function (req,res) 
    {
        try {
            const id = req.params.id;
            const FindUser = await User.findById(id);
            if(!FindUser)
            {
                return res.status(404).json({message:"User Not Found !"});
            }
            await User.findByIdAndDelete(id);
            res.status(200).json({message:"User Successfully Deleted !"})
            
        } catch (error) {
            res.status(500).json({errorMessage:message.error});
        }
        
    },
    DeleteAll: async function (req,res) 
    {
        try {
            await User.deleteMany();
            res.status(200).json({message:"Deleted Successfully !"});
        } catch (error) {
            res.status(500).json({errorMessage:message.error});
        }
        
    }
}