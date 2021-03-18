<template>
  <form
    class="fixed bottom-0 right-0 z-50 p-4 mb-4 mr-4 bg-white rounded-lg shadow-2xl w-80 md:w-96"
    name="callmeback"
    method="POST"
    data-netlify="true"
    action="/bedankt"
  >
    <input type="hidden" name="form-name" value="callmeback" />
    <div>
      <div class="flex justify-between">
        <h3 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Bel mij terug
        </h3>
        <button @click="closePopUp">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <input
        class="block w-full mt-4 border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
        type="text"
        name="telefoonnummer"
        id="telefoonnummer"
        placeholder="085 – 486 2700"
        required
      />
      <button
        class="flex items-center justify-center w-full px-8 py-3 mt-4 text-base font-medium text-white bg-yellow-700 border border-transparent rounded-md hover:bg-yellow-600 md:py-4 md:text-lg md:px-10"
        type="submit"
      >
        Verzend
      </button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["close-modal"],
  methods: {
    closePopUp() {
      this.$emit("close-modal");
    },
  },
};
</script>
