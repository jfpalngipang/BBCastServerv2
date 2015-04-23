var Video = require('./models/video'),
    Text = require('./models/text'),
    Image = require('./models/image');
module.exports = function(app, passport, io, mongoose) {

app.get('/', function(req,res){
        res.send("SUCCESS!");
});
app.get('/getVideos', function(req,res){
    Video.find({}, function(err, videos){
        if (err) throw err;
        console.log(videos);
        res.send(videos);
    });
});

app.get('/getImages', function(req,res){
    Image.find({}, function(err, images){
        if (err) throw err;
        console.log(images);
        res.send(images);
    });
});

app.get('/getTexts', function(req,res){
    Text.find({}, function(err, texts){
        if (err) throw err;
        console.log(texts);
        res.send(texts);
    });
});

app.post('/addMedia', function(req, res){
    if(req.body.action === 'addVideo') {
        var timein = new Date(),
            timeout = new Date(req.body.deadline);
        
        new_video = Video({
            video_id    :   req.body.video_id,
            time_in     :   timein,
            time_out    :   timeout
        });
        new_video.save(function(err){
            if (err) throw err;
            console.log(new_video);
        });
    } else if(req.body.action === 'addImage') {
        var timein = new Date(),
            timeout = new Date(req.body.deadline);
        
        new_image = Image({
            image_url   :   req.body.image_url,
            time_in     :   timein,
            time_out    :   timeout
        });
        new_image.save(function(err){
            if (err) throw err;
            console.log(new_image);
        });
    } else if(req.body.action === 'addText') {
        var timein = new Date(),
            timeout = new Date(req.body.deadline);
        new_text = Text({
            text        :   req.body.text,
            time_in     :   timein,
            time_out    :   timeout
        });
        new_text.save(function(err){
            if (err) throw err;
            console.log(new_text);
        });
    } else {
        res.send('Invalid Request.');
    }
    res.send('Your media has successfully been added to BBCast');
});

app.post('/deleteMedia', function(req,res){
    if(req.body.action === 'deleteVideo') {
        Video.findByIdAndRemove(req.body.id, function(err){
            if (err) throw err;
            else
                console.log('Video removed');
        });
    } else if(req.body.action === 'deleteImage') {
        Image.findByIdAndRemove(req.body.id, function(err){
            if (err) throw err;
            else
                console.log('Image removed');
        });
    } else if(req.body.action === 'deleteText') {
        Text.findByIdAndRemove(req.body.id, function(err){
            if (err) throw err;
            else
                console.log('Text removed');
        });
    } else {
        res.send('Invalid Request.');
    }
    res.send('The media has successfully been removed from BBCast.'); 
});
}

    