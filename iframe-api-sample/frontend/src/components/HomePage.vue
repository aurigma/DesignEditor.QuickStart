<template>
    <div class="home">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "HomePage",
    props: {
        msg: String
    }
});
</script>

<style scoped>
li {
    display: inline-block;
    margin: 0 10px;
}
</style>
