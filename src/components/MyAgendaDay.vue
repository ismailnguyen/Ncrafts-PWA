<template>
    <div class="row">
        <div v-if="events.length" class="col s12">
            <MyAgendaEvent v-for="(event, index) in events" :key="index" :event="event" />
        </div>

        <div v-else class="col s12">
            <blockquote>
                No events found on your agenda
            </blockquote>
        </div>
    </div>
</template>

<script>
    import MyAgendaEvent from '../components/MyAgendaEvent.vue'

    export default {
        props: ['events'],
        components: {
            MyAgendaEvent
        }
    }
</script>