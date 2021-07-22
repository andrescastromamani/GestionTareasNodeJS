const colors = require('colors');
const { guardarArchivo, leerArchivo } = require('./helpers/guardar-archivo');
const { inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    listadoTareasChecklist
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

const main = async () => {
    let opt = ''
    const tareas = new Tareas();
    const tareasDB = leerArchivo();
    if (tareasDB) {
        tareas.cargarTareasFromArray(tareasDB);
    }
    do {
        //Mostrar el menu
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                //crear Tarea
                const desc = await leerInput('Descripción:');
                tareas.crearTarea(desc);
                break;
            case '2'://listar todas la tareas
                tareas.listadoCompleto();
                break;
            case '3'://listas completados
                tareas.listarCompletadosPendientes(true);
                break;
            case '4'://listar pendientes
                tareas.listarCompletadosPendientes(false);
                break;
            case '5'://completar | pendientes
                const ids = await listadoTareasChecklist(tareas.listadoArr)
                tareas.togleCompletado(ids);
                break;
            case '6'://Borrar tarea
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if (id !== '0') {
                    const ok = await confirmar('¿Está seguro de borrar la tarea?');
                    if (ok) {
                        tareas.borrarTarea(id);
                        console.log('Tarea eliminada con exito'.green);
                    }
                }
                break;
        }
        guardarArchivo(tareas.listadoArr);
        await pausa();

    } while (opt !== '0');
}
main()