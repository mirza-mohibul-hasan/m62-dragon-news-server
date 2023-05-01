const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());
// const port = 5000;
const port =process.env.PORT || 5000;

const categories = require('./data/categories.json')
const news = require('./data/news.json')
//common
app.get('/', (req, res)=>{
    res.send('Dragon is running');
})
//for categories
app.get('/categories', (req, res)=>{
    res.send(categories);
})
app.get('/categories/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    if(id === 0){
        res.send(news)
    }
    else{
        const selectedCategoryNews = news.filter(n => parseInt(n.category_id) === id);
        res.send(selectedCategoryNews)
    }
})
//for news
app.get('/news', (req, res)=>{
    res.send(news);
})
app.get('/news/:id', (req, res)=>{
    const id = req.params.id;
    const selectedNews = news.find(n => n._id == id);
    res.send(selectedNews)
})

app.listen(port, () =>{
    console.log(`Dragon API is running on port: ${port}`);
})