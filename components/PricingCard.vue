<template>
  <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
    <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
      <div class="flex justify-center">
        <h3
          class="inline-flex px-4 py-1 text-sm font-semibold tracking-wide text-yellow-700 uppercase bg-yellow-100 rounded-full"
        >
          {{ headline }}
        </h3>
      </div>
      <div class="mt-4 text-6xl font-extrabold text-center">
        {{ price }}
      </div>
      <p class="mt-5 text-lg text-center text-gray-500">{{ subline }}</p>
    </div>
    <div
      class="flex flex-col justify-between flex-1 px-6 pt-6 pb-8 space-y-6 bg-gray-50 sm:p-10 sm:pt-6"
    >
      <ul class="space-y-4">
        <PricingFeature
          v-for="feature in features"
          :key="feature"
          :feature="feature"
        />
      </ul>
      <div class="rounded-md shadow">
        <a
          href="#contact-form"
          class="flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-gray-800 border border-transparent rounded-md hover:bg-gray-900"
          aria-describedby="tier-standard"
          v-smooth-scroll="{ duration: 1000 }"
        >
          Meer informatie
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["headline", "price", "subline", "features"],
};
</script>
