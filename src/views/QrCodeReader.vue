<template>
    <div>
        <Menu />

        <div id="container">
            <vue-qr-reader v-on:code-scanned="codeScanned" :responsive="true" />
        </div>
    </div>
</template>

<script>
    import Menu from '../components/QrCodeMenu.vue'
    import VueQrReader from 'vue-qr-reader/dist/lib/vue-qr-reader.umd.js';

    export default {
        components: {
            Menu,
            VueQrReader
        },
        methods: {
            codeScanned (scannedString) {
                console.log(scannedString)

                window.open(scannedString, '_blank');
            }
        }
    };
</script>
