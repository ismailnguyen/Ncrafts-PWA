<template>
    <div>
        <ScheduleMenu :title="currentDaySchedule.title" :rooms="currentDaySchedule.rooms" />

        <div v-if="currentRoomNumber == 0" class="container">
            <RoomAllEvents :events="currentDayEvents" />
        </div>

        <div v-else class="container">
            <Room :events="currentRoomEvents" />
        </div>

        <div class="progress" v-show="loading">
            <div class="indeterminate"></div>
        </div>
    </div>
</template>

<script>
    import ScheduleService from '../services/ScheduleService'
    import ScheduleMenu from '../components/ScheduleMenu.vue'
    import RoomAllEvents from '../components/RoomAllEvents.vue'
    import Room from '../components/Room.vue'
    
    export default {
        data()
        {
            return {
                scheduleService: new ScheduleService(),
                currentDaySchedule: {},
                loading: true
            }
        },
        methods: {
            fetchDatas: function ()
            {
                if(navigator.onLine) {
                    this.scheduleService.fetch()
                            .then(schedule => {
                                this.currentDaySchedule = schedule.days.find(d => d.day == this.dayNumber);
                                this.loading = false;
                            })
                }
                else {
                    let schedule = this.scheduleService.get();
                    this.currentDaySchedule = schedule.days.find(d => d.day == this.dayNumber)
                    this.loading = false;
                }
            },

            removeDuplicateEvents: function (events) {
                return events.map(e => e.title)

                // store the keys of the unique objects
                .map((e, i, final) => final.indexOf(e) === i && i)

                // eliminate the dead keys & store unique objects
                .filter(e => events[e]).map(e => events[e]);
            },

            sortByTime: function (event1, event2) {
                let event1Time = Number(event1.time.split(':')[0])
                let event2Time = Number(event2.time.split(':')[0])

                if (event1Time < event2Time){
                    return -1;
                }
                if (event1Time > event2Time){
                    return 1;
                }
                return 0;
            }
        },
        computed: {
            dayNumber: function () {
                return this.$route.params.dayNumber;
            },

            currentRoomNumber: function () {
                return this.$route.params.roomNumber;
            },

            currentDayEvents: function () {
                let schedule = this.scheduleService.get();

                let currentDaySchedule = schedule.days.find(d => d.day == this.dayNumber);

                let sortedEvents = currentDaySchedule.rooms.map(room => room.events).flat().sort(this.sortByTime);
                let sortedUniquesEvents = this.removeDuplicateEvents(sortedEvents);

                return sortedUniquesEvents;
            },

            currentRoomEvents: function () {
                let schedule = this.scheduleService.get();

                let currentDaySchedule = schedule.days.find(d => d.day == this.dayNumber);

                let currentRoom = currentDaySchedule.rooms[this.currentRoomNumber-1];

                return currentRoom.events;
            }
        },
        components: {
            ScheduleMenu,
            RoomAllEvents,
            Room
        },
        beforeMount() {
            this.fetchDatas();
        },
        mounted() {
            $('.tabs').tabs();
            $(".button-collapse").sideNav();
        }
    }
</script>

<style>
    div.container {
        padding-top: 120px;
        padding-bottom: 60px;
    }
</style>
