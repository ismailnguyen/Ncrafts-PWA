<template>
    <ul id="slide-out" class="side-nav">
        <li class="side-nav-header">
            <img src="/assets/img/logo.png" height="200">
            <a href="">NewCrafts 2019</a>
        </li>

        <li class="secondary-background-color"><a href="/MyAgenda">My agenda</a></li>
        <li><div class="divider"></div></li>

        <li><a href="/">Schedule</a></li>
        <li><a href="/Speakers">Speakers</a></li>

        <li><div class="divider"></div></li>

        <li><a href="/QrCodeReader">QR Code Reader</a></li>

        <li><div class="divider"></div></li>

        <li><a class="subheader">Follow us</a></li>
        <li><a href="http://ncrafts.io/" target="_blank">NCrafts.io</a></li>
        <li><a href="https://twitter.com/ncraftsConf" target="_blank">Twitter</a></li>
        <li><a href="https://github.com/ncraftsconf/" target="_blank">Github</a></li>
        <li><a href="https://vimeo.com/newcrafts" target="_blank">Vimeo</a></li>
    </ul>
</template>

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
</style>