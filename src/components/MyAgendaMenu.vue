<template>
    <nav class="header nav-extended">
        <div class="nav-wrapper">
            <Header :title="title" />

            <SideNav />
        </div>

        <div class="nav-content">
            <ul class="tabs tabs-transparent">
                <li v-for="(day, index) in days" :key="index" class="tab" @click="openDayView(index+1)">
                    <a v-if="index == (currentDayNumber)" class="active">{{ day.title }}</a>
                    <a v-else>{{ day.title }}</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import Header from '../components/Header.vue'
    import SideNav from '../components/SideNav.vue'

    export default {
        props: ['title', 'days'],
        data() {
            return {
                currentDayNumber: this.$route.params.dayNumber,
            }
        },
        components: {
            Header,
            SideNav
        },
        methods: {
            openDayView: function (nextDayNumber) {
                this.$router.push({ name: 'MyAgenda', params: { dayNumber: nextDayNumber }});
            }
        }
    }
</script>