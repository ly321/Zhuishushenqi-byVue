<template>
    <div class="bookview">
        <ul>
            <li>
                

            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name:'bookview',

  data(){
      return{
          
      }
  },
  methods:{
      
      dispatch(gender,type,major,minor,start,limit){
          this.$store.dispatch('updatebook',{gender,type,major,minor,start,limit})
      }
  },
  computed:{
      books(){
          return this.$store.state.bookview.book;
      }
  },
  mounted(){
        this.dispatch(this.$route.query.sex,'hot',this.$route.query.name,'',0,20);
  }
}
</script>
<style>
.bookview{
    width: 100%;
     position: fixed;
        top: 8.2rem;
        left: 0;
        background: #fff;
        z-index: 10;
        display: block;
}
</style>

