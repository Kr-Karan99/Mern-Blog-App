const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// Define the User schema
const UserSchema = new Schema({
  username: { type: String, required: true, minlength: 4, unique: true },
  password: { type: String, required: true } // Add password field
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Create an index on the username field for faster queries
UserSchema.index({ username: 1 });

// Create the User model using the schema
const UserModel = model('User', UserSchema);

// Export the User model
module.exports = UserModel;
