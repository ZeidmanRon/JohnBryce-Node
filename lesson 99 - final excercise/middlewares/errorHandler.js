const errorHandler = (err, req, res, next) => {
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
}

module.exports = errorHandler;
