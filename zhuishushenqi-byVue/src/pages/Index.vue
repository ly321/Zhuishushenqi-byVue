<template>
    <div class="index">
        <Gheader></Gheader>
        <Bookshelf :class="bookshelf?'':'hide'"></Bookshelf>
        <NovelClass :class="bookclass?'':'hide'"></NovelClass>
        <Rank :class="rank?'':'hide'"></Rank>
        <Search :class="search?'':'hide'"></Search>
        <MenuName></MenuName>
    </div>
</template>
<script>
    import Header from '../components/Header'
    import Bookshelf from '../components/Bookshelf'
    import MenuName from '../components/MenuName'
    import NovelClass from '../components/NovelClass'
    import Rank from '../components/Rank.vue'
    import Search from '../components/Search.vue'
    export default {
        name: 'index',
        data() {
            return {
            }
        },
        components: {
            Bookshelf,
            Gheader: Header,
            MenuName,
            NovelClass,
            Rank,
            Search,
        },
        computed: {
            bookshelf() {
                return this.$store.state.menuName.bookshelf;
            },
            bookclass() {
                return this.$store.state.menuName.bookclass;
            },
            rank() {
                return this.$store.state.menuName.rank;
            },
            search() {
                return this.$store.state.menuName.search;
            }
        },
    }
</script>
<style>
    .index {
        height: inherit;
        align-items: flex-start;
        position: relative;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        overflow-x: hidden;
        overflow-y: hidden;
        margin-top: 50px;
        margin-bottom: 60px;
    }
    .hide {
        display: none;
    }
</style>


