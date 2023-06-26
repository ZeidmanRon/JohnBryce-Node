const express = require('express');
const usersRoute = require('./routes/users.js');
const auth = require('./middlewares/auth.js');
const app = express();
const port = 3000;

app.use(auth)

app.use('/', usersRoute);

app.use((req, res) => {
    res.sendStatus(404);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
