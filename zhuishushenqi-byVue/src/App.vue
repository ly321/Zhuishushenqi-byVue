<template>
  <div id="container">
    <div class="cover">
    </div>
    <div id="app">
      
      <router-view></router-view>
    </div>
    <div class="cover"></div>
  </div>
</template>

<script>
  
  export default {
    name: 'app',
    data() {
      return {}
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
      height: inherit;
    }
  }
  
</style>
