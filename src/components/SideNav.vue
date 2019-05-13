<template>
    <ul id="slide-out" class="side-nav">
        <li class="side-nav-header">
            <img src="/assets/img/logo.png" height="200">
        </li>

        <li><a href="/MyAgenda" :class="isCurrentPath('/MyAgenda') ? 'secondary-background-color': ''">My agenda</a></li>
        <li><div class="divider"></div></li>

        <li><a href="/" :class="isCurrentPath('/') ? 'secondary-background-color': ''">Schedule</a></li>
        <li><a href="/Speakers" :class="isCurrentPath('/Speakers') ? 'secondary-background-color': ''">Speakers</a></li>

        <li><div class="divider"></div></li>

        <li><a href="/QrCodeReader" :class="isCurrentPath('/QrCodeReader') ? 'secondary-background-color': ''">QR Code Reader</a></li>

        <li><div class="divider"></div></li>
        
        <li><a href="https://ncrafts.io/" target="_blank">NCrafts.io</a></li>
        <li><a href="https://videos.ncrafts.io/" target="_blank">Videos</a></li>

        <li><div class="divider"></div></li>
        <li><a href="/Intro" :class="isCurrentPath('/Intro') ? 'secondary-background-color': ''">Help</a></li>
        <li><a href="https://ncrafts.io/"><i class="material-icons">desktop_windows</i> Desktop version</a></li>

        <li><div class="divider"></div></li>
        <li><a class="subheader">Follow us</a></li>
        <li>
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
            isCurrentPath: function (path) {
                return this.$route.path === path;
            }
        }
    }
</script>

<style scoped>
    .side-nav {
        background-color: #262627;
    }

    .side-nav li>a {
        color: rgba(255, 255, 255 ,0.87);
    }

    .side-nav .subheader {
        color: rgba(255, 255, 255, 0.54);
    }

    .side-nav-header {
        margin: 60px;
    }

    li.side-nav-header>a {
        color: #39c8b7;
    }

    .side-nav li>a>i.material-icons {
        color: #fff;
    }
</style>
