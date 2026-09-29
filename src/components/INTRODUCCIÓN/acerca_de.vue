<script setup lang="ts">

import { ref } from 'vue'

const historiaAbierta = ref(0)

const opiniones = [
  {
    texto:
      'Nunca había sentido que una marca de maquillaje hablase tanto de mí. Todo se siente cuidado, pero sin intentar cambiar quién eres.',
    nombre: 'Sabrina C.',
    producto: 'Celestial Glow'
  },
  {
    texto:
      'Me encanta que cada producto parezca tener una pequeña historia detrás. Es maquillaje, pero también es una experiencia.',
    nombre: 'Shara G.',
    producto: 'Moon Kiss'
  },
  {
    texto:
      'Lo que más me gusta es que no siento que tenga que maquillarme para verme mejor. Me maquillo porque me apetece.',
    nombre: 'Gema V.',
    producto: 'Divine Blush'
  }
]

const historia = [
  {
    numero: '01',
    titulo: 'la idea',
    texto:
      'Todo comenzó con una pregunta muy sencilla: ¿por qué el maquillaje tenía que servir para convertirnos en alguien diferente? Tradicionalmente el maquillaje ha servido como una forma de hacernos sentir que nuestra belleza natural nunca es suficiente. Por eso, Diosa quería ayudar a las mujeres a recuperar el control, y ofrecerles una gama de maquillaje cuyo objetivo era empoderarlas desde su expresión personal y cuidado propio, pero siempre dirigido a que ellas se sientan bellas sin necesidad de nuestros productos.'
  },
  {
    numero: '02',
    titulo: 'el concepto',
    texto:
      'Así nació una pequeña idea alrededor de la belleza. Cuando una mujer empieza a cuidarse y a sentirse bien consigo mismo, recupera su poder, y el maquillaje pasa a ser una elección ppropia y no impuesta por la sociedad ni por la inseguridad que esta genera sobre las mujeres.'
  },
  {
    numero: '03',
    titulo: 'los primeros bocetos',
    texto:
      'Queriamos que la marca generase cercanía, que estuviese hecha de productos naturales, que los packagings estuviesen diseñados desde la female gaze y con formulas naturales, saludables y testadas farmaceuticamente. Nuestro objetivo era crear una marca de autocuidado, de expresión y que se acercase a las mujeres de forma elegante y a la vez eterea.'
  },
  {
    numero: '04',
    titulo: 'la creación',
    texto:
      'Finalmente creamos una identidad que presentaba a las mujeres como personas etereal, naturalmente hermosas y que merecian poder sentirse cuidadas y expresarse desde la libertad, la seguridad y recuperando su poder sobre su propia percepción sin renegar de su feminidad.'
  },
  {
    numero: '05',
    titulo: 'la marca',
    texto:
      'Hoy somos la marca favorita de miles de mujeres, aclamados por nuestro producto y mensaje, y pensamos seguir abrazando nuestra idea, jamas poniendo en la linea nuestra integridad encuanto a cuidar a las mujeres y promoveer que la belleza está en todas ellas. No necesitan maquillaje para ser hermosas, ahí está la belleza en que elijan usarnos.'
  }
]

const bocetos = [
  {
    imagen: '/imagenes/color_2.jpg',
    titulo: 'colores.'
  },
  {
    imagen: '/imagenes/diseño_4.jpg',
    titulo: 'estilo.'
  },
  {
    imagen: '/imagenes/dior.jpg',
    titulo: 'vibra.'
  },
  {
    imagen: '/imagenes/concha.png',
    titulo: 'venus.'
  },
  
]

function cambiarHistoria(numero: number) {
  historiaAbierta.value = numero
}

</script>

