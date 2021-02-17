<template>
  <main>
    <Hero />

    <div class="bg-white">
      <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <p
          class="text-base font-semibold tracking-wider text-center text-gray-600 uppercase"
        >
          Meer dan 6.500 tevreden klanten en geproduceerde video’s
        </p>
        <!-- <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <CloudLogo v-for="logo in logos" :key="logo.alt" v-bind="logo" />
        </div> -->
        <div class="grid gap-8 mt-6 md:grid-cols-2 lg:mt-8">
          <div>
            <div style="padding:56.25% 0 0 0;position:relative;">
              <iframe
                src="https://player.vimeo.com/video/506079196?title=0&byline=0&portrait=0"
                style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:15px;"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
          <div>
            <div style="padding:56.25% 0 0 0;position:relative;">
              <iframe
                src="https://player.vimeo.com/video/506079293?title=0&byline=0&portrait=0"
                style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:15px;"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
          <div>
            <div style="padding:56.25% 0 0 0;position:relative;">
              <iframe
                src="https://player.vimeo.com/video/511581071?title=0&byline=0&portrait=0"
                style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:15px;"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
          <div>
            <div style="padding:56.25% 0 0 0;position:relative;">
              <iframe
                src="https://player.vimeo.com/video/506079156?title=0&byline=0&portrait=0"
                style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:15px;"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white">
      <div class="px-4 mx-auto mt-8 text-center max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto space-y-2 lg:max-w-none">
          <h2
            class="text-3xl font-extrabold tracking-tight text-yellow-500 sm:text-4xl"
          >
            Prijzen
          </h2>
          <p class="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Het beste van het beste, voor de allerlaagste prijs
          </p>
          <p class="text-xl text-gray-500">
            Ieder bedrijf is anders, dus iedere bedrijfsvideo ook. Kies daarom
            het pakket dat bij jouw bedrijf past.
          </p>
        </div>
      </div>
      <div class="pb-12 mt-8 bg-white sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div class="relative">
          <div class="absolute inset-0 bg-white h-3/4"></div>
          <div class="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div
              class="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0"
            >
              <PricingCard
                v-for="price in prices"
                :key="price.price"
                v-bind="price"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <Content />

    <div class="bg-white">
      <div class="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Veelgestelde vragen
        </h2>
        <div class="mt-12">
          <FaqList :faqs="faqs" />
        </div>
      </div>
    </div>

    <ContactForm />
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Professionele bedrijfsfilm laten maken?',
    };
  },
  data() {
    return {
      logos: [],
      prices: [],
      faqs: [],
    };
  },
  fetch() {
    this.logos = [
      {
        imageUrl:
          'https://tailwindui.com/img/logos/transistor-logo-gray-400.svg',
        alt: 'Workcation',
      },
      {
        imageUrl: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg',
        alt: 'Mirage',
      },
      {
        imageUrl: 'https://tailwindui.com/img/logos/tuple-logo-gray-400.svg',
        alt: 'Tuple',
      },
      {
        imageUrl: 'https://tailwindui.com/img/logos/laravel-logo-gray-400.svg',
        alt: 'Laravel',
      },
      {
        imageUrl:
          'https://tailwindui.com/img/logos/statickit-logo-gray-400.svg',
        alt: 'StaticKit',
      },
      {
        imageUrl: 'https://tailwindui.com/img/logos/statamic-logo-gray-400.svg',
        alt: 'Statamic',
      },
    ];

    this.prices = [
      {
        headline: 'Bedrijfsvideo 2-4 min',
        price: '3.750',
        subline: 'Professionele bedrijfsfilm DCP 2 tot 4 minuten.',
        features: [
          'Opnamedag incl. camera en geluid (10 uur)',
          'Maximaal 2 locaties',
          'Regisseur',
          'Redacteur',
          'Editing en vormgeving',
          'Audio-nabewerking',
          'Stockmuziek',
        ],
      },
      {
        headline: 'Bedrijfsvideo 4-6 min',
        price: '4.950',
        subline: 'Professionele bedrijfsfilm DCP 4 tot 6 minuten.',
        features: [
          '2 opnamedagen incl. camera en geluid (10 uur)',
          'Maximaal 4 locaties',
          '2 dagen regisseur',
          '1,5 dag redacteur',
          'Editing en vormgeving',
          'Audio-nabewerking',
          'Stockmuziek',
        ],
      },
    ];

    this.faqs = [
      {
        question:
          'Wat is de toegevoegde waarde van een professionele bedrijfsvideo?',
        answer:
          'Een goede bedrijfsvideo verhoogt de resultaten van jouw onderneming. Video’s op social media realiseren <strong>1200% meer deelacties</strong> dan een combinatie van tekst en afbeeldingen, <strong>26%</strong> van kijkers zoekt meer informatie na het zien van een bedrijfsvideo en de koopkans van klanten is <strong>1.8</strong> keer groter na het zien van een video. Kortom: een bedrijfsvideo laten maken is altijd een goed idee.',
      },
      {
        question: 'Wat is mijn rol als ondernemer tijdens het creatieproces?',
        answer:
          'Voordat we starten met opnemen, kijken we samen welke vorm van video het beste bij jouw bedrijf past. <strong>Ieder bedrijf is uniek en wij geloven dat iedere video dat ook moet zijn</strong>. We koppelen jouw doelstellingen, wensen en behoeften aan onze kennis van video, om zo samen tot het allerbeste resultaat te komen.',
      },
      {
        question:
          'Is het mogelijk mijn bedrijfsvideo op televisie uit te zenden?',
        answer:
          'Het is zeker mogelijk om <strong>op televisie</strong> te komen<strong>met jouw bedrijf</strong>. Samen met onze partners, creëren wij televisiecontent voor o.a. De Barometer, Op de Zaak en How it’s Done. Onze video’s worden uitgezonden op <strong>RTL Z</strong>, <strong>RTL 4</strong>, <strong>SBS6</strong> en <strong>RTL 7</strong>. Neem contact met ons op voor meer informatie over de mogelijkheden voor jouw bedrijf.',
      },
      {
        question: 'Hoe haal ik het maximale uit mijn bedrijfsvideo?',
        answer:
          'Om jouw video extra schwung te geven, zijn er een aantal optionele toevoegingen die wij aanbieden. Zo is het mogelijk drone-opnames in de video te verwerken, bieden wij uitgebreide en professionele visagie aan, realiseren wij in diverse talen ondertiteling en zorgen wij voor de perfecte voice-over voor jouw bedrijfsfilm. Het is ook mogelijk figuranten in te huren voor de video. Neem contact op voor de mogelijkheden en tarieven.',
      },
      {
        question:
          'Waarom zou ik voor Z-Works kiezen als ik een bedrijfsvideo wil?',
        answer:
          'Wij zijn marktleider op het gebied van professionele bedrijfsvideo’s en maken al jaren video’s, waaronder televisieprogramma’s. Met meer dan 6.500 tevreden klanten en bedrijfsvideo’s, bouwden we door de jaren heen een mooi portfolio op. Met een divers team, bestaande uit regisseurs, cameramensen, strategen en marketeers, tillen wij iedere onderneming naar een hoger niveau.',
      },
    ];
  },
};
</script>
