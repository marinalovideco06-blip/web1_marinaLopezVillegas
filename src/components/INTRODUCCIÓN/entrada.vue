<script setup lang="ts">

import { ref, computed, } from 'vue'
import { useRouter } from 'vue-router'



// ======================================================
// TIPOS
// ======================================================

interface Producto {

  id: number
  nombre: string
  precio: number
  imagen: string
  descripcion: string

}

interface ProductoCesta extends Producto {

  cantidad: number

}


// ======================================================
// ROUTER
// ======================================================

const router = useRouter()


// ======================================================
// PRODUCTOS
// ======================================================

const productos: Producto[] = [

  {
    id: 1,
    nombre: 'Carmesy Gloss',
    precio: 24.90,
    imagen: '/imagenes/producto_14.jpg',
    descripcion: 'Gloss con sabor a frutos rojos.'
  },

  {
    id: 2,
    nombre: 'Moon Kiss',
    precio: 19.90,
    imagen: '/imagenes/producto_18.jpg',
    descripcion: 'Crema hidratante con sal marina.'
  },

  {
    id: 3,
    nombre: 'Salty Sensation',
    precio: 22.90,
    imagen: '/imagenes/producto_35.jpg',
    descripcion: 'Iluminador de efecto celestial.'
  },

  {
    id: 4,
    nombre: 'Venus Shine',
    precio: 39.90,
    imagen: '/imagenes/producto_33.jpg',
    descripcion: 'Iluminador natural hidratante.'
  },

  {
    id: 5,
    nombre: 'Siren Skin',
    precio: 29.90,
    imagen: '/imagenes/producto_17.jpg',
    descripcion: 'Brillo efecto glow.'
  },

  {
    id: 6,
    nombre: 'Divine Blush',
    precio: 17.90,
    imagen: '/imagenes/producto_40.jpg',
    descripcion: 'Colorete de acabado natural.'
  }

]


// ======================================================
// CESTA
// ======================================================

const cesta = ref<ProductoCesta[]>([])

const cestaAbierta = ref(false)

const checkoutAbierto = ref(false)


function añadirCesta(producto: Producto) {

  const productoExistente = cesta.value.find(
    item => item.id === producto.id
  )

  if (productoExistente) {

    productoExistente.cantidad++

  } else {

    cesta.value.push({

      ...producto,
      cantidad: 1

    })

  }

  cestaAbierta.value = true

}


function aumentarCantidad(id: number) {

  const producto = cesta.value.find(
    item => item.id === id
  )

  if (producto) {

    producto.cantidad++

  }

}


function disminuirCantidad(id: number) {

  const producto = cesta.value.find(
    item => item.id === id
  )

  if (!producto) return

  if (producto.cantidad > 1) {

    producto.cantidad--

  } else {

    cesta.value = cesta.value.filter(
      item => item.id !== id
    )

  }

}


function eliminarProducto(id: number) {

  cesta.value = cesta.value.filter(
    item => item.id !== id
  )

}


const cantidadTotal = computed(() => {

  return cesta.value.reduce(
    (total, producto) =>
      total + producto.cantidad,
    0
  )

})


const precioTotal = computed(() => {

  return cesta.value.reduce(
    (total, producto) =>
      total + producto.precio * producto.cantidad,
    0
  )

})


// ======================================================
// PRODUCTOS
// ======================================================

function abrirProducto(id: number) {

  router.push(`/producto/${id}`)

}


// ======================================================
// NOTICIAS
// ======================================================

const noticiaActual = ref(0)

const noticias = [

  {
    titulo: 'The natural shine',

    descripcion:
      'Descubre como nuestra marca ha ayudado a miles de mujeres a empezar a entender la belleza como algo suyo y para ella. Cuidate para ti misma. Una mujer poderosa es una mujer hermosa.',

    imagen:
      '/imagenes/diseño_4.jpg'

  },

  {
    titulo: 'Behind the beauty',

    descripcion:
      'Conoce el proceso creativo detrás de nuestra última campaña. Nuestra prioridad siempre es el bienestar de nuestras clientas y potenciar el maquillaje como una forma de autocuidado y expresión personal.',

    imagen:
      '/imagenes/diseño_2.jpg'

  },

  {
    titulo: 'New era, new glow',

    descripcion:
      'Una nueva forma de entender el maquillaje y la belleza. Nosotras creemos que una buena actitud, una fuerte autoestima y un cuidado propio te hacen sentirte poderosa y bella para ti.',

    imagen:
      '/imagenes/diseño_3.jpg'

  },
  

]


