const { createApp } = Vue;

const app = createApp({
  data: () => ({
    list: []
}),
  created() {
    axios.get("http://localhost/php-todo-list-json/frontend/json/todo.json").then(response => {
        this.list = response.data
    })
  },
});


app.mount("#app");
