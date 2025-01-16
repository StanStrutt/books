import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    title: { type: String, required: true },
    author: {
        id: {type: Number, required: true},
        name: { type: String, required: true },
        yearOfBirth: { type: Number, required: true },
        yearOfDeath: { type: Number, required: true },
    },
    publisher: {
        id: {type: Number, required: true},
        name: { type: String, required: true },
        yearFounded: { type: Number },
        headquartersLocation: { type: String }
    },
    numberOfPages: { type: Number, required: true },
    yearPublished: { type: Number, required: true }
})

export default mongoose.model('Book', BookSchema);