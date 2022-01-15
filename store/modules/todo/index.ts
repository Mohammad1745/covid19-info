import actions from './actions'
import mutations from "./mutations";

export default {
  state: () => ({
    todos: []
  }),
  getters: {
    allTodos: (state: any) => state.todos,
    todoCount: (state: any) => state.todos.length,
    doneCount: (state: any) => {
      let count = 0;
      for(let todo of state.todos) {
        if (todo.done) count++;
      }
      return count;
    }
  },
  actions: {...actions},
  mutations: {...mutations}
}
