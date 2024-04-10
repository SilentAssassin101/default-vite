<template lang="">
    <div class="my-2 p-3 bg-base-200 rounded-lg shadow-lg border-t-2 border-primary">
        <h2 class="text-4xl">{{title}}</h2>
        <p class="text-lg text-left">{{content}}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    }
}
</script>
<style lang="">
    
</style>