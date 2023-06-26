const notFound = (req, res, next) => {
    res.status(404).send('nothing here mate...');
};

module.exports = notFound;