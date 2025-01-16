import mongoose from 'mongoose';

const PublisherSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    name: { type: String, required: true },
    yearFounded: { type: Number },
    headquartersLocation: { type: String }
})

export default mongoose.model('Publisher', PublisherSchema);