const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const multer = require('multer');
const uploader = require('./middleware/uploder');
const port = process.env.PORT || 4000;

app.use(cors())

app.get('/', async (req, res) => { 
  res.send('Server is running....');
});

// pointed the model folder
app.use('/server', express.static(path.join(__dirname, 'model')))

// pointed the kml folder
app.use('/kml', express.static(path.join(__dirname, 'kml')))

app.post('/uploadkml', uploader.single('kmlfiles'), async (req, res)=> {
    try {
      res.status(200).send(req.file)
    } catch (error) {
      
    }
})


app.get('*', async (req, res) => { 
  res.send('No routes found!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});