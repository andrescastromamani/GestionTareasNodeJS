var inquirer = require('inquirer');
var colors = require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué deseas hacer?',
        choices: [
            {
                name: '1. Crear Tarea',
                value: '1'
            },
            {
                name: '2. Listar Tareas',
                value: '2'
            },
            {
                name: '3. Listar Tareas Completadas',
                value: '3'
            },
            {
                name: '4. Listar Tareas Pendientes',
                value: '4'
            },
            {
                name: '5. Completar Tarea(s)',
                value: '5'
            },
            {
                name: '6. Borrar Tarea',
                value: '6'
            },
            {
                name: '0. Salir',
                value: '0'
            },
        ]

    }
]

const inquirerMenu = async () => {
    //console.clear()
    console.log('====================='.green)
    console.log('Seleccione una Opcion'.green);
    console.log('=====================\n'.green);
    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}
const pausa = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.green} para continuar`,
        }
    ]
    console.log('\n');
    await inquirer.prompt(question);
}
module.exports = {
    inquirerMenu,
    pausa
}