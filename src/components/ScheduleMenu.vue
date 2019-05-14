<template>
    <nav class="header nav-extended">
        <div class="nav-wrapper">
            <Header :title="title" />

            <SideNav />
        </div>

        <div class="nav-content">
            <ul class="tabs tabs-transparent">
                <li class="tab" @click="openRoomView(0)">
                    <a v-if="currentRoomNumber == 0" class="active">All</a>
                    <a v-else>All</a>
                </li>

                <li v-for="(room, index) in rooms" :key="index" class="tab" @click="openRoomView(index+1)">
                    <a v-if="index == (currentRoomNumber-1)" class="active">{{ room.room }}</a>
                    <a v-else>{{ room.room }}</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import Header from '../components/Header.vue'
    import SideNav from '../components/SideNav.vue'

    export default {
        props: ['title', 'rooms'],
        components: {
            Header,
            SideNav
        },
        methods: {
            openRoomView: function (nextRoomNumber) {
                this.$router.push({ name: 'ScheduleDay', params: { dayNumber: this.currentDayNumber, roomNumber: nextRoomNumber }});
            }
        },
        computed: {
            currentDayNumber: function () {
                return this.$route.params.dayNumber;
            },

            currentRoomNumber: function () {
                return this.$route.params.roomNumber;
            }
        }
    }
</script>

<style>
    .indicator {
        display: none !important; 
    }
</style>
