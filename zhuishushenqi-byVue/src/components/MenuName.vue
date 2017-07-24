<template>
  <div class="menuName">
      <div class="menuItem" @click="bookshelf()">
          <img src="../assets/book.svg" alt="">
          <p>书架</p>
      </div>
        <div class="menuItem" @click="bookclass()">
          <img src="../assets/category.svg" alt="">
          <p>分类</p>
      </div>
        <div class="menuItem" @click="rank()">
          <img src="../assets/rank.svg" alt="">
          <p>排行</p>
      </div>
        <div class="menuItem" @click="search()">
          <img src="../assets/search.svg" alt="">
          <p>搜索</p>
      </div>
  </div>
</template>
<script>
    export default {
        name: 'menuName',
        data() {
            return {

            }
        },
        methods:{
            bookshelf(){
                this.$store.commit('UPDATEBOOKSHELF');
            },
            bookclass(){
                this.$store.commit('UPDATEBOOKCLASS');
            },
            rank(){
                this.$store.commit('UPDATERANK');
            },
            search(){
                this.$store.commit('UPDATESEARCH');
            }
        }
    }
</script>
<style>
    .menuName {
        width: 100%;
        height: 55px;
          position: fixed;  
        background-color: #eee;
    }
    
    .menuItem {
        width: 25%;
        height: inherit;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    
    .menuItem>img {
        width: 24px;
        height: 24px;
        margin-top: 5px;
    }
    
    .menuItem>p {
        margin-bottom: 5px;
    }
</style>