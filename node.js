const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;



app.get('/', (req, res) =>{
    console.log('folake');
    //res.send("This is folake's serve")
    res.sendFile('./views/home.html', { root: __dirname});
})

app.get('/about', (req, res) =>{
    console.log('georhge');
   // res.send("Talo")
   res.sendFile('./views/about.html', { root: __dirname});
})

app.get('/contact-me', (req, res) =>{
    console.log('olumoroti');
   // res.send("T.gmail.com")
   res.sendFile('./views/contact-me.html', { root: __dirname});
})

app.get('/contact', (req, res) =>{
    console.log('georhge');
   // res.send("Talo")
   res.redirect('./contact-me')
})


app.use((req, res) => {
    res.sendFile('./views/404.html', { root: __dirname});
})

app.listen(PORT, () => {
    console.log(`app is listening at this ${PORT}`)
})