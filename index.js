const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const categories = require('./data/Categories/categories.json');
const news = require('./data/News/news.json');

app.use(cors())

app.get('/', (req, res)=> {
  res.send('bistro is running')
});

app.get('/categories', (req, res) =>{
  res.send(categories)
})

app.get('/categories/:id', (req, res) => {
  const id = req.params.id;
  if(id == 0){
    res.send(news)
  }
  else{
    const categoryNews = news.filter(n => n.category_id === id);
    res.send(categoryNews)
  }
})

app.get('/news', (req,res) =>{
  res.send(news)
})

app.get('/news/:id', (req, res) =>{
  const id = req.params.id;
  const specificNews = news.find(n=> n._id == id);
  res.send(specificNews)
})



app.listen(port, () => {
  console.log(`app is running from port: ${port}`)
})