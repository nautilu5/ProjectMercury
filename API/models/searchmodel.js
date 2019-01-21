

//this will be the format of the data that is going to be sent to the front end form
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

//creates a new const using the class Schema
//required for search
const searchSchema = new Schema({
    search: { type: String, required: true }
});



//adds encryption to data
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

//compares the encrypted data to the non ecrypted data

//can possibly be implemented to find valid search items
// the item doesnt exist, return a false back to front end 
//which will prompt the user
searchSchema.method.compareSearch = function(search){
    
    return bcrypt.compareSync(search, this.search);

}

module.exports = mongoose.model("Search", searchSchema)