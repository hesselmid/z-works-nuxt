<template>
  <main class="flex flex-col items-center justify-center h-screen">
    <h1
      class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
    >
      Bedankt voor uw contactaanvraag!
    </h1>
    <h2
      class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
    >
      We nemen zo snel mogelijk contact met u op.
    </h2>
    <div class="w-64 mt-6 rounded-md shadow">
      <NuxtLink
        class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-yellow-600 border border-transparent rounded-md hover:bg-yellow-700 md:py-4 md:text-lg md:px-10"
        to="/"
        >Ga terug</NuxtLink
      >
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Bedankt voor uw contactaanvraag!',
    };
  },
};
</script>
