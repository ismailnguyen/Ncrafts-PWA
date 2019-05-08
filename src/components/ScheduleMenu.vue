<template>
    <nav class="header nav-extended">
        <div class="nav-wrapper">
            <Header :title="title" />

            <SideNav />
        </div>

        <!--<div class="nav-content">
            <ul class="tabs tabs-transparent">
                <li v-for="(room, index) in rooms" :key="index" class="tab" @click="openRoomView(index+1)">
                    <a v-if="index == (currentRoomNumber-1)" class="active">{{ room.room }}</a>
                    <a v-else>{{ room.room }}</a>
                </li>
            </ul>
        </div>-->

        <div class="nav-chip chip" v-for="(room, index) in rooms" :key="index">
            <a v-if="index == (currentRoomNumber-1)" :href="'/Schedule/'+currentDayNumber+'/'+(index+1)" class="active">{{ room.room }}</a>
            <a v-else :href="'/Schedule/'+currentDayNumber+'/'+(index+1)">{{ room.room }}</a>
        </div>
    </nav>
</template>

<script>
    import Header from '../components/Header.vue'
    import SideNav from '../components/SideNav.vue'

    export default {
        props: ['title', 'rooms'],
        data() {
            return {
                currentDayNumber: this.$route.params.dayNumber,
                currentRoomNumber: this.$route.params.roomNumber,
            }
        },
        components: {
            Header,
            SideNav
        },
        methods: {
            openRoomView: function (nextRoomNumber) {
                this.$router.push({ name: 'ScheduleDay', params: { dayNumber: this.currentDayNumber, roomNumber: nextRoomNumber }});
            }
        }
    }
</script>

<style scoped>
    .nav-chip {
        color: black;
        background: none;
        padding: 0 10px;
        font-size: 14px;
        text-transform: uppercase;
    }

    .nav-chip>a.active {
        color: #39c8b7;
        border-bottom: 1px solid #39c8b7;
    }
</style>