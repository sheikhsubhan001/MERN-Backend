const express = require('express');
const router = express.Router();

const Controller = require('../Controller/UserController');

router.post('/Useradd',Controller.create);
router.get('/getUser',Controller.getAllUsers);
router.get('/getsingle/:id',Controller.getOneUser);
router.put('/UpdateUser/:id',Controller.UpdateUser);
router.delete('/DeleteUser/:id',Controller.DeleteOne);
router.delete('/delall',Controller.DeleteAll);


module.exports=router;

