import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isFetching: false,
    error: null,
    showCompleted: true,
    items: []
  },
  getters: {
    isFetching: state => state.isFetching,
    hasError: state => state.error !== null,
    showCompleted: state => state.showCompleted,
    todos: state => (state.showCompleted ? state.items : state.items.filter(x => !x.done)),
    doneCnt: state => state.items.filter(x => x.done).length,
    itemsCnt: state => state.items.length
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
    },
    TODO_SET_SHOW_COMPLETED(state, value) {
      state.showCompleted = value
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
    },
    TODO_UPDATE({ dispatch, commit }, params) {
      commit('TODO_IS_FETCHING', true)
      axios
        .put('/api/todo/' + params.id, { done: params.done })
        .then(() => {
          dispatch('TODO_GET_LIST')
        })
        .catch(() => {
          commit('TODO_ERROR')
        })
    },
    TODO_DELETE({ dispatch, commit }, id) {
      commit('TODO_IS_FETCHING', true)
      axios
        .delete('/api/todo/' + id)
        .then(() => {
          dispatch('TODO_GET_LIST')
        })
        .catch(() => {
          commit('TODO_ERROR')
        })
    },
    TODO_SET_SHOW_COMPLETED({ commit }, value) {
      commit('TODO_SET_SHOW_COMPLETED', value)
    }
  }
})
