const http = require('http');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const conf = require('./config/defaultConfig.js');

const server = http.createServer((req, res) => {
    let root = process.cwd();
    const filePath = path.join(root, req.url);
    fs.stat(filePath, (err, stats) => {
        if (err) {
            res.statusCode = 404;
            res.setHeader('Content-Type','text/plain');
            res.end(`${filePath} is not a directory or file`);
            return;
        }

        if (stats.isFile()) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            //读内容很慢
            // fs.readFile(filePath, (err, data) => {
            //     res.end(data);
            // }); 
            // 流方式读比较快
            fs.createReadStream(filePath).pipe(res);
        } else if (stats.isDirectory()) {
            fs.readdir(filePath, (err, files) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end(files.join(','));
            });
        }
    });
});

server.listen(conf.port, conf.hostname, () => {
    const addr = `http://${conf.hostname}:${conf.port}`;
    console.info(`Server started at ${chalk.green(addr)}`);
});