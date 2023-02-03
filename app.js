const path = require('path');
const fs = require('fs') ;

const express = require('express');
const app = express();
var cors = require('cors')
const sequelize = require('./util/database');
const User = require('./models/users');


// Impoet helmet
const helmet=require('helmet')
app.use(helmet())


require('dotenv').config();

const userRoutes = require('./routes/user');

app.use(cors());

// app.use(bodyParser.urlencoded());  ////this is for handling forms
app.use(express.json());  //this is for handling jsons

app.use('/user', userRoutes);



sequelize.sync()
    .then(() => {
        app.listen(process.env.PORT);
    })
    .catch(err => {
        console.log(err);
    })
