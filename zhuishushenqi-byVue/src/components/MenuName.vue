<template>
  <div class="menuName">
      <div class="menuItem" @click="bookshelf()" :class="shelfcolor?'show':''">
          <img src="../assets/book.svg" alt="">
          <p>书架</p>
      </div>
        <div class="menuItem" @click="bookclass()" :class="classcolor?'show':''">
          <img src="../assets/category.svg" alt="">
          <p>分类</p>
      </div>
        <div class="menuItem" @click="rank()" :class="rankcolor?'show':''">
          <img src="../assets/rank.svg" alt="">
          <p>排行</p>
      </div>
        <div class="menuItem" @click="search()" :class="searchcolor?'show':''">
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
                this.$store.commit('UPDATETITLE','书架');
            },
            bookclass(){
                this.$store.commit('UPDATEBOOKCLASS');
                this.$store.commit('UPDATETITLE','分类');
            },
            rank(){
                this.$store.commit('UPDATERANK');
                this.$store.commit('UPDATETITLE','排行');
            },
            search(){
                this.$store.commit('UPDATESEARCH');
                this.$store.commit('UPDATETITLE','搜索');
            }
        },
        computed: {
           
            shelfcolor(){
                return this.$store.state.menuName.shelfcolor;
            },
            classcolor(){
                return this.$store.state.menuName.classcolor;
            },
            rankcolor(){
                return this.$store.state.menuName.rankcolor;
            },
            searchcolor(){
                return this.$store.state.menuName.searchcolor;
            }
        },
    }
</script>
<style>
    .menuName {
        width: 100%;
        height: 55px;
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
    .show{
        background-color: #ffffff;
    }
    @media(max-width:414px){
        .menuName{
            position: fixed;
        }
    }
</style>