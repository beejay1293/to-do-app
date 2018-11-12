data = [{todos:'Take a nap'}, {todos:'Have My Bath'}, {todos:'Cook my noodles'}]
var bodyParser = require('body-Parser')
var mogoose = require('mongoose')

//connect to a database
mongoose.connect(mongodb:beejay1293:december12@ds159563.mlab.com:59563/to-do-app)

//create a schema - a blueprint for our data

var urlencodedParser = bodyParser.urlencoded({extended: false})

module.exports = function(app){
app.get('/todo', function(req, res){
 res.render('todo', {todo: data})
});


app.post('/todo', urlencodedParser, function(req, res){
  data.push(req.body)
  res.json(data)

});

app.delete('/todo/:item', function(req, res){
  data = data.filter(function(todo){
   return todo.todos.replace(/ /g, "-") !== req.params.item;

  })
  res.json(data)

});

};
