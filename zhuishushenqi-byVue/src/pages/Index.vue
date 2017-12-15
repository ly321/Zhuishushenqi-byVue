<template>
    <div class="index default_home">
        <Gheader></Gheader>
        <Bookshelf></Bookshelf>
        <MenuName></MenuName>
    </div>
</template>
<script>
import Header from "../components/Header";
import Bookshelf from "../components/Bookshelf";
import MenuName from "../components/MenuName";
export default {
  name: "index",
  data() {
    return {
    };
  },
  components: {
    Bookshelf,
    Gheader: Header,
    MenuName
  },
  mounted() {
    if (this.$route.path == "/") {
      this.$store.commit("UPDATETITLE", "书架");
    }
  }
};
</script>
<style>
@import "../style/main.less";
</style>


