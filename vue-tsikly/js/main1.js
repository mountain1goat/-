const App = {
    data() {
        return {
            array: [
                {
                    title: 'First elem',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
                },
                {
                    title: 'Second elem',
                    content: 'Nisi deleniti illo atque beatae placeat amet aperiam dolore necessitatibus iusto doloribus.'
                }, {
                    title: 'Third elem',
                    content: ' Reiciendis voluptates excepturi consequatur consectetur veritatis, minus itaque earum pariatur.'
                }
            ],
            todos: ['совершить подвиг'],
            currentTodo: '',
            currentItem: {},
        }
    },
    methods: {
        addTodoItem() {
            let temp = this.currentTodo.trim()
            if (temp.length > 0) this.todos.push(this.currentTodo)
            this.currentTodo = '';

        },
        showCard(index) {
            this.currentItem = this.array[index]
        }
    }
}

Vue.createApp(App).mount('#app')