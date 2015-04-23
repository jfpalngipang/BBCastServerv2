var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    image_url   :       String,
    time_in     :       Date,
    time_out    :       Date
})

module.exports = Image = mongoose.model('Image', imageSchema);