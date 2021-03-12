<template>
  <footer class="bg-gray-800" aria-labelledby="footerHeading">
    <h2 id="footerHeading" class="sr-only">Footer</h2>
    <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
      <div class="grid grid-cols-2 gap-8 xl:col-span-2">
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3
              class="text-sm font-semibold tracking-wider text-gray-400 uppercase"
            >
              Contact
            </h3>
            <ul class="mt-4 space-y-4">
              <li class="text-base text-gray-300">
                Coolsingel 6
              </li>
              <li class="text-base text-gray-300">
                3011 AD Rotterdam
              </li>
              <li class="text-base text-gray-300">
                <a
                  href="tel:0854862700"
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                  title="Telefoonnummer"
                  class="text-base text-gray-300 hover:text-white"
                >
                  085 – 486 2700
                </a>
              </li>
              <li>
                <a
                  href="mailto:bedrijfsvideo@z-works.nl"
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                  title="Mailadres"
                  class="text-base text-gray-300 hover:text-white"
                >
                  bedrijfsvideo@z-works.nl
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-12 md:mt-0">
            <h3
              class="text-sm font-semibold tracking-wider text-gray-400 uppercase"
            >
              Privacy
            </h3>
            <ul class="mt-4 space-y-4">
              <li>
                <a
                  href="https://www.z-works.nl/wp-content/uploads/2021/02/Algemene-Voorwaarden-16-2-21.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="Algemene voorwaarden"
                  class="text-base text-gray-300 hover:text-white"
                >
                  Algemene voorwaarden
                </a>
              </li>

              <li>
                <a
                  href="https://www.z-works.nl/wp-content/uploads/2021/02/Privacyverklaring-Z-Works-B.V..pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  title="Privacyverklaring"
                  class="text-base text-gray-300 hover:text-white"
                >
                  Privacyverklaring
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3
              class="text-sm font-semibold tracking-wider text-gray-400 uppercase"
            >
              KVK
            </h3>
            <ul class="mt-4 space-y-4">
              <li class="text-base text-gray-300">
                70100039
              </li>
            </ul>
          </div>
          <div class="mt-12 md:mt-0">
            <h3
              class="text-sm font-semibold tracking-wider text-gray-400 uppercase"
            >
              BTW
            </h3>
            <ul class="mt-4 space-y-4">
              <li class="text-base text-gray-300">
                NL858141292B01
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="pt-8 mt-8 border-t border-gray-700">
        <p class="mt-8 text-base text-gray-400 md:mt-0">
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
