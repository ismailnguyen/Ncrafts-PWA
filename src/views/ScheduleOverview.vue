<template>
    <div class="row">
        <div v-for="(day, index) in days" :key="index" class="card rounded">
            <div class="card-content">
                <a :href="'/Schedule/' + day.day + '/1'">
                    <span class="card-title activator grey-text text-darken-4">{{ day.title }}</span>
                    <p><a>{{ day.date }}</a></p>
                </a>
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
                scheduleService: new ScheduleService(),
                days: null,
                loading: true
            }
        },
        methods: {
            fetchDatas: function ()
            {
                if(navigator.onLine) {
                    this.scheduleService.fetch()
                            .then(schedule => this.days = schedule.days);
                }
                else {
                    let schedule = this.scheduleService.get();
                    this.days = schedule.days;
                }

                this.loading = false;
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