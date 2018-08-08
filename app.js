const express=require('express');
const app = express();

const routes = require('./routes/route.js');

app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/', routes.home);
app.get('/:city', routes.city);

const port = process.env.PORT || 8080;

const server=app.listen(port, function(req,res){
    console.log('Catch the action at http://localhost:' + port)
});