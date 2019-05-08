<template>
    <nav class="header nav-extended">
        <div class="nav-wrapper">
            <Header />

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
    import Header from '../components/Header.vue'
    import SideNav from '../components/SideNav.vue'
    
    export default {
        components: {
            Header,
            SideNav
        }
    }
</script>