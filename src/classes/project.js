export class Project {

    constructor(title, dueDate, description) {
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.todosArray = [];
    }

    addTodo(todo) {
        this.todosArray.push(todo);
    }

    deleteTodo(index) {
        this.todosArray.splice(index, 1);
    }
}