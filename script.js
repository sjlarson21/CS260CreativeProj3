let app = new Vue({
    el: '#app',
    data: {
        color: {},
    }
    
});

<template>
    <div>
        <swatches v-model="color" />
    </div>
</template>
import Swatches from 'vue swatches'

//import styles too-globally
import "vue-swatches/dist/vue-swatches.min.css"

export default {
    components: {Swatches}, // window.VueSwatches.default - from CDN
    data () {
        return {
            color: '#1CA085'
        }
    },
}



// import colorPicker from '@caohenghu/vue-colorpicker'

// export default {
//     components: {
//         colorPicker,
//     },
//     data() {
//         return {
//             color: '#59c7f9',
//             suckerCanvas: null,
//             suckerArea: [],
//             isSucking: false,
//         }
//     },
//     methods: {
//         changeColor(color) {
//             const {rgba: {r, g, b, a}} = color
//             this.color = `rgba(${r, g, b, a})`
//         },
//         openSucker(isOpen) {
//             if (isOpen) {
//                 // ... canvas be created
//                 // this.suckerCanvas = canvas
//                 // this.suckerArea = [x1, y1, x2, y2]
//             } else {
//                 // this.suckerCanvas && this.suckerCanvas.remove
//             }
//         },
//     },
// },