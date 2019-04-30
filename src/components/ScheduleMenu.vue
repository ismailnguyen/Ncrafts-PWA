<template>
    <nav class="header nav-extended">
        <div class="nav-wrapper ">
            <a href="#!" class="brand-logo center">{{ title }}</a>
            <a href="#" data-activates="slide-out" class="show-on-large button-collapse"><i class="material-icons">menu</i></a>

            <SideNav />
        </div>

        <div class="nav-content">
            <ul class="tabs tabs-transparent">
                <li v-for="(room, index) in rooms" :key="index" class="tab" @click="openRoomView(index+1)">
                    <a v-if="index == (currentRoomIndex-1)" class="active">{{ room.room }}</a>
                    <a v-else>{{ room.room }}</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import SideNav from '../components/SideNav.vue'

    export default {
        props: ['title', 'rooms'],
        data() {
            return {
                dayNumber: this.$route.params.dayNumber
            }
        },
        components: {
            SideNav
        },
        methods: {
            openRoomView: function (roomNumber) {
                this.$router.push({ name: 'ScheduleDay', params: { dayNumber: this.dayNumber, roomNumber: roomNumber }});
            },

            currentRoomIndex: function () {
                return this.$route.params.roomNumber;
            }
        }
    }
</script>