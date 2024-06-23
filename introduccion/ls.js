const fs = require('node:fs');

fs.readdir('.', (err, files) => {
    if (err){
        console.error("Error a l leeer al directorio", err);
    }

    files.forEach(file => console.log(file))
})