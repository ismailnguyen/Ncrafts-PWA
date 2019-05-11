<template>
    <nav class="header nav-extended">
        <div class="nav-wrapper">
            <Header />

            <SideNav />
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