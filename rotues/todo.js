const express=require('express');
const TodoTask=require('../models/TodoTask');
const router=express.Router();
const todoController=require('../controllers/todoController');
router.get('/',todoController.todolist);

router.post('/',todoController.storeTodo);
router.route("/edit/:id").get((req, res) => {
    const id = req.params.id;
    TodoTask.find({}, (err, tasks) => {
    res.render("todoEdit.ejs", { todoTasks: tasks, idTask: id });
   });
 })
 .post((req, res) => {
  const id = req.params.id;
  TodoTask.findByIdAndUpdate(id, { content: req.body.content }, err => {
  if (err) return res.send(500, err);
  res.redirect("/");
  });
 });
 router.route("/remove/:id").get((req, res) => {
    const id = req.params.id;
    TodoTask.findByIdAndRemove(id, err => {
    if (err) return res.send(500, err);
    res.redirect("/");
    });
})
module.exports=router