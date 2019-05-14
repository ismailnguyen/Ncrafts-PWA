<template>
    <div class="row">
        <div class="col s12">
            <Event v-for="(event, index) in events" :key="index" :event="event" />
        </div>
    </div>
</template>

<script>
    import Event from '../components/Event.vue'

    export default {
        props: ['events'],
        components: {
            Event
        }
    }
</script>