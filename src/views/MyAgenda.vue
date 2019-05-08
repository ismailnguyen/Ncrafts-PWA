<template>
    <div>
        <MyAgendaMenu :title="'My Agenda'" :days="days" />

        <div class="container">
            <Room :events="currentDayBookmarkedEvents" />
        </div>

        <div class="progress" v-show="loading">
            <div class="indeterminate"></div>
        </div>
    </div>
</template>

<script>
    import ScheduleService from '../services/ScheduleService'
    import MyAgendaMenu from '../components/MyAgendaMenu.vue'
    import Room from '../components/Room.vue'
    
    export default {
        data()
        {
            return {
                dayNumber: this.$route.params.dayNumber || 2,
                days: [],
                loading: true,
                defaultDayNumber: 2
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

                this.days = schedule.days.filter(day => day.title.includes('Day'));

                this.loading = false;
            },

            removeDuplicateEvents: function (events) {
                return events.map(e => e.title + e.time)

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
            currentDayBookmarkedEvents: function () {
                let schedule = JSON.parse(localStorage.getItem('schedule'));
                let bookmarkedEvents = JSON.parse(localStorage.getItem('bookmark'));

                let dayNumber = this.$route.params.dayNumber + 1 || this.defaultDayNumber;

                let currentDaySchedule = schedule.days.find(d => d.day == dayNumber);
                
                let allEventsOfCurrentDay = [].concat.apply([], currentDaySchedule.rooms.map(room => room.events));

                let bookmarkedEventsOfCurrentDay = allEventsOfCurrentDay
                                                    .filter(event => event.type.includes('Talk') && bookmarkedEvents.includes(event.id));
                
                let sortedBookmarkedEventsOfCurrentDay = bookmarkedEventsOfCurrentDay.sort(this.sortByTime);

                let sortedUniquesBookmarkedEventsOfCurrentDay = this.removeDuplicateEvents(sortedBookmarkedEventsOfCurrentDay);

                return sortedUniquesBookmarkedEventsOfCurrentDay;
            }
        },
        components: {
            MyAgendaMenu,
            Room
        },
        beforeMount() {
            this.fetchDatas();
        },
    }
</script>

<style>
    div.container {
        padding-top: 120px;
        padding-bottom: 120px;
    }
</style>