<template>
    <div class="container">
        <div  class="event col s12 m6 l4">
        <div class="chip">
            NCrafts 2019
        </div>

        <div class="card rounded">
            <div class="card-reveal">
                <span @click="closeIntro()" class="card-title grey-text text-darken-4">Welcome aboard !<i class="material-icons right">close</i></span>
                <p>
                    - Access and build your full agenda with <b>session</b> and <b>speaker</b> details to help you find the right sessions for you
                </p>
                <p>
                    - To build your agenda you can <b>bookmark</b> your preferred sessions
                </p>
                <p>
                    - Once built, you can have access to your agenda <b>offline!</b>, simply go to [<b>my agenda</b>]
                </p>
                <p>
                    - Share your thoughts with the speaker and give your <b>feedback</b>
                </p>
            </div>
            <div class="card-action">
                <a @click="closeIntro()" class="btn">Let's go !</a>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        methods: {
            closeIntro: function () {
                localStorage.setItem('introAlreadyShown', true);
                this.$router.push({ name: 'ScheduleOverview'});
            }
        }
    }
</script>

<style scoped>
    div.container {
        padding-top: 50px;
    }

    .card-image {
        background-color: #262627;
    }

    .card-reveal {
        display: block;
        position: relative;
    }
</style>