<template>
    <div>
        <Menu />
    
        <div id="schedule" class="container">
            <div class="row">
                <div v-for="(day, index) in days" :key="index" class="card">
                    <div class="card-content">
                        <router-link :to="'/Schedule/' + day.day + '/0'">
                            <span class="card-title activator grey-text text-darken-4">{{ day.title }}</span>
                            <p><a>{{ day.date }}</a></p>
                        </router-link>
                    </div>
                </div>

                <div class="card secondary-background-color">
                    <div class="card-content">
                        <router-link to="/MyAgenda">
                            <span class="card-title activator secondary-background-color">My agenda</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Menu from '../components/Menu.vue'
    import ScheduleService from '../services/ScheduleService'
    
    export default {
        data()
        {
            return {
                scheduleService: new ScheduleService(),
                days: null,
                loading: true,
            }
        },
        components: {
            Menu
        },
        methods: {
            fetchDatas: function ()
            {
                if(navigator.onLine) {
                    this.scheduleService.fetch()
                            .then(schedule => {
                                this.days = schedule.days;
                                this.loading = false;
                            });
                }
                else {
                    let schedule = this.scheduleService.get();
                    this.days = schedule.days;
                    this.loading = false;
                }
            }
        },
        mounted() {
            this.fetchDatas();
            $('.tabs').tabs();
            $(".button-collapse").sideNav();
        }
    }
</script>
