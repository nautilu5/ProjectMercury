const express = require('express');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

/*listens to the ser
app.listen(8000, () => {
    console.log('Server started!');
  });*/

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
  });