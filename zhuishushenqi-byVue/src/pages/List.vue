<template>
    <div class="list">
        <Headertwo></Headertwo>
        <ListTwo></ListTwo>
    </div>
</template>
<script>
import Headertwo from '../components/Headertwo'
import ListTwo from '../components/ListTwo'
export default {
  name:'list',
  data(){
      return{

      }
  },
  components:{
      Headertwo,
      ListTwo
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

