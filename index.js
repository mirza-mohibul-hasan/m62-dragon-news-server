const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());
// const port = 5000;
const port =process.env.PORT || 5000;

const categories = require('./data/categories.json')

app.get('/', (req, res)=>{
    res.send('Dragon is running');
})
app.get('/categories', (req, res)=>{
    res.send(categories);
})
app.listen(port, () =>{
    console.log(`Dragon API is running on port: ${port}`);
})