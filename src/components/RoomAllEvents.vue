<template>
    <div class="row">
        <div class="col s12">
            <EventMini v-for="(event, index) in allEvents" :key="index" :event="event" />
        </div>
    </div>
</template>

<script>
    import EventMini from '../components/EventMini.vue'

    export default {
        props: ['events'],
        components: {
            EventMini,
        },
        computed : {
            allEvents: function () {
                let allEvents = [];

                for (var i=0; i<this.events.length; i++) {
                    let event = this.events[i];

                    if (!allEvents.filter(e => e.type == 'time').map(e => e.time).includes(event.time))
                    {
                        allEvents.push({
                            type: 'time',
                            time: event.time
                        });
                    }
                    
                    allEvents.push(event);
                }

                return allEvents;
            }
        }
    }
</script>