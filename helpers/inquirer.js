var inquirer = require('inquirer');
var colors = require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué deseas hacer?',
        choices: [
            {
                name: `${'1.'.green} Crear Tarea`,
                value: '1'
            },
            {
                name: `${'2.'.green} Listar Tareas`,
                value: '2'
            },
            {
                name: `${'3.'.green} Listar Tareas Completadas`,
                value: '3'
            },
            {
                name: `${'4.'.green} Listar Tareas Pendientes`,
                value: '4'
            },
            {
                name: `${'5.'.green} Completar Tarea(s)`,
                value: '5'
            },
            {
                name: `${'6.'.green} Borrar Tarea`,
                value: '6'
            },
            {
                name: `${'0.'.green} Salir`,
                value: '0'
            },
        ]

    }
]

const inquirerMenu = async () => {
    //console.clear()
    console.log('====================='.green)
    console.log('Seleccione una Opcion');
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
const leerInput = async(message)=>{
    const question = [
        {
            type: 'input',
            name: 'desc',
            message: message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese una descripcion'
                }
                return true
            }
        }
    ]
    const {desc} = await inquirer.prompt(question)
    return desc
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}