const Tarea = require('./tarea');

class Tareas {
    _listado = {}

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(id => {
            const tarea = this._listado[id];
            listado.push(tarea);
        })
        return listado;
    };
    constructor() {
        this._listado = {}
    }
    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }
    cargarTareasFromArray(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
    listadoCompleto() {
        console.log();
        this.listadoArr.forEach((tarea, i) => {
            const index = `${i + 1}.`.green;
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn)
                ? 'Completado'.green
                : 'Pendiente'.red
            console.log(`${index} ${desc} :: ${estado}`);
        });
    }
    listarCompletadosPendientes(completadas = true) {
        console.log();
        if (completadas) {
            this.listadoArr.forEach((tarea, i) => {
                const index = `${i + 1}.`.green;
                const { desc, completadoEn } = tarea;
                const estado = completadoEn;
                if (completadoEn) {
                    console.log(`${index} ${desc} :: ${estado.green}`);
                }
            });
        }else {
            this.listadoArr.forEach((tarea, i) => {
                const index = `${i + 1}.`.green;
                const { desc, completadoEn } = tarea;
                if (!completadoEn) {
                    console.log(`${index} ${desc} :: ${'Pendiente'.red}`);
                }
            });
        }
    }
    togleCompletado(ids = []) {
        ids.forEach(id => {
            const tarea = this._listado[id];
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
            }
        });
        this.listadoArr.forEach(tarea => {
            if (!ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null;
            }
        })
    }
}

module.exports = Tareas;