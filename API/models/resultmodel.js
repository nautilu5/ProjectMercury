

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;//gets rid of error message
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');//need to npm install bcrypt

//this will be the format of the data that is going to be sent to the front end form
//set to a constant so that the data going out is constant when obsserved by the front end
const resultSchema = new Schema ({
   
    name: { type: String },
    price: { type: Number }, //formatted just in case validators or more needs to be added using {}
    numreviews: { type: Number },
    avgreviews: { type: Number },
    manufacturer: { type: String },
   
    address: {
        street: { type: String },
        zipcode: { type: Number }, 
        room: { type: Number }
    }
})

//add results encryption? and for what values from the results do we want to encrypt


//compares the encrypted data to the non ecrypted data

//(note: this might not be needed for this type of application
//this would be implemented to compare passwords for a login function
// but will test this out later)

/*resultSchema.method.compareSearch = function(result){
    
    return bcrypt.compareSync(result, this.result);
}*/

module.exports = mongoose.model('Result', resultSchema)