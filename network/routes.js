const express = require('express');
const user = require('../api/users/routes');

const routes = (server) => {
	server.use('/user', user);
};

module.exports = routes;
