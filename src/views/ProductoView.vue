<script setup lang="ts">

import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const productos = [

  {
    id: 1,
    nombre: 'Carmesy Gloss',
    precio: 24.90,
    descripcion: 'Un gloss que resaltara el color natural de tus labios, con un sabor a frutos rojos que te hara saborear tu belleza..',
    imagenes: [
      '/imagenes/producto_14.jpg',
      '/imagenes/producto_16.jpg',
      '/imagenes/producto_7.jpg'
    ]
  },

  {
    id: 2,
    nombre: 'Moon Kiss',
    precio: 19.90,
    descripcion: 'Crema hidratante de coco con sal marina que dejaran tu piel fresca, sana y suave para tu disfrute.',
    imagenes: [
      '/imagenes/producto_18.jpg',
      '/imagenes/producto_10.jpg',
      '/imagenes/producto_19.jpg'
    ]
  },

  {
    id: 3,
    nombre: 'Salty Sensation',
    precio: 22.90,
    descripcion: 'Exfoliante de arena marina, para relajarte y darle un cuidado a tu piel que la dejara como nueva. Te mereces cuidarte.',
    imagenes: [
      '/imagenes/producto_35.jpg',
      '/imagenes/producto_34.jpg',
      '/imagenes/producto_36.jpg'
    ]
  },
  {
    id: 4,
    nombre: 'Venus Shine',
    precio: 22.90,
    descripcion: 'Iluminador liquido frío que ilumina, hidrata y refresca tu piel, para que ningun clima opaque tu brillo.',
    imagenes: [
      '/imagenes/producto_33.jpg',
      '/imagenes/producto_30.jpg',
      '/imagenes/producto_32.jpg'
    ]
  },
  {
    id: 5,
    nombre: 'Siren Skin',
    precio: 22.90,
    descripcion: 'Brillo natural, para darle a tu piel un acabado brillante y etereo que te hara sentirte como una diosa.',
    imagenes: [
      '/imagenes/producto_17.jpg',
      '/imagenes/producto_21.jpg',
      '/imagenes/producto_22.jpg'
    ]
  },
  {
    id: 6,
    nombre: 'Divine Blush',
    precio: 22.90,
    descripcion: 'Colorete natural liquido, suave y ligero para darle un toque de color a tus mejillas, que nada te quite el color.',
    imagenes: [
      '/imagenes/producto_40.jpg',
      '/imagenes/producto_42.jpg',
      '/imagenes/producto_41.jpg'
    ]
  },

]

const producto = computed(() => {

  return productos.find(
    item => item.id === Number(route.params.id)
  )

})

const imagenActual = ref(0)

function cambiarImagen(index: number) {

  imagenActual.value = index

}

</script>

<template>

  <main
    v-if="producto"
    class="min-h-screen px-6 py-12 md:px-10 lg:px-20"
  >

    <a
      href="/#tienda"
      class="mb-10 inline-block rounded-full border-2 border-black px-6 py-2 transition-all duration-300 hover:border-[#770c16] hover:bg-[#770c16] md:hover:px-20 hover:text-white"
    >
      ← volver a la tienda
    </a>

    <div
      class="grid gap-10 md:grid-cols-2"
    >

      <!-- GALERÍA -->

      <div>

        <div
          class="overflow-hidden rounded-3xl"
        >

          <img
            :src="producto.imagenes[imagenActual]"
            :alt="producto.nombre"
            class="h-[500px] w-full object-cover md:h-[650px]"
          >

        </div>

        <!-- MINIATURAS -->

        <div
          class="mt-4 grid grid-cols-3 gap-4"
        >

          <button
            v-for="(imagen, index) in producto.imagenes"
            :key="imagen"
            @click="cambiarImagen(index)"
            class="overflow-hidden rounded-2xl"
          >

            <img
              :src="imagen"
              :alt="producto.nombre"
              class="h-28 w-full object-cover"
            >

          </button>

        </div>

      </div>

      <!-- INFORMACIÓN -->

      <div
        class="flex flex-col justify-center"
      >

        <p class="mb-3 text-sm uppercase tracking-widest">
          makeup
        </p>

        <h1
          class="text-5xl md:text-7xl"
        >

          {{ producto.nombre }}

        </h1>

        <p
          class="mt-6 text-2xl"
        >

          {{ producto.precio.toFixed(2) }} €

        </p>

        <p
          class="mt-8 max-w-lg leading-relaxed opacity-70"
        >

          {{ producto.descripcion }}

        </p>

        <button
          class="mt-10 rounded-full bg-black py-4 text-white transition hover:scale-[1.02] transition-all duration-300 hover:border-[#770c16] hover:bg-[#770c16] hover:px-20 hover:text-white"
        >

          añadir a la cesta

        </button>

      </div>

    </div>

  </main>

  <main
    v-else
    class="flex min-h-screen items-center justify-center"
  >

    <h1 class="text-3xl">
      producto no encontrado.
    </h1>

  </main>

</template>


<style>
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