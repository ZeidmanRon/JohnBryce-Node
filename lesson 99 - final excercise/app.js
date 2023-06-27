const express = require("express");
const auth = require("./middlewares/auth");
const guestsRouter = require('./routes/guestsRouter');
const userRouter = require("./routes/users");
const notFound = require('./middlewares/404');

const app = express();
const port = 3000;

app.use(auth);
// app.use(express.json()); // Add this line to parse JSON payloads
app.use(express.urlencoded({ extended: false }));
app.use('/', guestsRouter);
app.use("/", userRouter);
app.use('/github', githubRouter);
app.use(errorHandler);
app.use(notFound);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
