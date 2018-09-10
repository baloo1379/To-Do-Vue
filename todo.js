class Todo {
  constructor(id, title, completed){
		this.title = title;
    this.id = id;
    this.completed = completed;
  }
}

let app = new Vue({
	el: "#app",
	data : {
		newtodo: '',
		todos: [new Todo(0, "Default done task", true)],
		helper: false
	},
	methods: {
		add: function() {
			if(this.newtodo != '') this.todos.push(new Todo(this.todos.length, this.newtodo, false));
			this.newtodo = '';
		},
		remove: function(todo) {
			this.todos.splice(this.todos.indexOf(todo), 1);
		},
		toggleView() {
			if(this.helper) this.helper = false;
			else this.helper = true;
		}
	}
});