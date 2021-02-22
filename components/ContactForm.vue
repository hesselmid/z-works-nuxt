<template>
  <div class="relative bg-white" id="contact-form">
    <div class="lg:absolute lg:inset-0">
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <nuxt-img
          class="object-cover w-full h-56 lg:absolute lg:h-full"
          src="/gordon-cowie-tyuVOf1G3d0-unsplash.jpg"
          sizes="sm:640px md:768px lg:1024px xl:1280px"
          quality="70"
          loading="lazy"
          alt="Opname bedrijfsvideo"
        />
      </div>
    </div>
    <div
      class="relative px-4 pt-12 pb-16 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2"
    >
      <div class="lg:pr-8">
        <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Laten we samenwerken
          </h2>
          <p class="mt-4 text-lg text-gray-500 sm:mt-3">
            Of je nu al een helder idee voor je bedrijfsvideo hebt, wilt
            brainstormen over de perfecte bedrijfsvideo voor jou of zoekt naar
            manieren om met video betere resultaten met jouw bedrijf te halen,
            wij helpen je. Maar laten we beginnen met een kop koffie, eventueel
            op afstand.
          </p>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            action="/bedankt"
            class="grid grid-cols-1 mt-9 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label
                for="voornaam"
                class="block text-sm font-medium text-gray-700"
                >Voornaam</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="voornaam"
                  id="voornaam"
                  required
                  class="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
            </div>
            <div>
              <label
                for="achternaam"
                class="block text-sm font-medium text-gray-700"
                >Achternaam</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="achternaam"
                  id="achternaam"
                  required
                  class="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-medium text-gray-700"
                >E-mail</label
              >
              <div class="mt-1">
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  class="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="bedrijf"
                class="block text-sm font-medium text-gray-700"
                >Bedrijf</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="bedrijf"
                  id="bedrijf"
                  required
                  class="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="flex justify-between">
                <label
                  for="telefoon"
                  class="block text-sm font-medium text-gray-700"
                  >Telefoonnummer</label
                >
              </div>
              <div class="mt-1">
                <input
                  type="text"
                  name="telefoon"
                  id="telefoon"
                  required
                  aria-describedby="phone_description"
                  class="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="flex justify-between">
                <label
                  for="how_can_we_help"
                  class="block text-sm font-medium text-gray-700"
                  >Hoe kunnen we helpen?</label
                >
                <span
                  id="how_can_we_help_description"
                  class="text-sm text-gray-500"
                  >Optioneel</span
                >
              </div>
              <div class="mt-1">
                <textarea
                  id="how_can_we_help"
                  name="how_can_we_help"
                  aria-describedby="how_can_we_help_description"
                  rows="4"
                  class="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-yellow-500 focus:border-yellow-500"
                ></textarea>
              </div>
            </div>
            <div class="mt-6 text-right sm:col-span-2">
              <button
                type="submit"
                class="inline-flex justify-center w-full px-8 py-3 text-base font-medium text-white bg-yellow-700 border border-transparent rounded-md shadow-sm md:py-4 md:px-10 hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Neem contact op
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
