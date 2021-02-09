<template>
  <div>
    <main>
      <h2>Todos</h2>
      <p v-if="todos.length === 0">You have nothing ToDo 😎</p>
      <ol id="todoList">
        <li v-for="(todo, index) in todos" :key="index">
          <div>
            <input
              class="mt checkbox"
              type="checkbox"
              :checked="todo.completed"
              :id="todo.id"
              @change="completeTask(todo)"
            />
            <label :for="todo.id"></label>
            <p :class="{ completed: todo.completed }">
              {{ todo.content }}
              <small>
                <time>{{ formatDate(todo.id) }}</time>
              </small>
            </p>
          </div>

          <button class="deleteBtn" @click="removeTask(todo)">X</button>
        </li>
      </ol>

      <div class="form-control">
        <input v-model="task" @keydown.enter="addTask" type="text" aria-label="newTodo" />
        <button @click="addTask" :disabled="task === ''">+</button>
      </div>

      <div class="action-buttons">
        <small>{{ todosCount }}</small>
        <div>
          <button @click="filterAllTasks">All</button>
          <button @click="filterCompletedTasks">Completed</button>
          <button @click="filterActiveTasks">Active</button>
        </div>
      </div>
    </main>

    <footer>
      <p>
        Check out the code on
        <a href="https://repl.it/@RafaelAlmeida14/todo-assignment">Repl.it</a>*
      </p>
      <small
        >* This is a Nuxt.js version. The Repl.it is a Vanilla JS version implemented using MVC
        pattern.</small
      >
    </footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    todos: [],
    task: '',
  }),

  mounted() {
    this.todos = this.storedTodos;
  },

  methods: {
    addTask() {
      const todo = { id: new Date(), content: this.task, completed: false };
      this.todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(this.todos));
      this.task = '';
    },

    completeTask(completedTodo) {
      const { id } = completedTodo;
      const todo = this.todos.find(task => task.id === id);
      todo.completed = !todo.completed;
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },

    removeTask(selectedTodo) {
      console.log(selectedTodo);
      const updatedList = this.todos.filter(task => task.id !== selectedTodo.id);
      this.todos = updatedList;
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },

    filterAllTasks() {
      this.todos = this.storedTodos;
    },

    filterCompletedTasks() {
      this.todos = this.storedTodos.filter(task => task.completed);
    },

    filterActiveTasks() {
      this.todos = this.storedTodos.filter(task => !task.completed);
    },

    formatDate(date) {
      const dateObj = new Date(date);
      return `Added in ${dateObj.getFullYear()}-${this.addZero(dateObj.getDate())}-${this.addZero(
        dateObj.getDay()
      )}`;
    },

    addZero(date) {
      return date < 10 ? `0${date}` : date;
    },
  },

  computed: {
    storedTodos() {
      return JSON.parse(localStorage.getItem('todos')) || [];
    },
    todosCount() {
      if (this.todos.length > 0) {
        return this.todos.length > 1 ? `${this.todos.length} Tasks (Total)` : '1 Task (Total)';
      }
      return '0 Tasks (Total)';
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  border-bottom: 2px solid #d3d3d3;
  font-weight: 500;
  padding-bottom: 5px;
}

/**
 * Checkbox Four
 */
input[type='checkbox'] {
  background: #ddd;
  border-radius: 100%;
  height: 25px;
  margin-right: 15px;
  position: relative;
  width: 25px;
}

button {
  border: 0;
  cursor: pointer;
  outline: none;
}

input[type='text'] {
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  border-right: 0;
  font-size: 1.2em;
  line-height: 1.2em;
  padding: 5px;
}

ol {
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  box-shadow: 1px 1px 1px #d3d3d3;
  list-style: none;
  margin: 0;
  margin-bottom: 15px;
  padding: 0;
}

ol li {
  align-items: center;
  border-bottom: 1px solid #d3d3d3;
  display: flex;
  justify-content: space-between;
  padding: 15px;
}

ol li div {
  display: flex;
}

ol li:last-child {
  border-bottom: 0;
}

ol li div p {
  display: flex;
  flex-direction: column;
}

ol li button {
  background-color: #f22;
  border: 0;
  border-radius: 100%;
  color: #fff;
  font-size: 10px;
}

p.completed,
time.completed {
  text-decoration: line-through;
}

.form-control {
  margin-bottom: 15px;
  text-align: center;
}

.form-control button {
  background-color: #27b7d3;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  color: #fff;
  font-size: 1.3em;
  margin-left: -5px;
  padding: 5px 20px;
}

.form-control button:disabled {
  background-color: #d3d3d3;
  opacity: 0.8;
}

.action-buttons {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}

.action-buttons button {
  background-color: rgb(25, 150, 129);
  border-radius: 5px;
  color: #fff;
  margin-left: 10px;
  padding: 10px;
  width: 100px;
}

footer {
  align-items: center;
  display: flex;
  flex-direction: column;
}
</style>
