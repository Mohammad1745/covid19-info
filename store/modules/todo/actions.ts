export default {
    addTodo(context: any, text: string): void {
      let id: number = context.state.todos.length
        ? parseInt(context.state.todos[context.state.todos.length - 1].id) + 1
        : 0
      context.commit('ADD_TODO', {
        id,
        text,
        done: false
      })
    },
    toggleTodo(context: any, id: number): void {
      context.commit('TOGGLE_TODO', id)
    },
    deleteTodo(context: any, todo: {}): void {
      context.commit('DELETE_TODO', todo)
    }
  }
