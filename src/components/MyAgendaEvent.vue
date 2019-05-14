<template>
    <div v-show="isVisible" :id="event.id" class="event col s12 m6 l4">
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
                <a class="btn-floating halfway-fab waves-effect waves-light red" @click="removeBookmark()">
                    <i class="material-icons">bookmark</i>
                </a>
                <span class="card-title activator grey-text text-darken-4">{{event.title}}<i class="material-icons right">more_vert</i></span>
                <p><a>{{event.speakerName}}</a></p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{{ event.title }}<i class="material-icons right">close</i></span>
                <p v-html="formatMarkdown(event.description)"></p>

                 <div v-if="event.tags" class="tags-container">
                    <div v-for="(tag, index) in event.tags" :key="index" class="chip">
                        {{ tag }}
                    </div>
                 </div>
            </div>

            <div v-if="event.tags" class="card-action rounded-bottom">
                <div v-for="(tag, index) in event.tags" :key="index" class="chip event-tag">
                    {{ tag }}
                </div>
            </div>

            <div class="card-action rounded-bottom">
                 <a :href="event.feedbackUrl" target="_blank" class="waves-effect waves-light btn-small">
                    <i class="material-icons left">feedback</i>
                    Leave feedback
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import BookmarkService from '../services/BookmarkService'
    import showdown from 'showdown';

    export default {
        props: ['event'],
        data()
        {
            return {
                bookmarkService: new BookmarkService(),
                showDetails: false,
                isVisible: true
            }
        },
        methods: {
            removeBookmark: function () {
                if (confirm('Are you sure to remove "' + this.event.title + '" by ' + this.event.speakerName + ' from your agenda ?')) {
                    let bookmarks = this.bookmarkService.get();

                    let index = bookmarks.indexOf(this.event.id);
                    
                    if (index > -1) {
                        bookmarks.splice(index, 1);
                        this.bookmarkService.set(bookmarks);

                        this.isVisible = false
                    }
                }
            },

            formatMarkdown: function (value) {
                let markdownConverter = new showdown.Converter();

                return markdownConverter.makeHtml(value);
            }
        }
    }
</script>

<style scoped>
    .event{
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .tags-container {
        padding-top: 20px;
    }

    .event-tag {
        height: 24px;
        line-height: 24px;
    }
</style>
