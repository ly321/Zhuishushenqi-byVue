<template>
  <div id="container">
    <div class="cover">
    </div>
    <div id="app">
      <Gheader></Gheader>
      <Bookshelf :class="bookshelf?'':'hide'"></Bookshelf>
      <NovelClass :class="bookclass?'':'hide'"></NovelClass>
      <Rank :class="rank?'':'hide'"></Rank>
      <Search :class="search?'':'hide'"></Search>
      <MenuName></MenuName>
    </div>
    <div class="cover"></div>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Bookshelf from './components/Bookshelf'
  import MenuName from './components/MenuName'
  import NovelClass from './components/NovelClass'
  import Rank from './components/Rank.vue'
  import Search from './components/Search.vue'
  export default {
    name: 'app',
    data() {
      return {}
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
            bookshelf(){
                return this.$store.state.menuName.bookshelf;
            },
            bookclass(){
              return this.$store.state.menuName.bookclass;
            },
            rank(){
              return this.$store.state.menuName.rank;
            },
            search(){
              return this.$store.state.menuName.search;
            }
        },
  }
</script>

<style>
  @import './style/main.less';
  .cover {
    flex-grow: 2;
    height: inherit;
    background: inherit;
    z-index: 999;
  }
  #app {
    height: inherit;
    align-items: flex-start;
    position: relative;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    overflow-x: hidden;
    margin-top: 50px;
    margin-bottom: 60px;
  }
  @media (max-width: 414px) {
    .cover {
      display: flex;
    }
    #app {
      width: 100%;
    }
  }
  @media (min-width: 415px) {
    .cover {
      display: block;
    }
    #app {
      width: 414px;
      margin-top: 0;
      overflow-y: hidden;
    }
  }
  .hide{
    display: none;
  }
</style>
