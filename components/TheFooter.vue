<template>
  <footer class="bg-white">
    <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="mt-8 md:mt-0">
        <p class="text-base text-center text-gray-400">
          &copy; {{ currentYear }} Z-Works. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>
