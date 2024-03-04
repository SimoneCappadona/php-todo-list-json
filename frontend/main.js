const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      todo: [],
      newItemTodo: {
        text: "",
        done: false
    }
};
  },
  methods: {
    addItem() {
      const todol = this.newItemTodo.text;
      this.newItemTodo.text = '';

      const data = { todo: todol };

      const params = {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
      fetchList() 
      axios.get('../backend/data.php').then((response) => {
        this.todo = response.data;
      });  
      axios.post("../backend/todo.php", data, params).then((response) => {
        this.todo = response.data;
        
      });
      
    },
    
  },
  mounted() {
  this.fetchList();
},
});

app.mount("#app");
