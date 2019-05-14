<template>
    <router-view></router-view>
</template>

<script>
    export default {
        mounted() {
            $('.tabs').tabs();
            $(".button-collapse").sideNav();

            let introAlreadyShown = JSON.parse(localStorage.getItem('introAlreadyShown'));

            if (!introAlreadyShown) {
                this.$router.push({ name: 'Intro'});
            }
        }
    }
</script>

<style>
    html {
        zoom: reset;
    }

    .secondary-background-color {
        background: #39c8b7 !important;
        color: #fff !important;
    }
    
    nav {
        position: fixed;
        z-index: 9999;
    }

    nav.header {
        background-color: #262627eb;
        box-shadow: 0 12px 45px -8px #2626279c;
    }

    nav a.button-collapse {
        color: #39c8b7;
    }

    a {
        color: #39c8b7;
    }

    .tabs.tabs-transparent .tab a:hover, .tabs.tabs-transparent .tab a.active {
        color: #39c8b7;
        border-bottom: 2px solid #39c8b7;
    }

    .tabs.tabs-transparent .indicator {
        background-color: #39c8b7;
    }

    .container .row {
        margin-left: auto;
        margin-right: auto;
    }

    .brand-logo {
        margin: 10px;
    }

    div.container {
        padding-top: 120px;
    }

    div.circle {
        border-radius: 50px;
    }

    .rounded {
        border-radius: 20px;
        box-shadow: 0 2px 43px -4px rgba(0,0,0,.19);
    }

    .rounded-top {
        border-top-left-radius: 20px !important;
        border-top-right-radius: 20px !important;
    }

    .rounded-bottom {
        border-bottom-right-radius: 20px !important;
        border-bottom-left-radius: 20px !important;
    }

    div#schedule {
        padding-top: 30vh;
    }

    div#schedule>.row>div.card {
        margin: -8px 0;
        box-shadow: 0 2px 43px -4px rgba(0,0,0,.19);
    }
</style>
