const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 4000;

const fs = require('fs');

app.use(cors())

app.get('/', async (req, res) => { 
  res.send('Server is running....');
});

// pointed the model folder
app.use('/server', express.static(path.join(__dirname, 'model')))

// pointed the kml folder
app.use('/kml', express.static(path.join(__dirname, 'kml')))



/* app.get('/kml', (req, res) => {
  const kmlPath = path.join(__dirname, 'kml', 'cta.kml');
  const kmlFileContent = fs.readFileSync(kmlPath, 'utf8');
  console.log(kmlFileContent)
  // res.setHeader('Content-Type', 'application/vnd.google-earth.kml+xml');
  res.sendFile(kmlFileContent);

}); */





app.get('*', async (req, res) => { 
  res.send('No routes found!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});