<template>

  <main class="min-h-screen overflow-x-hidden bg-white text-black">

    <!-- ==================================================
         NAVBAR
    ================================================== -->

    <nav
      class="flex items-center justify-between px-6 py-7 md:px-10 lg:px-16"
    >

      <RouterLink
        to="/"
        class="mb-10 inline-block rounded-full border-2 border-black px-6 py-2 transition-all duration-300 hover:border-[#770c16] hover:bg-[#770c16] md:hover:px-20 hover:text-white"
      >
        ← volver
      </RouterLink>

      <img
        src="/imagenes/logo.png"
        alt="Logo"
        class="h-14 md:h-20"
      >

      <div class="hidden w-20 md:block"></div>

    </nav>


    <!-- ==================================================
         HERO
    ================================================== -->

    <section
      class="px-6 pb-28 pt-20 md:px-10 md:pb-40 md:pt-28 lg:px-20"
    >

      <div class="mx-auto max-w-6xl text-center">

        <img
          src="/imagenes/logo.png"
          alt="Logo"
          class="mx-auto h-32 w-auto md:h-48 lg:h-100"
        >

        <p
          class="mx-auto mt-12 max-w-2xl text-lg leading-relaxed opacity-65 md:text-xl"
        >
          Un pequeño universo creado alrededor de la belleza,
          la creatividad y la libertad de expresarnos como queremos.
        </p>

        <p
          class="mt-8 text-xs uppercase tracking-[0.35em] opacity-45"
        >
          beauty · creativity · self expression
        </p>

      </div>

    </section>


    <!-- ==================================================
         LORE
    ================================================== -->

    <section
      class="px-6 py-28 md:px-10 md:py-36 lg:px-20"
    >

      <div
        class="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-center md:gap-24"
      >

        <div>

          <p
            class="mb-5 text-sm uppercase tracking-[0.3em] opacity-50"
          >
            our story
          </p>

          <h2
            class="text-5xl leading-[0.95] md:text-7xl"
          >
            mucho más que maquillaje.
          </h2>

        </div>


        <div class="space-y-6 text-base leading-relaxed opacity-70 md:text-lg">

          <p>
            Dicen que la belleza siempre ha tenido algo de mágico.
            Que durante siglos las personas han utilizado colores,
            formas y pequeños rituales para contar quiénes son.
          </p>

          <p>
            Nosotros imaginamos este universo desde ese mismo lugar:
            como un espacio donde cada producto puede convertirse
            en una pequeña historia.
          </p>

          <p>
            Aquí no existen reglas sobre cómo deberías verte.
            Solo productos creados para acompañarte cuando quieres
            experimentar, jugar, crear o simplemente sentirte tú.
          </p>

        </div>

      </div>

    </section>


    <!-- ==================================================
         FRASE
    ================================================== -->

    <section
      class="border-y border-black/20 px-6 py-28 md:py-40"
    >

      <blockquote
        class="mx-auto max-w-6xl text-center text-5xl leading-[1] md:text-7xl lg:text-8xl"
      >
        “There is nothing more beautiful than becoming
        your own version of beautiful.”
      </blockquote>

    </section>


    <!-- ==================================================
         OPINIONES
    ================================================== -->

    <section
      class="px-6 py-28 md:px-10 md:py-36 lg:px-20"
    >

      <div class="mx-auto max-w-6xl">

        <div class="mb-16">

          <p
            class="mb-4 text-sm uppercase tracking-[0.3em] opacity-50"
          >
            from our community
          </p>

          <h2
            class="text-5xl md:text-7xl"
          >
            lo que dicen de nosotros.
          </h2>

        </div>


        <div
          class="grid gap-8 md:grid-cols-3"
        >

          <article
            v-for="opinion in opiniones"
            :key="opinion.nombre"
            class="flex min-h-[330px] flex-col justify-between rounded-[2rem] border border-black/20 p-7 md:p-8"
          >

            <div>

              <span class="text-3xl">
                “
              </span>

              <p
                class="mt-5 text-lg leading-relaxed opacity-75"
              >
                {{ opinion.texto }}
              </p>

            </div>

            <div class="mt-10">

              <p class="font-medium">
                {{ opinion.nombre }}
              </p>

              <p
                class="mt-1 text-sm uppercase tracking-[0.2em] opacity-45"
              >
                {{ opinion.producto }}
              </p>

            </div>

          </article>

        </div>

      </div>

    </section>


    <!-- ==================================================
         HISTORIA / LIBRO
    ================================================== -->

    <section
      class="bg-[#770c16] px-6 py-28 md:px-10 md:py-36 lg:px-20"
    >

      <div class="mx-auto max-w-6xl">

        <div class="mb-20 max-w-2xl">

          <p
            class="mb-4 text-sm uppercase tracking-[0.3em] opacity-50 text-white"
          >
            the making of
          </p>

          <h2
            class="text-5xl leading-tight md:text-7xl text-white"
          >
            cómo construimos
            nuestro universo.
          </h2>

        </div>


        <!-- LIBRO -->

        <div
          class="grid overflow-hidden rounded-[2rem] border border-black/20 bg-white md:grid-cols-2"
        >

          <!-- ÍNDICE -->

          <div
            class="border-b border-black/20 p-6 md:border-b-0 md:border-r md:p-10"
          >

            <p
              class="mb-8 text-xs uppercase tracking-[0.3em] opacity-45"
            >
              contents
            </p>

            <button
              v-for="(capitulo, index) in historia"
              :key="capitulo.numero"
              @click="cambiarHistoria(index)"
              class="flex w-full items-center justify-between border-t border-black/15 py-5 text-left transition-opacity hover:opacity-50"
              :class="{
                'opacity-40': historiaAbierta !== index
              }"
            >

              <span>
                {{ capitulo.titulo }}
              </span>

              <span class="text-sm opacity-50">
                {{ capitulo.numero }}
              </span>

            </button>

          </div>


          <!-- PÁGINA -->

          <div
            class="flex min-h-[450px] flex-col justify-between p-8 md:p-14"
          >

            <div>

              <p
                class="text-sm uppercase tracking-[0.3em] opacity-40"
              >
                {{ historia[historiaAbierta].numero }}
              </p>

              <h3
                class="mt-10 text-5xl md:text-6xl"
              >
                {{ historia[historiaAbierta].titulo }}
              </h3>

              <p
                class="mt-10 max-w-lg text-lg leading-relaxed opacity-65"
              >
                {{ historia[historiaAbierta].texto }}
              </p>

            </div>


            <div
              class="mt-16 border-t border-black/15 pt-5 text-xs  tracking-[0.25em] opacity-40"
            >
              blue.marina — archive
            </div>

          </div>

        </div>

      </div>

    </section>


    <!-- ==================================================
         MOODBOARD
    ================================================== -->

    <section
      class="px-6 py-28 md:px-10 md:py-36 lg:px-20"
    >

      <div class="mx-auto max-w-6xl">

        <div class="mb-16">

          <p
            class="mb-4 text-sm uppercase tracking-[0.3em] opacity-50"
          >
            visual archive
          </p>

          <h2
            class="text-5xl md:text-7xl"
          >
            from sketch to reality.
          </h2>

        </div>


        <div
          class="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        >

          <article
            v-for="(boceto, index) in bocetos"
            :key="boceto.imagen"
            class="group overflow-hidden"
            :class="{
              'md:mt-16': index === 1,
              'md:-mt-8': index === 2,
              'md:mt-12': index === 3
            }"
          >

            <div
              class="overflow-hidden rounded-[1.5rem] bg-gray-100"
            >

              <img
                :src="boceto.imagen"
                :alt="boceto.titulo"
                class="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
              >

            </div>

            <p
              class="mt-4 text-xs  tracking-[0.2em] opacity-50"
            >
              {{ boceto.titulo }}
            </p>

          </article>

        </div>

      </div>

    </section>


    <!-- ==================================================
         FINAL
    ================================================== -->

    <section
      class="px-6 py-28 text-center md:py-40"
    >

      <p
        class="text-sm uppercase tracking-[0.3em] opacity-50"
      >
        discover the collection
      </p>

      <h2
        class="mx-auto mt-8 max-w-4xl text-5xl leading-tight md:text-7xl"
      >
        ahora que conoces la historia,
        descubre el universo.
      </h2>

      <RouterLink
        to="/#tienda"
        class="mt-12 inline-block rounded-full border-2 border-black px-8 py-3 transition-all duration-300 hover:border-[#770c16] hover:bg-[#770c16] hover:px-12 hover:text-white"
      >
        descubrir productos.
      </RouterLink>

    </section>


    <!-- ==================================================
         FOOTER
    ================================================== -->

    <footer
      id="contacto"
      class="mt-20 border-t border-black/30 px-6 py-20 md:px-10 md:py-24 lg:px-20"
    >

      <div
        class="mx-auto grid max-w-6xl gap-14 md:grid-cols-3"
      >

        <div>

          <img
            src="/imagenes/logo.png"
            alt="Logo"
            class="h-16"
          >

          <p
            class="mt-5 max-w-xs leading-relaxed opacity-60"
          >
            The beauty of a powerful woman
          </p>

        </div>


        <div>

          <h3 class="mb-5 text-lg">
            contacto
          </h3>

          <p>
            diosa@gmail.com
          </p>

          <p>
            +34 242 666 826
          </p>

        </div>


        <div>

          <h3 class="mb-5 text-lg">
            síguenos
          </h3>

          <div class="flex flex-wrap gap-3">

            <a
              href="#"
              class="rounded-full border-2 border-black px-5 py-2 transition-all duration-300 hover:border-[#770c16] hover:bg-[#770c16] hover:px-20 hover:text-white"
            >
              Instagram
            </a>

            <a
              href="#"
              class="rounded-full border-2 border-black px-5 py-2 transition-all duration-300 hover:border-[#770c16] hover:bg-[#770c16] hover:px-20 hover:text-white"
            >
              TikTok
            </a>

          </div>

        </div>

      </div>


      <div
        class="mx-auto mt-20 max-w-6xl border-t border-black/20 pt-6 text-sm opacity-50"
      >
        © 2026 — blue.marina
      </div>

    </footer>

  </main>

</template>


<style>

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
}

@font-face {
  font-family: 'MiFuente';
  src: url('/tipo/Outfit.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

* {
  font-family: 'MiFuente', sans-serif;
}

</style>