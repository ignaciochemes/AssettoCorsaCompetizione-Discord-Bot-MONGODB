const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: true
}, () => {
    console.log(`db conectada`);
});

module.exports = mongoose;