const express = require('express');
const userRouter = require('./controller/user/router');
const vueloRouter = require('./controller/vuelo/router');
const app = express();
const session = require('express-session')
app.use(express.json());
app.use(session({
    secret: '123',
    resave: true,
    saveUninitialized: false
}));

app.use('/api_v1/users', userRouter);
app.use('/api_v1/vuelos', vueloRouter);
module.exports = app;