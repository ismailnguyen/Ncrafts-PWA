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
                    -- I don't know what to put here --
                </p>
                <p>
                    -- I don't know what to put here --
                </p>
                <p>
                    -- I don't know what to put here --
                </p>
                <p>
                    -- I don't know what to put here --
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
                location.reload();
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