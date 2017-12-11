<template>
    <div class="rankPage">
        <Headertwo></Headertwo>
        <div class='list'>
            <span :class="week_isActive?'active':''" @click="weekClick()">周榜</span>
            <span :class="month_isActive?'active':''" @click="monthClick()">月榜</span>
            <span :class="total_isActive?'active':''" @click="totalClick()">总榜</span>
        </div>
          <Booklist></Booklist>
        
    </div>
</template>
<script>
import Headertwo from "../components/Headertwo";
import Booklist from '../components/Booklist'
export default {
  name: "rankPage",
  data() {
    return {
      week_isActive:true,
      month_isActive:false,
      total_isActive:false,
    };
  },
  methods:{
    weekClick(){
      this.week_isActive=true;
      this.month_isActive=false;
      this.total_isActive=false;
      let id=this.$route.params.id;
      this.$store.dispatch("updateBookList", { id });

    },
    monthClick(){
      this.week_isActive=false;
      this.month_isActive=true;
      this.total_isActive=false;
      let id=this.$store.state.booklist.monthID;
      this.$store.dispatch("updateBookList", { id });

    },
    totalClick(){
      this.week_isActive=false;
      this.month_isActive=false;
      this.total_isActive=true;
      let id=this.$store.state.booklist.totalID;
      this.$store.dispatch("updateBookList", { id });

    }
  },
  components: {
    Headertwo: Headertwo,
    Booklist
  },
};
</script>
<style>
.rankPage {
  width: inherit;
  height: inherit;
  position: relative;
  display: block;
}
.rankPage>.list{
  margin-top: 49px;
  height: 65px;
  display: flex;
}
.rankPage>.list>span{
  flex: 1;
  height: 100%;
  color: #999;
      line-height: 1.44rem;
    text-align: center;
    font-size: 14px;
}
.active{
  border-bottom: 2px solid #b93321;
}

</style>


