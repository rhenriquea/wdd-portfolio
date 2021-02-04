<template>
  <div>
    <h2>TODOS</h2>

    <ul>
      <li v-for="todo in todos" :key="todo.id" :class="{ completed: todo.completed }">
        <input type="checkbox" :checked="todo.completed" />
        <h4>{{ todo.content }}</h4>
        <small>{{ todo.id }}</small>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    todos: [
      { id: new Date(), content: 'Some dummy content', completed: false },
      { id: new Date(), content: 'Another dummy content', completed: true },
    ],
  }),
};
</script>
