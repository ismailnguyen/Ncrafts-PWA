<template>
    <div>
        <a v-if="title" class="brand-logo center" href="/">{{ title }}</a>
        <a v-else class="brand-logo center" href="/"><img src="/assets/img/only_newcrafts_blanc.png" height="40"></a>
        
        <a data-activates="slide-out" class="show-on-large button-collapse"><i class="material-icons">menu</i></a>
    </div>
</template>

<script>
    export default {
        props: ['title']
    }
</script>
