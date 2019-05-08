<template>
    <div>
        <ScheduleMenu :title="currentDaySchedule.title" :rooms="currentDaySchedule.rooms" />

        <div class="container">
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
    import Room from '../components/Room.vue'
    
    export default {
        data()
        {
            return {
                scheduleService: new ScheduleService(),
                dayNumber: this.$route.params.dayNumber,
                currentDaySchedule: {},
                loading: true
            }
        },
        methods: {
            fetchDatas: function ()
            {
                if(navigator.onLine) {
                    this.scheduleService.fetch()
                }

                let schedule = this.scheduleService.get();

                this.currentDaySchedule = schedule.days.find(d => d.day == this.dayNumber);

                this.loading = false;
            }
        },
        computed: {
            currentRoomEvents: function () {
                let schedule = this.scheduleService.get();

                let dayNumber = this.$route.params.dayNumber;
                let roomNumber = this.$route.params.roomNumber;

                let currentDaySchedule = schedule.days.find(d => d.day == dayNumber);
                let currentRoom = currentDaySchedule.rooms[roomNumber-1];

                return currentRoom.events;
            }
        },
        components: {
            ScheduleMenu,
            Room
        },
        beforeMount() {
            this.fetchDatas();
        }
    }
</script>

<style>
    div.container {
        padding-top: 120px;
        padding-bottom: 60px;
    }
</style>