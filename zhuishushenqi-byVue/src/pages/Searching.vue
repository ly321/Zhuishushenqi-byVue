<template>
  <div class="searching default_home">
    <GHeader></GHeader>
    <Search></Search> 
    <MenuName></MenuName>
  </div>
</template>
<script>
import Header from "../components/Header";
import MenuName from "../components/MenuName";
import Search from "../components/Search.vue";
export default {
  name: "search",
  data() {
    return {};
  },
  components: {
    GHeader: Header,
    MenuName,
    Search
  },
  mounted(){
    if(this.$route.path=='/searching'){
      this.$store.commit("UPDATETITLE", "搜索");
    }
  }
};
</script>
<style>
@import '../style/main.less';
</style>

