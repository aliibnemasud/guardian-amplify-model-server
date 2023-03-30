const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 4000;

app.use(cors())

app.get('/', async (req, res) => { 
  res.send('Server is running....');
});

// pointed the model folder
app.use('/server', express.static(path.join(__dirname, 'model')))

app.get('*', async (req, res) => { 
  res.send('No routes found!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});