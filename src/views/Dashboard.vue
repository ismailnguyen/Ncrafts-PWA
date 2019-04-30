<template>
    <div>
        <Menu />
    
        <div id="schedule" class="container">
            <ScheduleOverview />
        </div>

        <div id="speakers" class="container">
            <Speakers />
        </div>
    </div>
</template>

<script>
    import Menu from '../components/Menu.vue'
    import ScheduleOverview from '../views/ScheduleOverview.vue'
    import Speakers from '../views/Speakers.vue'
    
    export default {
        components: {
            Menu,
            ScheduleOverview,
            Speakers
        }
    }
</script>

<style>
    div#schedule {
        padding-top: 30vh;
    }
</style>