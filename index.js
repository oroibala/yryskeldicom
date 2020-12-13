const { response } = require('express');
const express = require('express');
const path = require('path'); 
const app = express();

app.get('/', (request, response) => {
   response.sendFile(path.join(__dirname, 'public', 'index.html')); 
});

app.get('/decaLib', (request, response) => {
   response.sendFile(path.join(__dirname, 'public', 'dwLibrary.html'))
})



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}...`));   