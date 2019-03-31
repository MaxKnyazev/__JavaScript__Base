const tasksModule = (function() {

    let tasks = [];
    let instance;

    const getTasks = function() {
        return tasks;
    };

    setTasks = function (array) {
        tasks = array;
        return tasks;
    };

    const addTask = function (task) {

    };

    const removeTask = function (id) {

    };

    const createInstance = function () {
        return {
            getTasks,
            setTasks,
            addTask,
            removeTask
        }
    };

    return {
        getInstance : function () {
            return instance || (instance = createInstance())
        }
    }

}());

//Init tasksModule module in app.js

//const tasks = tasksModule.getInstance();