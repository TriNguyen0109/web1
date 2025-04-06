const path=require('path')
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const route = require('./routes');

const app = express()
const port = 3000


app.use(express.static(path.join(__dirname,'public')));
// console.l og(path.join(__dirname,'public'))
// app.use(morgan('combined'))

//tra gia tri khi submit ve bode trong cong post
app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());

app.engine('hbs', handlebars.engine({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));


//Routes init;
route(app);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})