function siguienteNoticia() {

  noticiaActual.value =
    (noticiaActual.value + 1) % noticias.length

}


function anteriorNoticia() {

  noticiaActual.value =
    (noticiaActual.value - 1 + noticias.length) %
    noticias.length

}


// ======================================================
// MODELOS
// ======================================================

const modelos = [

  '/imagenes/modelo_6.jpg',
  '/imagenes/modelo_2.jpg',
  '/imagenes/modelo_3.jpg',
  '/imagenes/modelo_4.jpg',
  '/imagenes/modelo_5.jpg',
  '/imagenes/modelo_8.jpg',
  '/imagenes/modelo_12.jpg',
  '/imagenes/modelo_13.jpg',
  '/imagenes/modelo_10.jpg',
  '/imagenes/modelo_11.jpg',

]


// Repetimos las imágenes para crear
// un carrusel visualmente infinito.

const modelosCarrusel = computed(() => {

  return [
    ...modelos,
    ...modelos
  ]

})


// ======================================================
// VISION BOARD
// ======================================================

interface Proyecto {

  id: number
  imagen: string
  titulo: string

}


const proyectos: Proyecto[] = [

  {
    id: 1,
    imagen: '/imagenes/diseño_1.jpg',
    titulo: 'Celestial Dreams'
  },

  {
    id: 2,
    imagen: '/imagenes/diseño_4.jpg',
    titulo: 'Venus'
  },

  {
    id: 3,
    imagen: '/imagenes/diseño_5.jpg',
    titulo: 'Moonlight'
  },

  {
    id: 4,
    imagen: '/imagenes/diseño_7.jpg',
    titulo: 'Divine Skin'
  }

]


const proyectoSeleccionado =
  ref<Proyecto | null>(null)


function abrirProyecto(proyecto: Proyecto) {

  proyectoSeleccionado.value = proyecto

}


function cerrarProyecto() {

  proyectoSeleccionado.value = null

}


// ======================================================
// DRAG DEL MOODBOARD
// ======================================================

const posiciones = ref<
  Record<number, { x: number, y: number }>
>({

  1: { x: 0, y: 0 },
  2: { x: 0, y: 0 },
  3: { x: 0, y: 0 },
  4: { x: 0, y: 0 }

})


const proyectoArrastrado = ref<number | null>(null)

const inicioX = ref(0)

const inicioY = ref(0)

const posicionInicialX = ref(0)

const posicionInicialY = ref(0)


function empezarArrastre(
  event: MouseEvent | TouchEvent,
  proyecto: Proyecto
) {

  proyectoArrastrado.value = proyecto.id

  const punto = obtenerPunto(event)

  inicioX.value = punto.x

  inicioY.value = punto.y

  posicionInicialX.value =
    posiciones.value[proyecto.id].x

  posicionInicialY.value =
    posiciones.value[proyecto.id].y

}


function moverProyecto(
  event: MouseEvent | TouchEvent
) {

  if (proyectoArrastrado.value === null) {
    return
  }

  const punto = obtenerPunto(event)

  const diferenciaX =
    punto.x - inicioX.value

  const diferenciaY =
    punto.y - inicioY.value


  posiciones.value[proyectoArrastrado.value] = {

    x: posicionInicialX.value + diferenciaX,

    y: posicionInicialY.value + diferenciaY

  }

}


function terminarArrastre() {

  proyectoArrastrado.value = null

}


function obtenerPunto(
  event: MouseEvent | TouchEvent
) {

  if ('touches' in event && event.touches.length) {

    return {

      x: event.touches[0].clientX,

      y: event.touches[0].clientY

    }

  }

  if ('changedTouches' in event && event.changedTouches.length) {

    return {

      x: event.changedTouches[0].clientX,

      y: event.changedTouches[0].clientY

    }

  }

  const mouseEvent = event as MouseEvent

  return {

    x: mouseEvent.clientX,

    y: mouseEvent.clientY

  }

}


