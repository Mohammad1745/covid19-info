export default  {
  ADD_TODO(state: any, todo: {}): void {
    state.todos.push(todo)
  },
  TOGGLE_TODO(state: any, id: number): void {
    state.todos.map((todo: any) => {
      if (todo.id === id) {
        todo.done = !todo.done
      }
    })
  },
  DELETE_TODO(state: any, todo: {}): void {
    let index: number = state.todos.indexOf(todo)
  state.todos.splice(index, 1)
  },
}
