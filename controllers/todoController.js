const TodoTask=require('../models/TodoTask');
exports.todolist=function(req, res)  {
    TodoTask.find({}, (err, tasks) => {
    res.render("todo.ejs", { todoTasks: tasks });    });
}
exports.storeTodo=async function (req, res) {
    const todoTask = new TodoTask({
    content: req.body.content
    });
    try {
    todoTask.save();
    res.redirect("/");
    } catch (err) {
    res.redirect("/");
    }
}
