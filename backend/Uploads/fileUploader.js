const fs = require('fs');
const path = require('path');

// Utility function to handle file uploads
const upload = (file, uploadPath) => {
    return new Promise((resolve, reject) => {
        const filePath = path.join(uploadPath, file.name);
        file.mv(filePath, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(filePath); // Return the path of the uploaded file
            }
        });
    });
};

module.exports = { upload };