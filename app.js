const express = require('express');

//-initializing the app by setting it to the expess function-//
const app = express();

// index route //
app.get('/', (req, res) => {
	res.send('Index route created');
});

// About route//
app.get('/about', (req, res) => {
	res.send('About page created');
});

// Projects route//
app.get('/projects', (req, res) => {
	res.send('Projects will be placed on this page');
});

const port = 5000;

app.listen(port, () => {
	console.log(`server started on port ${port}`);
	//The above line of code is equal to://
	//console.log("server started on port" + port);//
});
