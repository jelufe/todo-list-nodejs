const yargs = require('yargs');
const taskModel = require('./task');

yargs.version('1.0.0')

yargs.command({
    command: 'add',
    describe: 'Adiciona uma nova Tarefa',
    builder: {
        name: {
            describe: "Nome da tarefa",
            demandOption: true,
            type: 'string'
        },
        description: {
            describe: "Nome da tarefa",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        const task = {
            name: argv.name,
            description: argv.description
        }
        taskModel.addTask(task.name, task.description);
    }
});


yargs.command({
    command: 'remove',
    describe: 'Remove uma Tarefa',
    builder: {
        name: {
            describe: "Nome da tarefa",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        taskModel.removeTask(argv.name);
    }
});


yargs.command({
    command: 'list',
    describe: 'Lista as Tarefas',
    handler: function () {
        taskModel.listTasks();
    }
});


yargs.command({
    command: 'read',
    describe: 'Mostra uma Tarefa',
    builder: {
        name: {
            describe: "Nome da tarefa",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        taskModel.readTask(argv.name);
    }
});


yargs.command({
    command: 'done',
    describe: 'Conclui uma Tarefa',
    builder: {
        name: {
            describe: "Nome da tarefa",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        taskModel.markTask(argv.name);
    }
});


yargs.command({
    command: 'clear',
    describe: 'Apaga todas as tarefas',
    handler: function () {
        taskModel.clear();
    }
});


yargs.parse();