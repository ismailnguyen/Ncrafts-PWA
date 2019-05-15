<template>
    <ul id="slide-out" class="side-nav">
        <li class="side-nav-header center">
            <img src="/assets/img/logo.png" height="70">
        </li>

        <li><div class="divider"></div></li>
        <li><a href="/MyAgenda/1" :class="isCurrentRoute('MyAgenda') ? 'secondary-background-color rounded': 'rounded'">My agenda</a></li>
        <li><div class="divider"></div></li>
        <li><a href="/" :class="isCurrentRoute('Schedule') ? 'secondary-background-color rounded': 'rounded'">Schedule</a></li>

        <li><div class="divider"></div></li>
        <li><a href="/Speakers" :class="isCurrentRoute('Speakers') ? 'secondary-background-color rounded': 'rounded'">Speakers</a></li>

        <li><div class="divider"></div></li>
        <li><a href="/QrCodeReader" :class="isCurrentRoute('QrCodeReader') ? 'secondary-background-color rounded': 'rounded'">QR Code Reader</a></li>

        <li><div class="divider"></div></li>
        <li><a href="https://videos.ncrafts.io/" target="_blank" class="rounded">Videos</a></li>

        <li><div class="divider"></div></li>
        <li><a href="/Intro" :class="isCurrentRoute('Intro') ? 'secondary-background-color rounded': 'rounded'">Help</a></li>

        <li><div class="divider"></div></li>
        <li><a href="https://ncrafts.io/?force-desktop" class="rounded">Desktop version</a></li>

        <li><div class="divider"></div></li>
        <li><a class="subheader rounded-top">Follow us</a></li>
        <li class="rounded-bottom">
            <table>
                <tr>
                    <td>
                        <a href="https://twitter.com/ncraftsConf"><img src="/assets/img/icon_twitter.png" alt="Twitter"></a>
                    </td>
                    <td>
                        <a href="https://github.com/ncraftsconf/"><img src="/assets/img/icon_github.png" alt="Github"></a>
                    </td>
                    <td>
                        <a href="https://vimeo.com/newcrafts"><img src="/assets/img/icon_vimeo.png" alt="Vimeo"></a>
                    </td>
                </tr>
            </table>
        </li>
    </ul>
</template>

<script>
    import EventMini from '../components/EventMini.vue'

    export default {
        props: ['events'],
        components: {
            EventMini,
        },
        methods: {
            isCurrentRoute: function (name) {
                return this.$route.name.startsWith(name);
            }
        }
    }
</script>

<style scoped>
    .side-nav {
        background-color: #26262733;
        padding-bottom: 140px;
        position: fixed; /* Temp fix for Firefox */
        overflow: scroll;
    }
  
    .side-nav::before {
        content: "";
        position: absolute;
        z-index: -2;
        top: 0; right: 0; bottom: 0; left: 0;
        background: inherit;
        filter: contrast(1) blur(5px) grayscale(1) brightness(1);
        margin: -10px;
        -webkit-filter: blur(10px);
            filter: blur(10px);
    }

    .side-nav::after {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0; right: 0; bottom: 0; left: 0;
        background-color: #262627cc;
    }

    .side-nav li {
        margin-left: 10px;
        margin-right: 10px;
    }

    .divider {
        background: none;
    }

    .side-nav li>a,
    .side-nav table {
        background-color: #262627;
        color: rgba(255, 255, 255 ,0.87);
    }

    .rounded {
        border-radius: 15px;
    }

    .rounded-top {
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }

    .rounded-bottom {
        border-bottom-right-radius: 15px;
        border-bottom-left-radius: 15px;
    }

    .side-nav .subheader {
        color: rgba(255, 255, 255, 0.54);
    }
</style>