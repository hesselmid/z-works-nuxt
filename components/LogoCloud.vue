<template>
  <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
    <div
      class="col-span-1 flex justify-center py-8 px-8 bg-gray-50"
      v-for="logo in logos"
      :key="logo.alt"
    >
      <img class="max-h-12" :src="logo.imageUrl" :alt="logo.alt" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['logos'],
};
</script>
