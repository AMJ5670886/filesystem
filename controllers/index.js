const Task = require('../models/task');

exports.getIndex = (req,res,next) =>{
    Task.fetchAll((tasks)=>{
        if(tasks){
            res.render('index',{
                pageTitle: 'Task',
                tasks: tasks,
                editing: false
        })}
    })
};

exports.postAddTask = (req,res,next) => {
    const name = req.body.name;
    const task = new Task(name,null);
    task.save();
    res.redirect('/');
}

exports.getEditTask = (req,res,next) => {
    const id = req.params.taskId;
    const editMode = req.query.edit;
    if(editMode){
        Task.findById(id,result => {
            let task=result;
            Task.fetchAll((results)=>{
                let tasks= results;
                res.render('index',{
                    pageTitle: 'Task',
                    task: task[0],
                    tasks : tasks,
                    editing: editMode
                })
            })
        })
    }else{
        res.redirect('/');
    }
}

exports.postEditTask = (req,res,next) => {
    const name = req.body.name;
    const id = req.body.id;
    const task = new Task(name,id);
    task.save();
    res.redirect('/');
}

exports.getCancel = (req,res,next) => {
    res.redirect('/');
}

exports.postDeleteTask = (req,res,next) => {
    const id = req.body.id;
    Task.deleteById(id);
    res.redirect('/');
}