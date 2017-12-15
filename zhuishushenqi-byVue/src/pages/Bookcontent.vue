<template>
<div class="bookcontent">
    <Headertwo class="bookcontent_header"></Headertwo>
    <Novelcontent></Novelcontent>
</div>
</template>
<script>
import Headertwo from '../components/Headertwo'
import Novelcontent from '../components/Novelcontent'
export default {
  name:'bookcontent',
  data(){
      return{
        
      }
  },
  methods:{
  },
  components:{
      Headertwo,
      Novelcontent
  },
  mounted(){
      let id=this.$route.params.id,
      page=this.$route.params.page;
        this.$store.dispatch('updatebookcontent',{
            id,
          page,
      })

    }
}
</script>
<style>
    .bookcontent{
         width: 100%;
        display: block;
    }
</style>


