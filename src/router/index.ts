import { createRouter, createWebHashHistory } from 'vue-router'

import Entrada from '../components/INTRODUCCIÓN/entrada.vue'
import ProductoView from '../views/ProductoView.vue'
import Acerca_de from '../components/INTRODUCCIÓN/acerca_de.vue'

const router = createRouter({
    history: createWebHashHistory(),

    routes: [
        {
            path: '/',
            component: Entrada
        },
        {
            path: '/producto/:id',
            name: 'producto',
            component: ProductoView
        },
        {
            path: '/acerca',
            component: Acerca_de
        }
    ]
})

export default router
