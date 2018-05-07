<template>
    <div id="app">
        <router-view name="MPheader" />
        <router-view name="MPbody" />
        <router-view name="MPfooter" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'App'
})
</script>
