<template>
  <div class="relative overflow-hidden bg-white">
    <div class="mx-auto max-w-7xl">
      <div
        class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
      >
        <svg
          class="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <div class="relative px-4 pt-6 sm:px-6 lg:px-8">
          <nav
            class="relative flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div
              class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
            >
              <div class="flex items-center justify-between w-full md:w-auto">
                <a class="mx-auto" href="#">
                  <span class="sr-only">Z-Works</span>
                  <img
                    class="w-auto h-16"
                    src="~/assets/images/Logo-Z-works-ce7b1ec2c09b71ee7b014c59c8d34d14.png"
                    alt="Logo Z-Works"
                  />
                </a>
              </div>
            </div>
          </nav>
        </div>

        <main
          class="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        >
          <div class="sm:text-center lg:text-left">
            <h1
              class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
            >
              Professionele
              <span class="text-yellow-600">bedrijfsfilm</span> laten maken?
            </h1>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              Een bedrijfsvideo maakt impact. Op <strong>televisie</strong>,
              <strong>social media</strong> en je <strong>website</strong>.
              Eenmalige investering, eindeloos resultaat. Laat je bedrijf zien
              met een professionele bedrijfsfilm van Z-Works.
            </p>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="rounded-md shadow">
                <a
                  href="#prices"
                  class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-yellow-700 border border-transparent rounded-md hover:bg-yellow-600 md:py-4 md:text-lg md:px-10"
                  v-smooth-scroll="{ duration: 1000 }"
                >
                  Onze pakketten
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#contact-form"
                  class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-yellow-700 bg-yellow-200 border border-transparent rounded-md hover:bg-yellow-100 md:py-4 md:text-lg md:px-10"
                  v-smooth-scroll="{ duration: 1000 }"
                >
                  Direct contact
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <nuxt-img
        class="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="/marcos-rocha-_XgGN5yo1QE-unsplash-d18bd44552b956a6a3a7f6865399da0e.jpg"
        sizes="sm:640px md:768px lg:1024px xl:1280px"
        quality="70"
        alt="Opname bedrijfsvideo"
      />
    </div>
  </div>
</template>
