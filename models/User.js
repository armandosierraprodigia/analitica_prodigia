const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema

const UserSchema = new Schema({
   email: {
      type: String
      //required: true
   },
   password: {
      type: String
      //required: true
   },
   date: {
      type: Date,
      default: Date.now
   },
   disable: {
      type: Boolean,
      default: false
   }
});

module.exports = User = mongoose.model("users", UserSchema);
