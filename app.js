const yargs = require('yargs');
const chalk = require('chalk');

yargs.command({
    command: 'add',
    describe: 'Adiciona uma nova Tarefa',
    handler: function () {
        console.log(chalk.green('Adicionando a tarefa'));
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove uma Tarefa',
    handler: function () {
        console.log(chalk.red('Removendo a tarefa'));
    }
});

yargs.command({
    command: 'list',
    describe: 'Lista as Tarefas',
    handler: function () {
        console.log(chalk.yellow('Listando as tarefas'));
    }
});

yargs.command({
    command: 'read',
    describe: 'Mostra uma Tarefa',
    handler: function () {
        console.log(chalk.blue('Mostrando a tarefa'));
    }
});

console.log(yargs.argv);