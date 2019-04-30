<template>
    <div class="row">
        <div v-for="(day, index) in days" :key="index" class="card rounded" @click="openDayView(day)">
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{{ day.title }}</span>
                <p><a>{{ day.date }}</a></p>
            </div>
        </div>
    </div>
</template>

<script>
    import ScheduleService from '../services/ScheduleService'
    
    export default {
        data()
        {
            return {
                days: null,
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
                this.days = schedule.days

                this.loading = false;
            },
            
            openDayView: function (day) {
                this.$router.push({ name: 'ScheduleDay', params: { dayNumber: day.day, roomNumber: 1 }});
            }
        },
        mounted() {
            this.fetchDatas();    
        }
    }
</script>

<style scoped>
    div.card {
        margin-bottom: 50px;
    }
</style>