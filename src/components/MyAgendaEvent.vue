<template>
    <div v-if="isTime" class="event-time col s12">
        <div class="chip">
            {{ event.time }}
        </div>
    </div>

    <div v-else-if="isBreak" class="event col s12 break-card">
        <div class="card rounded">
            <div class="card-content center">
                <span class="card-title grey-text text-darken-4">
                    <blockquote>
                        {{event.title}}
                    </blockquote>
                </span>
            </div>
        </div>
    </div>

    <div v-else-if="!isBreak" v-show="isVisible" :id="event.id" class="event col s12 m6 l4">
        <div class="chip right secondary-background-color">
            {{ event.room }}
        </div>

        <div class="card rounded" @click="showDetails = !showDetails">
            <div class="card-content">
                <a class="btn-floating halfway-fab waves-effect waves-light red" @click="removeBookmark()">
                    <i class="material-icons">bookmark</i>
                </a>
                <div class="row valign-wrapper">
                    <div class="col s2">
                        <img :src="'//ncrafts.io' + event.speakerPhoto" alt="" class="circle responsive-img">
                    </div>
                    <div class="col s10">
                        <span class="card-title activator grey-text text-darken-4">{{event.title}}<i class="material-icons right">more_vert</i></span>
                        <p>
                            <a :href="event.twitter" target="_blank">
                                <div class="chip speaker-name-chip">
                                    <img src="/assets/img/icon_twitter.png" alt="Twitter">
                                    {{event.speakerName}}
                                </div>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{{ event.title }}<i class="material-icons right">close</i></span>
                <p v-html="formatMarkdown(event.description)"></p>

                 <div v-if="event.tags" class="tags-container">
                    <div v-for="(tag, index) in event.tags" :key="index" class="chip">
                        {{ tag }}
                    </div>
                 </div>

                 <a :href="event.twitter" target="_blank">
                    <div class="chip speaker-name-chip">
                        <img src="/assets/img/icon_twitter.png" alt="Twitter">
                        @{{ twitterUsername }}
                    </div>
                </a>
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
        },
        computed: {
            isTime: function () {
                return this.event.type.includes('time');
            },

            isBreak: function () {
                return this.event.type.includes('break') || this.event.type.includes('lunch');
            },

            twitterUsername: function () {
                return this.event.twitter.split('twitter.com/')[1];
            }
        }
    }
</script>

<style scoped>
    .event{
        margin-top: 10px;
        margin-bottom: 40px;
    }

    .card {
        margin-top: 35px;
    }

    .card-content {
        padding: 15px;
    }

    .event-time {
        margin-top: 40px;
    }

    blockquote {
        padding: 0;
        border-left: 5px solid #39c8b7;
    }

    .tags-container {
        padding-top: 20px;
    }

    .chip {
        height: 24px;
        line-height: 24px;
    }

    .row.valign-wrapper {
        margin-bottom: 0;
    }
    
    .speaker-name-chip {
        padding-top: 10px;
        background: #fff;
        color: #39c8b7;
        font-size: 14px;
        font-weight: normal;
    }

    .speaker-name-chip>img {
        height: 24px;
        width: 24px;
    }
</style>