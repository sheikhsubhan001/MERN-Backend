const mongoose = require("mongoose");
mongoose.pluralize(null);

var UserSchema = new mongoose.Schema({
    name:{ type: String, required: true },
    email:{ type: String, required: true },
    address:{ type: String, required: true }

})

var UserModel= mongoose.model('User', UserSchema);
module.exports = UserModel;