<template>
    <div>
        <MyAgendaMenu :title="'My Agenda'" :days="days" />

        <div class="container">
            <MyAgendaDay :events="currentDayBookmarkedEvents" />
        </div>

        <div class="progress" v-show="loading">
            <div class="indeterminate"></div>
        </div>
    </div>
</template>

<script>
    import ScheduleService from '../services/ScheduleService'
    import BookmarkService from '../services/BookmarkService'
    import MyAgendaMenu from '../components/MyAgendaMenu.vue'
    import MyAgendaDay from '../components/MyAgendaDay.vue'
    
    export default {
        data()
        {
            return {
                scheduleService: new ScheduleService(),
                bookmarkService: new BookmarkService(),
                days: [],
                loading: true,
                defaultDayNumber: 1
            }
        },
        methods: {
            fetchDatas: function ()
            {
                if(navigator.onLine) {
                    this.scheduleService.fetch()
                            .then(schedule => {
                                this.days = schedule.days.filter(day => day.title.includes('Day'));
                                this.loading = false;
                            })
                }
                else {
                    let schedule = this.scheduleService.get();
                    this.days = schedule.days.filter(day => day.title.includes('Day'));
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
                let event1Time = event1.time.split(' - ')[0];
                let event2Time = event2.time.split(' - ')[0];

                if (event1Time < event2Time){
                    return -1;
                }
                if (event1Time > event2Time){
                    return 1;
                }
                return 0;
            },

            isBreak: function(event) {
                return event.type.includes('break') || event.type.includes('lunch');
            }
        },
        computed: {
            dayNumber: function () {
                return this.$route.params.dayNumber || this.defaultDayNumber;
            },

            currentDayBookmarkedEvents: function () {
                let schedule = this.scheduleService.get();
                let bookmarkedEvents = this.bookmarkService.get();

                let currentDaySchedule = schedule.days.find(d => d.day == (Number(this.dayNumber) + 1));
                
                let allEventsOfCurrentDay = [].concat.apply([], currentDaySchedule.rooms.map(room => room.events));

                let bookmarkedEventsOfCurrentDay = allEventsOfCurrentDay.filter(event => bookmarkedEvents.includes(event.id) || this.isBreak(event));
                
                let sortedBookmarkedEventsOfCurrentDay = bookmarkedEventsOfCurrentDay.sort(this.sortByTime);

                let sortedUniquesBookmarkedEventsOfCurrentDay = this.removeDuplicateEvents(sortedBookmarkedEventsOfCurrentDay);

                let sortedBookmarkedsEventsWithUniqueTime = [];

                for (var i=0; i<sortedUniquesBookmarkedEventsOfCurrentDay.length; i++) {
                    let event = sortedUniquesBookmarkedEventsOfCurrentDay[i];

                    if (!sortedBookmarkedsEventsWithUniqueTime.filter(e => e.type == 'time').map(e => e.time).includes(event.time))
                    {
                        sortedBookmarkedsEventsWithUniqueTime.push({
                            type: 'time',
                            time: event.time
                        });
                    }
                    
                    sortedBookmarkedsEventsWithUniqueTime.push(event);
                }

                return sortedBookmarkedsEventsWithUniqueTime;
            }
        },
        components: {
            MyAgendaMenu,
            MyAgendaDay
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
        padding-bottom: 120px;
    }
</style>