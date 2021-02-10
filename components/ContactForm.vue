<template>
  <div class="relative bg-white">
    <div class="lg:absolute lg:inset-0">
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="object-cover w-full h-56 lg:absolute lg:h-full"
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixqx=yl8Wv1BxXp&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
          alt=""
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
            action="#"
            method="POST"
            class="grid grid-cols-1 mt-9 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div>
              <label
                for="first_name"
                class="block text-sm font-medium text-gray-700"
                >Voornaam</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autocomplete="given-name"
                  class="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
            </div>
            <div>
              <label
                for="last_name"
                class="block text-sm font-medium text-gray-700"
                >Achternaam</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  autocomplete="family-name"
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
                  type="email"
                  autocomplete="email"
                  class="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="company"
                class="block text-sm font-medium text-gray-700"
                >Bedrijf</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autocomplete="organization"
                  class="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="flex justify-between">
                <label
                  for="phone"
                  class="block text-sm font-medium text-gray-700"
                  >Telefoonnummer</label
                >
              </div>
              <div class="mt-1">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autocomplete="tel"
                  aria-describedby="phone_description"
                  class="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
            </div>
            <fieldset class="sm:col-span-2">
              <legend class="block text-sm font-medium text-gray-700">
                Pakket interesse
              </legend>
              <div class="grid grid-cols-1 mt-4 gap-y-4">
                <div class="flex items-center">
                  <input
                    id="price-one"
                    name="budget"
                    value="3750"
                    type="radio"
                    class="w-4 h-4 text-yellow-600 border-gray-300 focus:ring-yellow-500"
                  />
                  <label for="price-one" class="ml-3">
                    <span class="block text-sm text-gray-700">€ 3.750</span>
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    id="price-two"
                    name="budget"
                    value="4950"
                    type="radio"
                    class="w-4 h-4 text-yellow-600 border-gray-300 focus:ring-yellow-500"
                  />
                  <label for="price-two" class="ml-3">
                    <span class="block text-sm text-gray-700">€ 4.950</span>
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    id="price-three"
                    name="budget"
                    value="50k-100k"
                    type="radio"
                    class="w-4 h-4 text-yellow-600 border-gray-300 focus:ring-yellow-500"
                  />
                  <label for="price-three" class="ml-3">
                    <span class="block text-sm text-gray-700"
                      >Weet ik nog niet</span
                    >
                  </label>
                </div>
              </div>
            </fieldset>
            <div class="text-right sm:col-span-2">
              <button
                type="submit"
                class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-yellow-600 border border-transparent rounded-md shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Verstuur
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