// ======================================================
// CHECKOUT
// ======================================================

const datosCompra = ref({

  nombre: '',
  email: '',
  direccion: '',
  ciudad: '',
  codigoPostal: '',
  tarjeta: '',
  caducidad: '',
  cvv: ''

})


function realizarPedido() {

  alert('Pedido realizado ✨')

  cesta.value = []

  checkoutAbierto.value = false

  cestaAbierta.value = false

}


</script>


<template>

  <div
    class="min-h-screen overflow-x-hidden bg-white text-black"
  >


    <!-- ==================================================
         NAVBAR
    ================================================== -->

    <nav
      class="flex flex-col gap-6 px-6 py-7 md:flex-row md:items-center md:justify-between md:px-10 lg:px-16"
    >

      <div>

        <img
          src="/imagenes/logo.png"
          alt="Logo"
          class="h-16 md:h-20 "
        >

      </div>


      <div
        class="flex flex-wrap justify-center gap-3 md:justify-end"
      >

      <RouterLink
  to="/acerca"
  class="rounded-full border-2 border-black px-6 py-2 transition-all duration-300 hover:border-[#770c16] hover:bg-[#770c16] hover:text-white md:hover:px-20"
>
  acerca de.
</RouterLink>

        <a
          href="#tienda"
          class="rounded-full border-2 border-black px-6 py-2 transition-all duration-300 hover:border-[#770c16] hover:bg-[#770c16] md:hover:px-20 hover:text-white"
        >

          compra.

        </a>


        <a
          href="#marca"
          class="rounded-full border-2 border-black px-6 py-2 transition-all duration-300 hover:border-[#770c16] hover:bg-[#770c16] md:hover:px-20 hover:text-white"
        >

          nosotros.

        </a>


        <button
          @click="cestaAbierta = true"
          class="rounded-full border-2 border-black px-6 py-2 transition-all duration-300 hover:border-[#770c16] hover:bg-[#770c16] md:hover:px-20 hover:text-white"
        >

          cesta.

          <span v-if="cantidadTotal">
            ({{ cantidadTotal }})
          </span>

        </button>

      </div>

    </nav>


    <!-- ==================================================
         HERO
    ================================================== -->

    <section
      class="px-4 md:px-8 lg:px-12"
    >

      <img
        src="/imagenes/diosa-05.png"
        alt="Banner"
        class="h-auto max-h-[75vh] w-full rounded-[2rem] object-cover"
      >

    </section>


    <!-- ==================================================
         TIENDA
    ================================================== -->

    <section
      id="tienda"
      class="px-6 py-28 md:px-10 md:py-36 lg:px-20"
    >

      <div
        class="mx-auto mb-20 max-w-6xl"
      >

        <p
          class="mb-4 text-sm uppercase tracking-[0.3em] opacity-60"
        >

          shop

        </p>


        <h2
          class="text-5xl leading-tight md:text-7xl"
        >

          descubre nuestros productos.

        </h2>

      </div>


      <div
        class="mx-auto grid max-w-6xl grid-cols-1 gap-x-12 gap-y-24 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-20"
      >

        <article
          v-for="producto in productos"
          :key="producto.id"
          class="group cursor-pointer"
        >

          <div
            @click="abrirProducto(producto.id)"
            class="mx-auto max-w-[280px] overflow-hidden rounded-[2rem]"
          >

            <img
              :src="producto.imagen"
              :alt="producto.nombre"
              class="aspect-[3/4] h-auto w-full object-cover transition duration-700 group-hover:scale-105"
            >

          </div>


          <div
            class="mx-auto mt-7 flex max-w-[280px] items-start justify-between gap-5"
          >

            <div>

              <h3 class="text-2xl">

                {{ producto.nombre }}

              </h3>


              <p
                class="mt-2 text-sm leading-relaxed opacity-55"
              >

                {{ producto.descripcion }}

              </p>

            </div>


            <p
              class="whitespace-nowrap text-sm"
            >

              {{ producto.precio.toFixed(2) }} €

            </p>

          </div>


          <button
            @click="añadirCesta(producto)"
            class="mx-auto mt-5 block w-full max-w-[280px] rounded-full border-2 border-black py-3 transition-all duration-300 hover:border-[#770c16] hover:bg-[#770c16] hover:text-white"
          >

            añadir a la cesta

          </button>

        </article>

      </div>

    </section>


    <!-- ==================================================
         NOTICIAS
    ================================================== -->

    <section
      id="noticias"
      class="px-6 py-28 md:px-10 md:py-16 lg:px-10"
    >

      <div
        class="mx-auto mb-16 max-w-6xl"
      >

        <p
          class="mb-4 text-sm uppercase tracking-[0.3em] opacity-60"
        >

          latest

        </p>


        <h2
          class="text-5xl md:text-7xl"
        >

          novedades.

        </h2>

      </div>


      <div
        class="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem]"
      >

        <img
          :src="noticias[noticiaActual].imagen"
          :alt="noticias[noticiaActual].titulo"
          class="h-[500px] w-full object-cover md:h-[650px]"
        >


        <!-- DEGRADADO -->

        <div
          class="absolute inset-0 bg-gradient-to-t from-white via-white/70 via-20% to-transparent md:from-white md:via-white/60"
        ></div>


        <!-- TEXTO -->

        <div
          class="absolute bottom-0 left-0 max-w-2xl p-8 md:p-14"
        >

          <p
            class="mb-4 text-xs uppercase tracking-[0.3em] opacity-60"
          >

            0{{ noticiaActual + 1 }}

          </p>


          <h3
            class="text-4xl leading-tight md:text-6xl"
          >

            {{ noticias[noticiaActual].titulo }}

          </h3>


          <p
            class="mt-5 max-w-xl text-base leading-relaxed opacity-70 md:text-lg"
          >

            {{ noticias[noticiaActual].descripcion }}

          </p>

        </div>


        <!-- CONTROLES -->

        <div
          class="absolute right-6 top-6 flex gap-2 md:right-8 md:top-8"
        >

          <button
            @click="anteriorNoticia"
            class="rounded-full bg-white/90 px-5 py-3 backdrop-blur transition hover:scale-105 rounded-full border-2 border-black px-6 py-2 transition-all duration-300 hover:border-[#770c16] hover:bg-[#770c16] md:hover:px-20 hover:text-white"
          >

            ←

          </button>


          <button
            @click="siguienteNoticia"
            class="rounded-full bg-white/90 px-5 py-3 backdrop-blur transition hover:scale-105 rounded-full border-2 border-black px-6 py-2 transition-all duration-300 hover:border-[#770c16] hover:bg-[#770c16] md:hover:px-20 hover:text-white"
          >

            →

          </button>

        </div>

      </div>

    </section>


    <!-- ==================================================
         MODELOS
    ================================================== -->

    <section
      class="overflow-hidden py-28 md:py-36"
    >

      <div
        class="mb-16 px-6 md:px-10 lg:px-20"
      >

        <p
          class="mb-4 text-sm uppercase tracking-[0.3em] opacity-60"
        >

          inspiration

        </p>


        <h2
          class="text-5xl md:text-7xl"
        >

          the divine look.

        </h2>

      </div>


      <!-- CARRUSEL -->

      <div
        class="relative w-full overflow-hidden"
      >

        <div
          class="modelos-track flex w-max gap-5 md:gap-8"
        >

          <div
            v-for="(modelo, index) in modelosCarrusel"
            :key="`${modelo}-${index}`"
            class="w-[65vw] shrink-0 overflow-hidden rounded-[2rem] sm:w-[40vw] md:w-[30vw] lg:w-[23vw]"
          >

            <img
              :src="modelo"
              alt="Modelo"
              class="aspect-[3/4] w-full object-cover"
            >

          </div>

        </div>

      </div>

    </section>


    <!-- ==================================================
         SOBRE LA MARCA
    ================================================== -->

    <section
      id="marca"
      class="relative overflow-hidden px-6 py-28 md:px-10 md:py-20 lg:px-20"
    >

      <div
        class="mx-auto max-w-5xl text-center"
      >

        <p
          class="text-sm uppercase tracking-[0.3em] opacity-60"
        >

          our philosophy

        </p>


        <blockquote
          class="mt-10 text-5xl leading-[1.05] md:text-7xl lg:text-8xl"
        >

          “There is nothing more beautiful than a strong woman.”

        </blockquote>

      </div>


      <!-- VISION BOARD -->

      <div
        class="relative mx-auto mt-28 min-h-[650px] max-w-6xl touch-none md:min-h-[800px]"
        @mousemove="moverProyecto"
        @mouseup="terminarArrastre"
        @mouseleave="terminarArrastre"
        @touchmove.prevent="moverProyecto"
        @touchend="terminarArrastre"
      >

        <div
          v-for="proyecto in proyectos"
          :key="proyecto.id"
          @mousedown="empezarArrastre($event, proyecto)"
          @touchstart="empezarArrastre($event, proyecto)"
          @click="abrirProyecto(proyecto)"
          class="absolute cursor-grab overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 active:cursor-grabbing hover:z-20 hover:scale-105"
          :class="{

            'left-[3%] top-[5%] w-44 rotate-[-8deg] md:w-64':
              proyecto.id === 1,

            'right-[3%] top-[8%] w-48 rotate-[7deg] md:w-72':
              proyecto.id === 2,

            'left-[20%] top-[42%] w-52 rotate-[3deg] md:w-80':
              proyecto.id === 3,

            'right-[15%] bottom-[5%] w-44 rotate-[-5deg] md:w-64':
              proyecto.id === 4

          }"
          :style="{
            transform: `translate(${posiciones[proyecto.id].x}px, ${posiciones[proyecto.id].y}px)`
          }"
        >

          <img
            :src="proyecto.imagen"
            :alt="proyecto.titulo"
            class="pointer-events-none w-full select-none"
            draggable="false"
          >

        </div>

      </div>

    </section>


    <!-- ==================================================
         MODAL PROYECTO
    ================================================== -->

    <div
      v-if="proyectoSeleccionado"
      @click="cerrarProyecto"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm"
    >

      <div
        @click.stop
        class="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-3xl bg-white"
      >

        <button
          @click="cerrarProyecto"
          class="absolute right-5 top-5 z-10 rounded-full bg-white px-4 py-2 shadow"
        >

          ✕

        </button>


        <img
          :src="proyectoSeleccionado.imagen"
          :alt="proyectoSeleccionado.titulo"
          class="max-h-[80vh] w-full object-contain"
        >

      </div>

    </div>


    <!-- ==================================================
         CONTACTO
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


    <!-- ==================================================
         CESTA
    ================================================== -->

    <div
      v-if="cestaAbierta"
      class="fixed inset-0 z-40 bg-black/30"
      @click="cestaAbierta = false"
    ></div>


    <aside
      class="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-500"
      :class="
        cestaAbierta
          ? 'translate-x-0'
          : 'translate-x-full'
      "
    >

      <div
        class="flex items-center justify-between border-b-2 border-black p-6"
      >

        <h2 class="text-2xl">
          tu cesta.
        </h2>


        <button
          @click="cestaAbierta = false"
          class="text-2xl"
        >

          ✕

        </button>

      </div>


      <div
        class="flex-1 overflow-y-auto p-6"
      >

        <div
          v-if="cesta.length === 0"
          class="flex h-full items-center justify-center text-center opacity-50"
        >

          <p>
            tu cesta está vacía ♡
          </p>

        </div>


        <div
          v-else
          class="space-y-6"
        >

          <div
            v-for="producto in cesta"
            :key="producto.id"
            class="flex gap-4 border-b pb-6"
          >

            <img
              :src="producto.imagen"
              :alt="producto.nombre"
              class="h-24 w-24 rounded-2xl object-cover"
            >


            <div
              class="flex flex-1 flex-col"
            >

              <div
                class="flex justify-between gap-2"
              >

                <h3>
                  {{ producto.nombre }}
                </h3>


                <button
                  @click="eliminarProducto(producto.id)"
                  class="opacity-50"
                >

                  ✕

                </button>

              </div>


              <p class="mt-1">

                {{ producto.precio.toFixed(2) }} €

              </p>


              <div
                class="mt-auto flex items-center gap-3"
              >

                <button
                  @click="disminuirCantidad(producto.id)"
                  class="h-8 w-8 rounded-full border"
                >

                  −

                </button>


                <span>

                  {{ producto.cantidad }}

                </span>


                <button
                  @click="aumentarCantidad(producto.id)"
                  class="h-8 w-8 rounded-full border"
                >

                  +

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>


      <div
        v-if="cesta.length"
        class="border-t-2 border-black p-6"
      >

        <div
          class="mb-6 flex justify-between text-xl"
        >

          <span>
            total
          </span>


          <span>
            {{ precioTotal.toFixed(2) }} €
          </span>

        </div>


        <button
          @click="checkoutAbierto = true"
          class="w-full rounded-full bg-black py-4 text-white transition hover:scale-[1.02] transition-all duration-300 hover:border-[#770c16] hover:bg-[#770c16] hover:px-20 hover:text-white"
        >

          hacer pedido

        </button>

      </div>

    </aside>


    <!-- ==================================================
         CHECKOUT
    ================================================== -->

    <div
      v-if="checkoutAbierto"
      class="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
    >

      <div
        class="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 md:p-10"
      >

        <div
          class="mb-8 flex items-center justify-between"
        >

          <h2 class="text-3xl">
            tus datos.
          </h2>


          <button
            @click="checkoutAbierto = false"
            class="text-xl"
          >

            ✕

          </button>

        </div>


        <form
          @submit.prevent="realizarPedido"
          class="space-y-8"
        >

          <div class="space-y-4">

            <h3 class="text-xl">
              información personal
            </h3>


            <input
              v-model="datosCompra.nombre"
              required
              type="text"
              placeholder="nombre completo"
              class="w-full rounded-full border-2 border-black px-5 py-3 outline-none"
            >


            <input
              v-model="datosCompra.email"
              required
              type="email"
              placeholder="email"
              class="w-full rounded-full border-2 border-black px-5 py-3 outline-none"
            >

          </div>


          <div class="space-y-4">

            <h3 class="text-xl">
              dirección
            </h3>


            <input
              v-model="datosCompra.direccion"
              required
              type="text"
              placeholder="dirección"
              class="w-full rounded-full border-2 border-black px-5 py-3 outline-none"
            >


            <div class="grid grid-cols-2 gap-4">

              <input
                v-model="datosCompra.ciudad"
                required
                type="text"
                placeholder="ciudad"
                class="rounded-full border-2 border-black px-5 py-3 outline-none"
              >


              <input
                v-model="datosCompra.codigoPostal"
                required
                type="text"
                placeholder="código postal"
                class="rounded-full border-2 border-black px-5 py-3 outline-none"
              >

            </div>

          </div>


          <div class="space-y-4">

            <h3 class="text-xl">
              pago
            </h3>


            <input
              v-model="datosCompra.tarjeta"
              required
              type="text"
              inputmode="numeric"
              placeholder="número de tarjeta"
              class="w-full rounded-full border-2 border-black px-5 py-3 outline-none"
            >


            <div class="grid grid-cols-2 gap-4">

              <input
                v-model="datosCompra.caducidad"
                required
                type="text"
                placeholder="MM/AA"
                class="rounded-full border-2 border-black px-5 py-3 outline-none"
              >


              <input
                v-model="datosCompra.cvv"
                required
                type="password"
                placeholder="CVV"
                class="rounded-full border-2 border-black px-5 py-3 outline-none"
              >

            </div>

          </div>


          <div
            class="rounded-2xl bg-gray-100 p-5"
          >

            <div
              class="flex justify-between"
            >

              <span>
                total
              </span>


              <strong>
                {{ precioTotal.toFixed(2) }} €
              </strong>

            </div>

          </div>


          <button
            type="submit"
            class="w-full rounded-full bg-black py-4 text-white transition-all duration-300 hover:border-[#770c16] hover:bg-[#770c16] hover:px-20 hover:text-white"
          >

            confirmar pedido

          </button>

        </form>

      </div>

    </div>

  </div>

</template>


<style>

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&display=swap');


html {
  scroll-behavior: smooth;
}


body {
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
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


/* ======================================================
   CARRUSEL DE MODELOS
   ====================================================== */

.modelos-track {

  animation: modelos-movimiento 35s linear infinite;

}


@keyframes modelos-movimiento {

  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }

}


/* En móvil un poco más lento */

@media (max-width: 640px) {

  .modelos-track {

    animation-duration: 28s;

  }

}

</style>
