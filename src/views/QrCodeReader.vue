<template>
    <div>
        <div>Value: {{ scanned }}</div>
        <vue-qr-reader v-on:code-scanned="codeScanned" :responsive="true" />
    </div>
</template>

<script>
    import VueQrReader from 'vue-qr-reader/dist/lib/vue-qr-reader.umd.js';

    export default {
        data() {
            return {
                scanned: ''
            }
        },
        components: {
            VueQrReader
        },
        methods: {
            codeScanned (event) {
                this.scanned = event.detail[0];
            }
        }
    };
</script>
