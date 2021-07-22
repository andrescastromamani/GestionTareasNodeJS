const fs = require('fs');

const guardarArchivo = (data) => {
    const archivo = './db/data.json';
    fs.writeFileSync(archivo, JSON.stringify( data));
}

module.exports = {
    guardarArchivo
};