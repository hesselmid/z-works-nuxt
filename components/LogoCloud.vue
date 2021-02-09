<template>
  <div class="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
    <img class="max-h-12" :src="logo.imageUrl" :alt="logo.alt" />
  </div>
</template>

<script>
export default {
  props: ['logo'],
};
</script>
