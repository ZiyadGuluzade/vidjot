const express = require('express');

//-initializing the app by setting it to the expess function-//
const app = express();

// index route //
app.get('/', (req, res) => {
	res.send('Index route created');
});

const port = 5000;

app.listen(port, () => {
	console.log(`server started on port ${port}`);
	//The above line of code is equal to://
	//console.log("server started on port" + port);//
});
