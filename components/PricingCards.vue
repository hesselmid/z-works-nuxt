<template>
  <div
    class="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0"
  >
    <div
      class="flex flex-col rounded-lg shadow-lg overflow-hidden"
      v-for="price in prices"
      :key="price.price"
    >
      <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
        <div>
          <h3
            class="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-yellow-100 text-yellow-600"
            id="tier-standard"
          >
            {{ price.headline }}
          </h3>
        </div>
        <div class="mt-4 flex items-baseline text-6xl font-extrabold">
          € {{ price.price }}
          <span class="ml-1 text-2xl font-medium text-gray-500">
            Excl. BTW
          </span>
        </div>
        <p class="mt-5 text-lg text-gray-500">{{ price.subline }}.</p>
      </div>
      <div
        class="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6"
      >
        <ul class="space-y-4">
          <PricingFeatures
            v-for="feature in price.features"
            :key="feature"
            :feature="feature"
          />
        </ul>
        <div class="rounded-md shadow">
          <a
            href="#"
            class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
            aria-describedby="tier-standard"
          >
            Offerte aanvragen
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['prices'],
};
</script>
