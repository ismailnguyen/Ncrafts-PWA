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

    <div v-else-if="isTalk && isVisible" class="event col s12">
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
    import showdown from 'showdown';

    export default {
        props: ['event', 'isMyAgendaEnabled'],
        data()
        {
            return {
                showDetails: false,
                isBookmarked: false,
                isTalk: this.event.type == 'Talk' || this.event.type == 'conference' || this.event.type == 'Lightning Talk'
            }
        },
        methods: {
            bookmark: function () {
                let bookmark = JSON.parse(localStorage.getItem('bookmark')) || [];

                let index = bookmark.indexOf(this.event.id);
                
                if (index > -1) {
                    bookmark.splice(index, 1);
                    this.isBookmarked = false;
                }
                else {
                    bookmark.push(this.event.id);
                    this.isBookmarked = true;
                }

                localStorage.setItem('bookmark', JSON.stringify(bookmark));
            },

            formatMarkdown: function (value) {
                let markdownConverter = new showdown.Converter();

                return markdownConverter.makeHtml(value);
            }
        },
        computed: {
            isVisible: function () {
                return !this.isMyAgendaEnabled
                            || (this.isMyAgendaEnabled && this.isBookmarked);
            }
        },
        filters: {
            
        },
        mounted() {
            let bookmark = JSON.parse(localStorage.getItem('bookmark')) || [];

            this.isBookmarked = bookmark.includes(this.event.id);
        }
    }
</script>