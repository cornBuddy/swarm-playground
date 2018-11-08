'use strict';

const { createServer } = require('http');
const { hostname } = require('os');

createServer((_, res) => {
    const body = JSON.stringify({
        ok: true,
        status: 'green',
        hostname: hostname(),
    });
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body)
    });
    res.end(body);
})
    .listen(8080, e => console.error(e));
