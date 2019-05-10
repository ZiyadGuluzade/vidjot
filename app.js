const express = require('express');

//-initializing the app by setting it to the expess function-//
const app = express();

// Creating a text middleware //
app.use(function(req, res, next) {
	//The below line of code gives us current time
	console.log(Date.now());
	req.name = 'Ziyad';
	next();
});

// index route //
app.get('/', (req, res) => {
	console.log(req.name);
	res.send('Index route created');
});

// About route//
app.get('/about', (req, res) => {
	res.send(req.name);
});

const port = 5000;

app.listen(port, () => {
	console.log(`server started on port ${port}`);
	//The above line of code is equal to://
	//console.log("server started on port" + port);//
});
