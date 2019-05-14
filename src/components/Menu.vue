<template>
    <nav class="header nav-extended">
        <div class="nav-wrapper">
            <Header />

            <SideNav />
        </div>

        <div class="nav-content">
            <ul class="tabs tabs-transparent">
                <li class="tab" @click="openView('ScheduleOverview')"><a :class="isTabActive('ScheduleOverview') ? 'active' : ''">Schedule</a></li>
                <li class="tab" @click="openView('Speakers')"><a :class="isTabActive('Speakers') ? 'active' : ''">Speakers</a></li>
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
        },
        methods: {
            openView: function (viewName) {
                this.$router.push({ name: viewName});
            },
            isTabActive: function (tabName) {
                return tabName === this.$route.name;
            }
        }
    }
</script>