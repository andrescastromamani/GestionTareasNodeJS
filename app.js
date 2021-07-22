const colors = require('colors');
const { guardarArchivo } = require('./helpers/guardar-archivo');
const { inquirerMenu, 
        pausa,
        leerInput
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

const main = async() => {
    console.log('Hola mundo');
    let opt = ''
    const tareas = new Tareas();
    do {
        //Mostrar el menu
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                //crear opcion
                const desc = await leerInput('Descripción:');
                tareas.crearTarea(desc);
            break;
            case '2':
                console.log(tareas.listadoArr);
            break;
        }
        guardarArchivo(tareas.listadoArr);
        await pausa();

    } while (opt !== '0');
}
main()