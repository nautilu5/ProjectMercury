const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
/*listens to the ser
app.listen(8000, () => {        <===THIS IS FOR REFERENCE
    console.log('Server started!');       |
  });                                     |
                                          V
  //
app.route('/api/cats').get((req, res) => {
    res.send({
        cats: [{ name: 'lilly' }, { name: 'lucy' }]
      });
});

//
app.route('/api/cats').post((req, res) => {
  res.send(201, req.body);
});

//
app.route('/api/cats/:name').put((req, res) => {
    res.send(200, req.body);
  });*/

  //middleware 

  app.use(cors({
    origin: 'http://localhost:8080'
  }))

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  
  //provides a static directory to connect to a front end
  app.use('/search', search);

  app.get('*', (req, res) => {
    // *res.sendFile(path.join(__dirname, '/client/dist/index.html'))
   });
  
  app.listen(8000, () => {
    console.log('And we are on port 8000')
  });

