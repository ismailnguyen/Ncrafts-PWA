<template>
    <div>
        <ScheduleMenu :title="currentDaySchedule.title" :rooms="currentDaySchedule.rooms" />

        <div class="container">
            <div class="switch right">
                <label>
                    All
                    <input type="checkbox" v-model="isMyAgendaEnabled">
                    <span class="lever"></span>
                    My agenda
                </label>
            </div>

            <Room :events="currentRoomEvents" :isMyAgendaEnabled="isMyAgendaEnabled" />
        </div>

        <div id="feedbackModal" class="modal bottom-sheet">
            <FeedbackModal />
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
    import FeedbackModal from '../components/FeedbackModal.vue'
    
    export default {
        data()
        {
            return {
                dayNumber: this.$route.params.dayNumber,
                currentDaySchedule: {},
                isMyAgendaEnabled: false,
                loading: true
            }
        },
        methods: {
            fetchDatas: function ()
            {
                if(navigator.onLine) {
                    let scheduleService = new ScheduleService();

                    scheduleService
                    .get()
                    .then(schedule => {
                        localStorage.setItem('schedule', JSON.stringify(schedule));
                    })
                }

                let schedule = JSON.parse(localStorage.getItem('schedule'));

                this.currentDaySchedule = schedule.days.find(d => d.day == this.dayNumber);

                this.loading = false;
            }
        },
        computed: {
            currentRoomEvents: function () {
                let schedule = JSON.parse(localStorage.getItem('schedule'));

                let dayNumber = this.$route.params.dayNumber;
                let roomNumber = this.$route.params.roomNumber;

                let currentDaySchedule = schedule.days.find(d => d.day == dayNumber);
                let currentRoom = currentDaySchedule.rooms[roomNumber-1];

                return currentRoom.events;
            }
        },
        components: {
            ScheduleMenu,
            Room,
            FeedbackModal
        },
        beforeMount() {
            this.fetchDatas();
        },
        mounted() {
            this.isMyAgendaEnabled = JSON.parse(localStorage.getItem('myAgendaEnabled')) || false;
        },
        watch: {
            isMyAgendaEnabled: function (newValue, oldValue) {
                this.isMyAgendaEnabled = newValue;

                localStorage.setItem('myAgendaEnabled', newValue);
            }
        }
    }
</script>

<style>
    div.container {
        padding-top: 120px;
    }
</style>