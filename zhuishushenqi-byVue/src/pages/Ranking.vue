<template>
  <div class="ranking default_home">
      <Gheader></Gheader>
      <Rank></Rank>
      <MenuName></MenuName>
  </div>
</template>
<script>
import Header from "../components/Header";
import MenuName from "../components/MenuName";
import Rank from "../components/Rank.vue";
export default {
  name: "ranking",
  data() {
    return {};
  },
  components: {
    Gheader: Header,
    MenuName,
    Rank
  },
  mounted(){
    if(this.$route.path=='/ranking'){
      this.$store.commit("UPDATETITLE", "排行");
    }
  }

};
</script>
<style>
@import '../style/main.less';
</style>


