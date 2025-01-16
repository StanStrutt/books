import mongoose from 'mongoose';

const AuthorSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    name: { type: String, required: true },
    yearOfBirth: { type: Number, required: true },
    yearOfDeath: { type: Number },
})

export default mongoose.model('Author', AuthorSchema);