data = [{todos:'Take a nap'}, {todos:'Have My Bath'}, {todos:'Cook my noodles'}]
var bodyParser = require('body-Parser')
var mongoose = require('mongoose')

//connect to a database
mongoose.connect('mongodb://test:december12@ds145752.mlab.com:45752/todo')

//create a schema - a blueprint for our data
var todoSchema = new mongoose.Schema({todos: String})

var Todos = mongoose.model('Todoa', todoSchema)

var itemOne = Todos({todos: 'give a flower'}).save(function(err){
  if (err) throw err;
  console.log('item added')
})



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
