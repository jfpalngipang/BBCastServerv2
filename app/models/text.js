var mongoose = require('mongoose');

var textSchema = new mongoose.Schema({
    text        :       String,
    time_in     :       Date,
    time_out    :       Date
})

module.exports = Text = mongoose.model('Text', textSchema);