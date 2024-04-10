<template>
    <div class="flex flex-col justify-center text-center max-w-2xl mx-auto gap-2 px-2 pt-2">
        <h1 class="text-5xl">Funny Government Activities</h1>
        <ArticleItem title="9/11" content="aD adijw jdj jsad w9 jdjas dj wj aks jdw j nsngj a" />
        <ArticleItem title="JFK" content="aD adijw jdj jsad w9 jdjas dj wj aks jdw j nsngj a" />
        <ArticleItem title="Ruby Ridge" content="aD adijw jdj jsad w9 jdjas dj wj aks jdw j nsngj a" />
        <ArticleItem title="WACO" content="aD adijw jdj jsad w9 jdjas dj wj aks jdw j nsngj a aD adijw jdj jsad w9 jdjas dj wj aks jdw j nsngj a aD adijw jdj jsad w9 jdjas dj wj aks jdw j nsngj a" />
    </div>
</template>

<script>
import ArticleItem from '../components/ArticleItem.vue'
export default {
    name: 'ViewHome',
    components: {
        ArticleItem
    }
}
</script>
    
<style lang="scss" scoped></style>