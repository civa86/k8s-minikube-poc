import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isFetching: false,
    error: null,
    items: []
  },
  getters: {
    isFetching: state => state.isFetching,
    hasError: state => state.error !== null,
    todos: state => state.items.filter(x => !x.done),
    doneTodos: state => state.items.filter(x => x.done)
  },
  mutations: {
    TODO_IS_FETCHING(state, value) {
      state.isFetching = value
      state.error = null
    },
    TODO_ERROR(state) {
      state.isFetching = false
      state.error = true
    },
    TODO_GET_LIST_SUCCESS(state, data) {
      state.isFetching = false
      state.error = null
      state.items = [...data]
    }
  },
  actions: {
    TODO_GET_LIST({ commit }) {
      commit('TODO_IS_FETCHING', true)
      axios
        .get('/api/todo')
        .then(res => {
          commit('TODO_GET_LIST_SUCCESS', res.data)
        })
        .catch(() => {
          commit('TODO_ERROR')
        })
    },
    TODO_ADD({ dispatch, commit }, newTodo) {
      return new Promise(resolve => {
        commit('TODO_IS_FETCHING', true)
        axios
          .post('/api/todo', { description: newTodo })
          .then(() => {
            dispatch('TODO_GET_LIST')
            resolve()
          })
          .catch(() => {
            commit('TODO_ERROR')
            resolve()
          })
      })
    }
  }
})
