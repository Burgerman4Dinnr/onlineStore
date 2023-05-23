const express = require('express');
const PORT = process.env.PORT || 3000;

// Security
const helmet = require('helmet');
const cors = require('cors');

const server = express()
.use(cors())
.use(express.json())

server.use(
    helmet.contentSecurityPolicy({
        useDefaults: true,
        crossOriginResourcePolicy: false,
        directives: {
            'img-src': ["'self'", "https: data:"]
        }
    })
)

const router = require('./app/routes/router');
server.use('/', router);
server.listen(PORT, ()=> console.log(`This is your Laptop speaking, port ${PORT} is ready for takeoff!`));