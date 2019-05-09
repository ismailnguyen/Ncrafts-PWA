<template>
    <div :id="event.id" class="event col s12">
        <div class="chip">
            {{ event.time }}
        </div>

        <div class="chip float right secondary-background-color">
            {{ event.room }}
        </div>

        <div class="card rounded" @click="showDetails = !showDetails">
            <div class="card-image waves-effect waves-block waves-light rounded">
                <img class="activator" :src="'//ncrafts.io' + event.speakerPhoto">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{{event.title}}<i class="material-icons right">more_vert</i></span>
                <p><a>{{event.speakerName}}</a></p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{{ event.title }}<i class="material-icons right">close</i></span>
                <p v-html="formatMarkdown(event.description)"></p>
            </div>
        </div>
    </div>
</template>

<script>
    import showdown from 'showdown';

    export default {
        props: ['event'],
        data()
        {
            return {
                showDetails: false
            }
        },
        methods: {
            formatMarkdown: function (value) {
                let markdownConverter = new showdown.Converter();

                return markdownConverter.makeHtml(value);
            }
        }
    }
</script>