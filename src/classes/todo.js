export class Todo {

    constructor(text, completed = false) {
        this.text = text;
        this.completed = completed;
    }

    get completion() {
        return this.completed;
    }
}