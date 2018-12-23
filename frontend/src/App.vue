<template>

  <div id="app">
    <Loader v-if="isFetching" />
    <Error v-if="hasError" />
    <div v-if="!hasError"
         class="content">
      <div class="pure-g">
        <div class="pure-u-1-1">
          <h1>TODO List</h1>
        </div>
        <div class="pure-u-1-1">
          <div class="pure-g">
            <div class="pure-u-1-3"></div>
            <div class="pure-u-1-3">
              <form autocomplete="off"
                    novalidate
                    @submit.prevent="addTodo()">
                <input type="text"
                       placeholder="Add Todo"
                       v-model="newTodo" />
              </form>
            </div>
          </div>
        </div>
        <div class="pure-u-1-1">
          Completed ({{doneTodos.length}})
        </div>
        <div class="pure-u-1-1">
          <ul>
            <li v-for="todo in todos"
                :key="todo._id">
              {{todo._id}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// Components
import Loader from '@/components/Loader.vue'
import Error from '@/components/Error.vue'

export default {
  components: {
    Loader,
    Error
  },
  data() {
    return {
      newTodo: ''
    }
  },
  computed: {
    ...mapGetters(['isFetching', 'hasError', 'todos', 'doneTodos'])
  },
  methods: {
    addTodo() {
      if (this.newTodo) {
        this.$store.dispatch('TODO_ADD', this.newTodo).then(() => {
          this.newTodo = ''
        })
      }
    }
  },
  created() {
    this.$store.dispatch('TODO_GET_LIST')
  }
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
}
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  h1 {
    color: #61af83;
    margin: 0;
    padding: 50px 0 30px 0;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 18px;
    border-bottom: 1px solid #61af83;
    margin-bottom: 30px;
  }

  ul {
    list-style: none;
  }
}
</style>
