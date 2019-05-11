const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//-initializing the app by setting it to the expess function-//
const app = express();

//Map global promise //
mongoose.Promise = global.Promise;

//Connect to mongoose//
mongoose
	.connect('mongodb://localhost/vidjost-dev', {
		useNewUrlParser : true
	})
	.then(() => console.log('MongoDB connected').catch((err) => console.log(err)));

//Load idea model//
require('./models/Idea');
const Idea = mongoose.model('ideas');

// Handlebars middleware //
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// index route //
app.get('/', (req, res) => {
	const title = 'Home';
	res.render('index', { title: title });
});

// About route//
app.get('/about', (req, res) => {
	res.render('about');
});

// Add idead route //
app.get('/ideas/add', (req, res) => {
	res.render('ideas/add');
});

// Process form //
app.post('/ideas', (req, res)=>{
	res.send("ok");
})

const port = 5000;

app.listen(port, () => {
	console.log(`server started on port ${port}`);
});
