<template>
    <div>
        <nav class="blue-grey darken-4">
            <div class="nav-wrapper">
                <a href="#!" class="brand-logo center">NewCrafts</a>
                <a href="#" data-activates="slide-out" class="show-on-large button-collapse"><i class="material-icons">menu</i></a>

                <ul id="slide-out" class="side-nav">
                    <li>
                    <img class="circle" src="images/logo.png">
                        <a href="">NCrafts 2018</a>
                    </li>
                    <li><a href="">Lien 1</a></li>
                    <li><a href="">Lien 2</a></li>
                    <li><a href="">Lien 3</a></li>

                    <li><div class="divider"></div></li>

                    <li><a class="subheader">Suivez-nous</a></li>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">Github</a></li>
                    <li><a href="">Vimeo</a></li>
                </ul> 
            </div>
        </nav>

        <div class="container">

            <div class="fixed-action-btn">
                <a class="btn-floating btn-large red waves-effect waves-light btn modal-trigger" href="#contactModal">
                    <i class="large material-icons">content_paste</i>
                </a>
            </div>

            <div class="row ">
                <Event v-for="(event, index) in events" v-bind:key="index" :event="event" />
            </div>

            <div id="contactModal" class="modal bottom-sheet">
                <FooterModal />
            </div>

            <div class="progress" v-show="loading">
                <div class="indeterminate"></div>
            </div>
        </div> 
    </div>
</template>

<script>
    import EventsService from '../services/EventsService'
    import FooterModal from './FooterModal.vue'
    import Event from './Event.vue'
    
    export default {
        data()
        {
            return {
                events: [],
                loading: true
            }
        },
        methods: {
            fetchEvents: function ()
            {
                let eventsService = new EventsService();

                this.events = eventsService.get()

                this.loading = false;
            }
        },
        components: {
            Event,
            FooterModal
        },
        mounted() {
            $(".button-collapse").sideNav();
            $('.modal').modal();

            this.fetchEvents();            
        }
    }
</script>