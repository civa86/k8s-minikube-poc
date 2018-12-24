<template>

  <div id="app">
    <Loader v-if="isFetching" />
    <Error v-if="hasError" />
    <div v-if="!hasError"
         class="content">
      <div class="pure-g">
        <!-- TITLE -->
        <div class="pure-u-1-1">
          <h1>TODO List</h1>
        </div>
        <div class="pure-u-1-1">
          <div class="pure-g">
            <div class="pure-u-6-24"></div>
            <div class="pure-u-12-24">
              <div class="pure-g">
                <!-- FORM -->
                <div class="pure-u-1-1">
                  <form autocomplete="off"
                        novalidate
                        @submit.prevent="addTodo()">
                    <input type="text"
                           placeholder="Add Todo"
                           v-model="newTodo" />
                  </form>
                </div>
                <!-- COMPLETED show | hide   -->
                <div class="pure-u-1-1"
                     v-if="doneCnt > 0">
                  Completed ({{doneCnt}})
                  <button @click="setShowCompleted()"
                          class="show-completed-switch">
                    <span v-if="!showCompleted">show</span>
                    <span v-if="showCompleted">hide</span>
                  </button>
                </div>
              </div>
              <!-- LIST -->
              <div class="pure-u-1-1"
                   v-if="todos.length > 0">
                <ul>
                  <li v-for="todo in todos"
                      :key="todo._id"
                      @click="setTodoDone(todo._id, !todo.done)">
                    <div class="pure-g">
                      <div class="pure-u-2-24">
                        <CircleCheck :checked="todo.done" />
                      </div>
                      <div class="pure-u-18-24 text-left">
                        <div class="todo-description"
                             :class="{'done': todo.done}">
                          {{todo.description}}
                        </div>
                      </div>
                      <div class="pure-u-4-24 text-left">
                        <button @click.stop="deleteTodo(todo._id)"
                                class="delete-todo">
                          delete
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <!-- NO ITEMS -->
              <div class="pure-u-1-1"
                   v-if="itemsCnt === 0">
                <div class="no-items">
                  Start filling your todo list!
                </div>
              </div>
            </div>
          </div>
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
import CircleCheck from '@/components/CircleCheck.vue'

export default {
  components: {
    Loader,
    Error,
    CircleCheck
  },
  data() {
    return {
      newTodo: ''
    }
  },
  computed: {
    ...mapGetters(['isFetching', 'hasError', 'showCompleted', 'todos', 'doneCnt', 'itemsCnt'])
  },
  methods: {
    addTodo() {
      if (this.newTodo) {
        this.$store.dispatch('TODO_ADD', this.newTodo).then(() => {
          this.newTodo = ''
        })
      }
    },
    setTodoDone(id, done) {
      this.$store.dispatch('TODO_UPDATE', { id, done })
    },
    deleteTodo(id) {
      this.$store.dispatch('TODO_DELETE', id)
    },
    setShowCompleted() {
      this.$store.dispatch('TODO_SET_SHOW_COMPLETED', !this.showCompleted)
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

.text-center {
  text-align: center !important;
}
.text-left {
  text-align: left !important;
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

  .show-completed-switch {
    border: none;
    outline: none;
    background: none;
    color: #61af83;
    font-size: 14px;
    min-width: 50px;
    &:hover {
      text-decoration: underline;
    }
  }

  .delete-todo {
    width: 100%;
    padding-top: 8px;
    border: none;
    outline: none;
    background: none;
    color: rgb(202, 60, 60);
    font-size: 14px;
    text-align: right;
    &:hover {
      text-decoration: underline;
    }
  }

  .no-items {
    padding-top: 30px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    padding-top: 30px;

    li {
      max-width: 100%;
      position: relative;
      padding: 0 0 6px 0;
      margin-bottom: 5px;
      cursor: pointer;
      border-bottom: 1px solid #ccc;

      .todo-description {
        line-height: 20px;
        padding-top: 6px;
        box-sizing: border-box;
        width: 100%;
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: break-all;
        word-wrap: break-word;

        &.done {
          text-decoration: line-through;
        }
      }
    }
  }
}
</style>
