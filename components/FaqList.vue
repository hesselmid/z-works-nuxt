<template>
  <dl
    class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12"
  >
    <div v-for="faq in faqs" :key="faq.question">
      <dt
        class="text-lg leading-6 font-medium text-gray-900"
        v-html="faq.question"
      ></dt>
      <dd class="mt-2 text-base text-gray-500" v-html="faq.answer"></dd>
    </div>
  </dl>
</template>

<script>
export default {
  props: ['faqs'],
};
</script>
