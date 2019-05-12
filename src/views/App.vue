<template>
    <router-view></router-view>
</template>

<script>
    export default {
        mounted() {
            $('.tabs').tabs();
            $(".button-collapse").sideNav();
        }
    }
</script>

<style>
    html {
        zoom: reset;
    }

    .secondary-background-color {
        background: #39c8b7;
        color: #fff;
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

    div#schedule {
        padding-top: 30vh;
    }

    div#schedule>.row>div.card {
        margin: -8px 0;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
</style>