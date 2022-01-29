const express = require('express');
const cors = require('cors');

const databaseConnect = require('./network/database');
const routes = require('./network/routes');
const { portServer, hostServer } = require('./network/config');

const app = express();

//routes(app);

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.listen(portServer, () => {
	databaseConnect();
	console.log(`server running in ${hostServer}:${portServer}`);
});
