//this will be the format of the data that is going to be sent to the front end form
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mognoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const searchSchema = new Schema({
    search: { type: any, required: true }
});

searchSchema.pre('save', function(next) {
    
    bcrypt.hash(this.search, null, null, (err, hash) => {

        if(err) {

            return next(err);

        } else {
    
            this.search = hash;
            next();
        }
    })
})

searchSchema.method.compareSearch = function(search){
    
    return bcrypt.compareSync(search, this.search);
}

module.exports = mongoose.model("Search", searchSchema)