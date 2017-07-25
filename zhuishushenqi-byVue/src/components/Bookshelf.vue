<template>
    <div class="bookshelf">
        <button type="button">添加小说</button>
    </div>
</template>
<script>
    export default {
        name: 'bookshelf',
        data() {
            return {}
        }
    }
</script>
<style>
    .bookshelf {
        width: 100%;
        height: inherit;
    }
    .bookshelf>button {
        width: 100px;
        height: 40px;
        background-color: #00a2ea;
        border: 1px solid #00a2ea;
        border-radius: 5%;
        color: #ffffff;
        position: fixed;
        top: 50%;
    }
</style>
