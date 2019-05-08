<template>
    <div class="row">
        <Speaker v-for="(speaker, index) in speakers" v-bind:key="index" :speaker="speaker" />

        <div class="progress" v-show="loading">
            <div class="indeterminate"></div>
        </div>
    </div>
</template>

<script>
    import SpeakersService from '../services/SpeakersService'
    import Speaker from '../components/Speaker.vue'
    
    export default {
        data()
        {
            return {
                speakersService: new SpeakersService(),
                speakers: [],
                loading: true
            }
        },
        methods: {
            fetchDatas: function ()
            {
                if(navigator.onLine) {
                    this.speakersService.fetch()
                }

                this.speakers = this.speakersService.get()

                this.loading = false;
            }
        },
        components: {
            Speaker
        },
        mounted() {
            this.fetchDatas();    
        }
    }
</script>