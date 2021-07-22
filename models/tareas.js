const Tarea = require('./tarea');

class Tareas {
    _listado = {}

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(id => {
            const tarea = this._listado[id];
            listado.push(tarea);
        })
        return listado;
    };
    constructor (){
        this._listado = {}
    }
    cargarTareasFromArray(tareas = []){
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;