<template>
    <div class="col s12 m6" @click="showDetails = !showDetails">
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" :src="event.avatar">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{{event.title}}<i class="material-icons right">more_vert</i></span>
                <p><a>{{event.speaker}}</a></p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{{ event.title }}<i class="material-icons right">close</i></span>
                <p>{{event.description}}</p>
                <div class="card-action">
                    <div class="chip" v-for="(tag, index) in event.tags.split(',')" v-bind:key="index">{{tag}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['event'],
        data()
        {
            return {
                showDetails: false
            }
        }
    }
</script>