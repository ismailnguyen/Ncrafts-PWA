<template>
    <div>
        <router-view></router-view>

        <div class="fixed-action-btn">
            <a class="btn-floating btn-large green waves-effect waves-light btn modal-trigger" href="#contactModal">
                <i class="large material-icons">mail</i>
            </a>
        </div>

        <div id="contactModal" class="modal bottom-sheet">
            <ContactModal />
        </div>
    </div>
</template>

<script>
    import Menu from '../components/Menu.vue'
    import ContactModal from '../components/ContactModal.vue'
    
    export default {
        components: {
            ContactModal
        },
        mounted() {
            $(".button-collapse").sideNav();
            $('.modal').modal();
        }
    }
</script>

<style>
    nav {
        position: fixed;
        z-index: 9999;
    }

    nav.header {
        background-color: #262627eb;
    }

    nav a.button-collapse {
        color: #39c8b7;
    }
    
    a {
        color: #39c8b7;
    }

    .tabs.tabs-transparent .tab a:hover, .tabs.tabs-transparent .tab a.active {
        color: #39c8b7;
    }

    .tabs.tabs-transparent .indicator {
        background-color: #39c8b7;
    }

    .brand-logo {
        margin: 10px;
    }

    div.container {
        padding-top: 120px;
    }

    div.card {
        margin-bottom: 40px;
    }

    div.circle {
        border-radius: 50px;
    }

    div.rounded {
        border-radius: 10px;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
</style>