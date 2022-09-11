const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const connectionSchema = new Schema({
    name: {type: String, required: [true, 'name is required']},
    topic: {type: String, required: [true, 'topic is required']},
    details: {type: String, required: [true, 'details is required'],
            minLength: [10, 'details must have at least 10 characters']},
    date: {type: String, required: [true, 'date is required']},
    start: {type: String, required: [true, 'start is required']},
    end: {type: String, required: [true, 'end is required']},
    host: {type: Schema.Types.ObjectID, ref: 'User'},
    image: {type: String, required: [true, 'image is required']}
},
{timestamps: true}
);

module.exports = mongoose.model('Connection', connectionSchema);