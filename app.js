const colors = require('colors');
const { guardarArchivo, leerArchivo } = require('./helpers/guardar-archivo');
const { inquirerMenu, 
        pausa,
        leerInput
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

const main = async() => {
    let opt = ''
    const tareas = new Tareas();
    const tareasDB = leerArchivo();
    if(tareasDB){
        tareas.cargarTareasFromArray(tareasDB);
    }
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
                tareas.listadoCompleto();
            break;
            case '3':
                tareas.listarCompletadosPendientes(true);
            break;
            case '4':
                tareas.listarCompletadosPendientes(false);
            break;
        }
        guardarArchivo(tareas.listadoArr);
        await pausa();

    } while (opt !== '0');
}
main()