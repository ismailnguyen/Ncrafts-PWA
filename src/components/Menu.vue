<template>
    <nav class="header nav-extended">
        <div class="nav-wrapper ">
            <a class="brand-logo center"><img src="assets/img/only_newcrafts_blanc.png" height="40"></a>
            <a data-activates="slide-out" class="show-on-large button-collapse"><i class="material-icons">menu</i></a>

            <SideNav />
        </div>

        <div class="nav-content">
            <ul class="tabs tabs-transparent">
                <li class="tab"><a class="active" href="#schedule">Schedule</a></li>
                <li class="tab"><a href="#speakers">Speakers</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import SideNav from '../components/SideNav.vue'
    
    export default {
        components: {
            SideNav
        }
    }
</script>