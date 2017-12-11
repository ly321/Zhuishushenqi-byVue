<template>
  <div class="category default_home">
      <Gheader></Gheader>
      <NovelClass></NovelClass>
      <MenuName></MenuName>
  </div>
</template>
<script>
import Header from "../components/Header";
import MenuName from "../components/MenuName";
import NovelClass from "../components/NovelClass.vue";
export default {
  name: "category",
  data() {
    return {};
  },
  components: {
    Gheader: Header,
    NovelClass,
    MenuName
  },
  mounted(){
    if(this.$route.path=='/category'){
      this.$store.commit("UPDATETITLE", "分类");
    }
  }
};
</script>
<style>
  @import '../style/main.less';
</style>

