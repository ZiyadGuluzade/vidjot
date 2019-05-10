const express = require('express');
const exphbs = require('express-handlebars');

//-initializing the app by setting it to the expess function-//
const app = express();

// Handlebars middleware //
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// index route //
app.get('/', (req, res) => {
	const title = 'Home';
	res.render('index', { title: title });
});

// About route//
app.get('/about', (req, res) => {
	const about = 'About';
	res.render('about', { about: about });
});

const port = 5000;

app.listen(port, () => {
	console.log(`server started on port ${port}`);
	//The above line of code is equal to://
	//console.log("server started on port" + port);//
});
