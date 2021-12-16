<template>
  <div class="max-w-screen-lg mx-auto h-full px-10 md:px-5 xl:px-0">
    <h1 class="text-center text-5xl font-bold tracking-tight text-yellow-500 mt-20">
      To do Application
    </h1>
    <p class="text-center text-md mt-3">Using Vue.js and Firebase</p>
    <div
      class="mt-10 flex flex-col md:flex-row justify-between space-x-0 md:space-x-5 space-y-3 md:space-y-0"
    >
      <div
        class="bg-white px-2 py-2 flex flex-1 items-center justify-between text-gray-500 border border-gray-300 rounded-md"
      >
        <input
          type="text"
          placeholder="Search Todo"
          name="Todo"
          class="font-normal tracking-normal w-full focus:ring-0 focus:outline-none focus:bg-inherit"
        /><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <button
        class="flex items-center bg-yellow-500 px-6 py-2 text-base font-medium text-white rounded-md hover:bg-yellow-600 hover:shadow-md"
        @click.prevent="showModal()"
      >
        Add Todo Item
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
            /></svg
        ></span>
      </button>
    </div>
    <div>
      <div class="flex flex-wrap -mx-5 overflow-hidden">
        <div
          class="my-5 px-5 w-full overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3"
          v-for="todo in todos"
          :key="todo.key"
        >
          <!-- Column Content -->
          <div
            class="px-3 py-3 space-y-2 border border-gray-300 group rounded-md hover:shadow-lg hover:bg-yellow-500 hover:border-0 transition ease-out"
            :class="[todo.completed ? 'opacity-50' : 'opacity-100' ]"
          >
            <h2
              class="font-medium text-xl tracking-normal text-gray-900 group-hover:text-white"
            >
              {{ todo.title }}
            </h2>
            <p class="font-medium text-gray-500 tracking-normal group-hover:text-white">
              {{ todo.description }}
            </p>
            <div class="w-full flex justify-end items-center space-x-3 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 bg-white p-2 rounded-full hover:text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                @click="completedTask(todo)"
              >
                <path
                  d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                />
                <path
                  fill-rule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 bg-white p-2 rounded-full hover:text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                @click.prevent="deleteTask(todo)"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Additem
      v-if="showModals"
      @addtask="additem"
      @addDescription="addDescription"
      @toggleModal="toggleModal"
      :addTask="addTask"
      :error="error"
    />
  </div>
</template>

<script>
import { db } from "../data.js";
import Additem from "./additem.vue";

export default {
  components: { Additem },

  data() {
    return {
      showModals: false,
      error: false,
      todos: [],
      id: "",
      title: "",
      description: "",
      completed: false,
    };
  },
  methods: {
    showModal: function () {
      this.id = this.title = this.description = "";
      this.showModals = true;
    },
    additem: function (event) {
      console.log(event);
      this.title = event;
    },
    addDescription: function (event) {
      console.log(event);
      this.description = event;
    },
    toggleModal: function (event) {
      this.showModals = event;
    },
    addTask: function () {
      db.collection("todos")
        .add({
          title: this.title,
          Description: this.description,
          Completed: this.completed,
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          this.showModals = false;
         // location.reload();
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    },
    deleteTask: function (todo) {
      db.collection("todos")
        .doc(todo.key)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          //this.todos.splice(0, this.todos.length);
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    completedTask: function (todo){
      db.collection('todos').doc(todo.key).set({
        title:todo.title,
        Description:todo.description,
        Completed: !todo.completed
      })
    }

  },
  created() {
    db.collection("todos")
      .orderBy("title")
      .onSnapshot((querySnapshot) => {
        this.todos.splice(0, this.todos.length)
        querySnapshot.forEach((doc) => {
          this.todos.push({
            key: doc.id,
            title: doc.data().title,
            description: doc.data().Description,
            completed: doc.data().Completed,
          });
        });
      });
  },
  updated() {
    // db.collection("todos").doc()
    // .onSnapshot((doc) => {
    //     console.log("Current data: ", doc.data());
    // });
  },
};
</script>
