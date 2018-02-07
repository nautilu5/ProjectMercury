let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

require('mongoose-double')(mongoose);

mongoose.connect('mongodb://localhost:27017/local');

let SchemaTypes = mongoose.Schema.Types;

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

mongoose.connection.once('open', () => {
   
    let itemSchema = mongoose.Schema({
        
        name: String,
        price: SchemaTypes.Double,
        numreviews: SchemaTypes.Double,
        avgreviews: SchemaTypes.Double,
        address: {
            
            street: String,
            zipcode: Number,
            building: Number   
        },

        manufacturer: String
    });

    itemSchema.methods.speak = () => {
        
        let greeting = this.name

        ? "The item name is " + this.name : "No item name";

        console.log(greeting);
    }

    let item = mongoose.model('Items', itemSchema);

    let testitem = new item({ 

        name: 'String',
        price: 12.01,
        numreviews: 12.01,
        avgreviews: 12.01,
        address: {

            street: '101 Test Drive',
            zipcode: 49001,
            building: 100

        },
        manufacturer: 'Test'
    });
    
    testitem.save( (err, testitem) => {
        
        if (err) return console.error(err);

        testitem.speak();
    });
});
