<template>
    <v-layout row wrap>
        <Stock v-for="stock in stocks" :key="stock.id"/>
    </v-layout>
</template>
<script>
import Stock from './Stock'

export default {
    components: {Stock},
    data() {
        return {
            stocks: [
                {id: 1, name: 'Cabaré de Julieta', price: 140},
                {id: 2, name: 'Xéba de Zé Adalto', price: 60},
                {id: 3, name: 'Zona de Zefinha Cangaceira', price: 85},
                {id: 4, name: 'Puteiro XXX-press', price: 140},
            ]
        }
    },
}
</script>
<style lang="css">
    
</style>