<template>
    <div class="speaker col s12 m6" @click="showDetails = !showDetails">
        <div class="card rounded">
            <div class="card-image waves-effect waves-block waves-light rounded">
                <img class="activator" :src="'//ncrafts.io' + speaker.image">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{{speaker.speakerName}}<i class="material-icons right">more_vert</i></span>
                <p><a v-html="formatMarkdown(speaker.bioxs)"></a></p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4"><span v-html="formatMarkdown(speaker.bioxs)"></span><i class="material-icons right">close</i></span>
                <p v-html="formatMarkdown(speaker.bio)"></p>
            </div>
        </div>
    </div>
</template>

<script>
    import showdown from 'showdown';

    export default {
        props: ['speaker'],
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

<style scoped>
    .speaker {
        margin-top: 40px;
        margin-bottom: 40px;
    }
</style>
