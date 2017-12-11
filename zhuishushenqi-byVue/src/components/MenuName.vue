<template>
  <div class="menuName">
      <div class="menuItem" @click="bookshelf()" :class="colors.shelf">
          <img src="../assets/book.svg" alt="">
          <p>书架</p>
      </div>
        <div class="menuItem" @click="bookclass()" :class="colors.category">
          <img src="../assets/category.svg" alt="">
          <p>分类</p>
      </div>
        <div class="menuItem" @click="rank()" :class="colors.rank">
          <img src="../assets/rank.svg" alt="">
          <p>排行</p>
      </div>
        <div class="menuItem" @click="search()" :class="colors.search">
          <img src="../assets/search.svg" alt="">
          <p>搜索</p>
      </div>
  </div>
</template>
<script>
export default {
  name: "menuName",
  data() {
    return {
        colors:{
            shelf:'',
            category:'',
            rank:'',
            search:'',
        }
    };
  },
  methods: {
    bookshelf() {
      this.$router.push("/");
      this.$store.commit("UPDATETITLE", "书架");
    },
    bookclass() {
      this.$router.push("/category");
      this.$store.commit("UPDATETITLE", "分类");
    },
    rank() {
      this.$router.push("/ranking");
      this.$store.commit("UPDATETITLE", "排行");
    },
    search() {
      this.$router.push("/searching");
      this.$store.commit("UPDATETITLE", "搜索");
    }
  },
    mounted(){
        
        switch (this.$route.path) {
            case '/':
                this.colors.shelf='show';
                break;
            case '/category':
                this.colors.category='show';
                break;
            case '/ranking':
                this.colors.rank='show';
                break;
            case '/searching':
                this.colors.search='show';
                break;
            default:
                break;
        }
    }
};
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

.menuItem > img {
  width: 24px;
  height: 24px;
  margin-top: 5px;
}

.menuItem > p {
  margin-bottom: 5px;
  font-weight: 700;
  font-size: 0.8rem;
  margin-bottom: 0.1rem;
  margin-top: 0.2rem;
  line-height: 1.3rem;
}
.show {
  background-color: #ffffff;
}
@media (max-width: 414px) {
  .menuName {
    position: fixed;
  }
}
</style>