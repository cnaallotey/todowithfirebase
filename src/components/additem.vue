<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-30 md:bg-opacity-50 transition-opacity"
        @click="$emit('toggleModal', false)"
        aria-hidden="true"
      ></div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"
        >&#8203;</span
      >

      <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
      <div
        class="inline-block align-middle bg-white z-20 text-left overflow-hidden shadow-xl transform transition-all sm:my-5 sm:align-middle max-w-sm"
      >
        <form class="form bg-white p-6 relative">
          <div
            class="icon bg-blue-600 text-white w-6 h-6 absolute flex items-center justify-center p-5"
            style="left: -40px"
          >
            <i class="fal fa-phone-volume fa-fw text-2xl transform -rotate-45"></i>
          </div>
          <h3 class="text-2xl text-gray-900 font-semibold text-center">Add Todo Item</h3>

          <input
            type="text"
            name="Todo item"
            id=""
            placeholder="Enter your Task"
            class="border p-2 w-full mt-3"
            @keyup="$emit('addtask', $event.target.value)"
          />
          <input
            type="text"
            name="Description"
            id=""
            placeholder="Description"
            class="border p-2 w-full mt-3"
            @keyup="$emit('addDescription', $event.target.value)"
          />

          <div class="mt-4">
            <p class="text-xs font-normal text-red-500" v-if="error">
              Please fill all spaces
            </p>
          </div>
          <!--<textarea name="" id="" cols="10" rows="3" placeholder="Tell us about desired property" class="border p-2 mt-3 w-full"></textarea>-->

          <input
            type="submit"
            value="Add"
            class="w-full bg-yellow-600 hover:bg-yellow-500 text-white font-medium p-3"
            @click.prevent="addTask()"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    addTask: {
      type: Function,
    },
    error: {
      type: Boolean,
    },
  },
  data() {
    return {};
  },
};
</script>
