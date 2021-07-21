const colors = require('colors');
const { inquirerMenu, pausa } = require('./helpers/inquirer');

console.clear()

const main = async() => {
    console.log('Hola mundo');
    let opt = ''
    do {
        opt = await inquirerMenu();
        console.log(opt);
        pausa()

    } while (opt !== '0');
}
main()