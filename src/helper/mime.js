const path = require('path');

const mimeTypes = {
    'css': 'text/css',
    'html': 'text/html',
    'js': 'text/javascript',
    'json': 'text/json',
    'jpg': 'image/jpeg',
    'txt': 'text/plain'
};

module.exports = (filePath) => {
    let ext = path.extname(filePath).split('.').pop().toLowerCase();
    if (!ext) {
        ext = filePath;
    }
    return mimeTypes[ext] || mimeTypes['txt'];
};