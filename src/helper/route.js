const fs = require('fs');
const promisify = require('util').promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);

module.exports = async function (req, res, filePath) {
    try {
        const stats = await stat(filePath);
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
            readdir(filePath, (err, files) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end(files.join(','));
            });
        }
    } catch(ex) {
        res.statusCode = 404;
        res.setHeader('Content-Type','text/plain');
        res.end(`${filePath} is not a directory or file`);
        return;
    }
};