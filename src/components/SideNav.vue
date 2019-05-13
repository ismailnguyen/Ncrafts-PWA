<template>
    <ul id="slide-out" class="side-nav">
        <li class="side-nav-header center">
            <img src="/assets/img/logo.png" height="100">
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
        background-color: #26262733;
        padding-bottom: 140px;
        box-shadow: 0 20px 50px rgba(85, 85, 85, 0.8);
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

    .side-nav li>a {
        color: rgba(255, 255, 255 ,0.87);
    }

    .side-nav .subheader {
        color: rgba(255, 255, 255, 0.54);
    }

    .side-nav-header {
        margin: 40px;
    }

    li.side-nav-header>a {
        color: #39c8b7;
    }

    .side-nav li>a>i.material-icons {
        color: #fff;
    }
</style>