<template>
  <div id="container">
    <div class="cover">
    </div>
    <div id="app">
      <Gheader></Gheader>
      <Bookshelf></Bookshelf>
      <Menu></Menu>
    </div>
    <div class="cover"></div>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Bookshelf from './components/Bookshelf'
  import Menu from './components/Menu'
  export default {
    name: 'app',
    data() {
      return {}
    },
    components: {
      Bookshelf,
      Gheader: Header,
      Menu,
    }
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
    }
  }
</style>
