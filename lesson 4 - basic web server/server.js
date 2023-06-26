const { createServer } = require('http')

const HOST = 'localhost'
const PORT = '8080'



const jsonListener = function (req, res) {
    res.setHeader('Content-Type', 'application/json')
    res.writeHead(200)
    res.end(JSON.stringify({
        schoolName: 'John Bryce',
        studentName: 'iZooda'
    }))
}

const displayCsvListener = function (req, res) {
    res.setHeader('Content-Type', 'text/csv')
    res.writeHead(200)
    res.end('id,name,age\n12345678,ron,24')
}
const downloadCsvListener = function (req, res) {
    res.setHeader('Content-Disposition', 'attachment;filename=johnvryce.csv')
    res.writeHead(200)
    res.end('id,name,age\n12345678,ron,24')
}


const server = createServer(function (req, res) {
    if (req.url === '/json' && req.method === 'GET') {
        jsonListener(req,res);
    } else if (req.url === '/csv' && req.method === 'GET') {
        displayCsvListener(req,res);
    } else if (req.url === '/download' && req.method === 'GET') {
        downloadCsvListener(req,res);
    } else {
        res.writeHead(404)
        res.end('no such /path')
    }
}).listen(PORT, HOST, () => {
    console.log('Server running.')
});
