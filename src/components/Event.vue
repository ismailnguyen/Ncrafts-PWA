<template>
    <div v-if="isBreak" class="event col s12 m6 l4 break-card">
        <div class="chip">
            {{ event.time }}
        </div>

        <div class="card circle">
            <div class="card-content center">
                <span class="card-title grey-text text-darken-4">
                    <blockquote>
                        {{event.title}}
                    </blockquote>
                </span>
            </div>
        </div>
    </div>

    <div v-else-if="!isBreak" :id="event.id" class="event col s12 m6 l4">
        <div class="chip">
            {{ event.time }}
        </div>

        <div class="card rounded" @click="showDetails = !showDetails">
            <div class="card-image waves-effect waves-block waves-light rounded">
                <img class="activator" :src="'//ncrafts.io' + event.speakerPhoto">
            </div>
            <div class="card-content">
                <a class="btn-floating halfway-fab waves-effect waves-light red" @click="bookmark()">
                    <i class="material-icons">{{ isBookmarked ? 'bookmark' : 'bookmark_border' }}</i>
                </a>
                <span class="card-title activator grey-text text-darken-4">{{event.title}}<i class="material-icons right">more_vert</i></span>
                <p><a>{{event.speakerName}}</a></p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{{ event.title }}<i class="material-icons right">close</i></span>
                <p v-html="formatMarkdown(event.description)"></p>
            </div>

            <div class="card-action">
                <a :href="event.feedbackUrl" target="_blank">Leave feedback</a>
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
                isBookmarked: false
            }
        },
        methods: {
            bookmark: function () {
                let bookmarks = this.bookmarkService.get();

                let index = bookmarks.indexOf(this.event.id);
                
                if (index > -1) {
                    bookmarks.splice(index, 1);
                    this.isBookmarked = false;
                }
                else {
                    bookmarks.push(this.event.id);
                    this.isBookmarked = true;
                }

                this.bookmarkService.set(bookmarks);
            },

            formatMarkdown: function (value) {
                let markdownConverter = new showdown.Converter();

                return markdownConverter.makeHtml(value);
            },

            fetchBookmark: function () {
                let bookmarks = this.bookmarkService.get();

                this.isBookmarked = bookmarks.includes(this.event.id);
            }
        },
        computed: {
            isBreak: function () {
                return this.event.type.includes('break') || this.event.type.includes('lunch');
            }
        },
        mounted() {
            this.fetchBookmark();
        },
        updated() {
            this.fetchBookmark();
        }
    }
</script>

<style scoped>
    .break-card {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    blockquote {
        border-left: 5px solid #39c8b7;
    }
</style>
