<template>
    <div v-if="!isTalk" class="event col s12">
        <div class="chip">
            {{ event.time }}
        </div>

        <div class="card circle">
            <div class="card-content">
                <span class="card-title grey-text text-darken-4">
                    {{event.title}}
                </span>
            </div>
        </div>
    </div>

    <div v-else-if="isTalk" :id="event.id" class="event col s12">
        <div class="chip">
            {{ event.time }}
        </div>

        <div class="card rounded" @click="showDetails = !showDetails">
            <div class="card-image waves-effect waves-block waves-light rounded">
                <img class="activator" :src="event.speakerPhoto">
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
                <a href="#feedbackModal" class="modal-trigger">Leave feedback</a>
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
                isBookmarked: false,
                isTalk: this.event.type == 'Talk' || this.event.type == 'conference' || this.event.type == 'Lightning Talk'
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
        mounted() {
            this.fetchBookmark();
        },
        updated() {
            this.fetchBookmark();
        }
    }
</script>