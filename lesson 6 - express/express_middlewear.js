const express = require('express');
const app = express();
const PORT = 3000;
const host = 'localhost';

/**
 * use the middlewear that fit to the type of data sent in the body
 * for urlencoded body data:
 * app.use(express.urlencoded({ extended: false }));
 * for json body data:
 * app.use(express.json({ extended: false }));
 **/

/**
 * now lets create a new middlewear to validate authentications
 */
app.use((req, res, next) => {
    const unauthorized = () =>
        next({
            code: 401,
            message: 'unauthorized',
        });


    const header = req.headers.authorization; // struct is Bearer token
    if (!header || header === undefined) {
        unauthorized();
    }
    const parts = header.split(' ');
    const apiKey = parts[1];

    if (!apiKey) {
        unauthorized();
    }

    if (apiKey != '123') {
        unauthorized();
    }

    next();
})

app.use((req, res, next) => {
    if (req.method === 'POST') {
        res.on('finish', () => {
            console.log(`POST to ${req.url} ended with status ${res.statusCode}`)
        })
    }
    next();
})

// Error handler middleware
app.use((err, req, res, next) => {
    // Check if the error has a custom status code, otherwise set it to 500 and 
    const statusCode = err.code || 500;
    res.status(statusCode);

    // Send the error response
    res.json({
        error: {
            code: statusCode,
            message: err.message || 'Internal Server Error',
        },
    });
});

app.get('/', (req, res) => {
    if (res.statusCode === '200') {
        res.send(`hello world`)
    } else {
        res.end()
    }
})

app.post('/', (req, res) => {
    if (res.statusCode === '200') {
        res.send(`id is ${req.body.id}`)
    } else {
        res.end()
    }
})

//handle not found
app.use((req, res, next) => {
    if (!res.headersSent) {
        res.status(404).send('404 Not Found');
      }
})

app.listen(PORT, host, () => {
    console.log(`Example app listening on port ${PORT}`)
})

