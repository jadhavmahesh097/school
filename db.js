const mongoose = require('mongoose')
// const MongoURL = 'mongodb://localhost:27017/newtwopm';

const MongoURL = 'mongodb+srv://jadhavmahesh097:GtykFsCrffHcXOpY@cluster0.nmjy5.mongodb.net/';
mongoose.connect(MongoURL, 
    {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }
)

const db = mongoose.connection;
db.on('connected', () => {
    console. log("Connected to Mongo DB server");
});

db. on('error', ( err) => {
    console. log("Error while connecting", err);
});
    