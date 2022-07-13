const express  = require('express');
const app = express();
const port = process.env.PORT || 3055; 
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('api/home', async (req, res) => {    
     console.log('Home of Svelt Notices')
     res.send([
          {
               noticia: "Titulo",
               categoria: "Economia",
               preview : 'Economia está uma tragedia',
               body: "add"
          }
     ])
})

app.get('api/mostview', async (req, res) => {
     console.log('Most View Notices Page')
     res.send([{
          noticia: "",
          title: ""
     }, 
     {
          noticia: "",
          title: ""
     }, 
     {
          noticia: "",
          title: ""
     }, 
     {
          noticia: "",
          title: ""
     }, 
     {
          noticia: "",
          title: ""
     }, 
     {
          noticia: "",
          title: ""
     }, 
     {
          noticia: "",
          title: ""
     }, 
     {
          noticia: "",
          title: ""
     }, 
     {
          noticia: "",
          title: ""
     } 
])
})

app.get('api/noticepage', async => (req, res) {
     res.send(
          {
               noticia: "Titulo",
               categoria: "Economia",
               preview : 'Economia está uma tragedia',
               body: "add"
          }
)

})


app.listen(port, () => {
     console.log(`Example app listening at http://localhost:${port}`)
 
 })
 