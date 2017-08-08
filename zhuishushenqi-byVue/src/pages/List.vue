<template>
    <div class="list">
        <Headertwo></Headertwo>
    </div>
</template>
<script>
import Headertwo from '../components/Headertwo'
export default {
  name:'list',
  data(){
      return{

      }
  },
  components:{
      Headertwo,
  }
}
</script>
<style>
.list{
    width: 100%;
    height: inherit;
}
 @media(min-width:414px){
        .list{
            width: 414px;
        }
    }
</style>

