const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static(__dirname+'/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up routes here
app.get('/aboutMe/:hobby', (req, res) => {
    const hobby = req.params.hobby;
    if (typeof hobby === 'string') {
      res.send(`My hobby is ${hobby}`);
    } else {
      res.status(404).send('Invalid hobby parameter');
    }
  });

//picture
app.get('/pic', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });

//form 
app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/public/form.html');
  });
  
  app.post('/formData', (req, res) => {
    //const { email, message } = req.body;
    res.json(req.body);
    res.send(`${email} sent you a message "${message}"`);
    
  });
  
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
