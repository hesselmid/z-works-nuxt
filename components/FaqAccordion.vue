<template>
  <div class="bg-white">
    <div class="px-4 py-12 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8 lg:py-32">
      <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2
          class="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl"
        >
          Frequently asked questions
        </h2>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200">
          <div class="pt-6" v-for="(faq, faqIndex) in faqs" :key="faq.question">
            <dt class="text-lg">
              <button
                class="flex items-start justify-between w-full text-left text-gray-400"
                @click="showFaq(faqIndex)"
              >
                <span class="font-medium text-gray-900" v-html="faq.question">
                </span>
                <span class="flex items-center ml-6 h-7">
                  <svg
                    class="w-6 h-6 transform"
                    :class="{
                      'rotate-0': visibleFaqIndex !== faqIndex,
                      '-rotate-180': visibleFaqIndex === faqIndex,
                    }"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
            </dt>
            <dd
              class="pr-12 mt-2 transition-opacity duration-1000 ease-in-out"
              :class="{ 'hidden opacity-0': visibleFaqIndex !== faqIndex }"
            >
              <p class="text-base text-gray-500" v-html="faq.answer"></p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["faqs"],
  data() {
    return {
      visibleFaqIndex: undefined,
    };
  },
  methods: {
    showFaq(faqIndex) {
      if (this.visibleFaqIndex === faqIndex) {
        this.visibleFaqIndex = undefined;
      } else {
        this.visibleFaqIndex = faqIndex;
      }
    },
  },
};
</script>
