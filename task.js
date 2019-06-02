const fs = require('fs')
const chalk = require('chalk');

const addTask = function (name, description) {
    const tasks = loadAllTask();

    const duplicatedTasks = tasks.find(function (task) {
        return task.name === name
    })

    if(!duplicatedTasks){
        const newTask = {
            name,
            description,
            status: 'BACKLOG'
        }

        tasks.push(newTask)

        saveTask(tasks)
        console.log(chalk.green.bold('Tarefa Adicionada'));
    } else {
        console.log(chalk.red.bold("Essa tarefa já existe"));
    }


}

const readTask = function (name) {
    const tasks = loadAllTask();

    const findTask = tasks.find(function (task) {
        if(task.name === name){
            return task
        }
    })

    if(findTask != undefined){
        console.log(chalk.white.bold(findTask.name+" - "+findTask.description+" - "+findTask.status))
    } else {
        console.log(chalk.white.bold("Tarefa não encontrada"))
    }

}

const removeTask = function (name) {
    const tasks = loadAllTask();

    const findTask = tasks.find(function (task) {
        if(task.name === name){
            return task
        }
    })

    if(findTask != undefined){
        const result = tasks.filter(task => task.name != name);

        saveTask(result)
        console.log(chalk.red.bold('Tarefa Removida com Sucesso'));
    } else {
        console.log(chalk.red.bold("Tarefa não encontrada"))
    }

}

const listTasks = function () {
    const tasks = loadAllTask();
    if(tasks.length > 0){
        tasks.forEach(function (element, index, array) {
            console.log(chalk.yellow.bold(element.name+" - "+element.description+" - "+element.status));
        });
    } else {
        console.log(chalk.yellow.bold("Sem Tarefas cadastradas"));
    }
}

const saveTask = function (task) {
    const taskJSON = JSON.stringify(task)
    fs.writeFileSync('tarefas.json', taskJSON)
}

const clear = function () {
    fs.writeFileSync('tarefas.json', '')
    console.log(chalk.white.inverse("Tarefas apagadas com sucesso"))
}

const loadAllTask = function () {
    try {
        const tasksBuffer = fs.readFileSync('tarefas.json');
        return JSON.parse(tasksBuffer.toString())
    } catch (error) {
        return []
    }
}

const markTask = function (name) {
    const tasks = loadAllTask();

    const findTask = tasks.find(function (task) {
        if(task.name === name){
            return task
        }
    })

    if(findTask != undefined){

        if(findTask.status ===  'DONE'){
            console.log(chalk.yellow.inverse("Tarefa já concluida"))
        } else {
            tasks.find(function (task) {
                if(task.name === name){
                    task.status = 'DONE'
                }
            })

            saveTask(tasks);
            console.log(chalk.green.inverse("Tarefa concluida"))
        }

    } else {
        console.log(chalk.red.inverse("Tarefa não encontrada"))
    }
}

module.exports = {
    addTask,
    listTasks,
    readTask,
    removeTask,
    markTask,
    clear
}