<template>
    <div class="list">
        <Headertwo></Headertwo>
        <ListTwo></ListTwo>
        <Bookview></Bookview>
    </div>
</template>
<script>
import Headertwo from '../components/Headertwo'
import ListTwo from '../components/ListTwo'
import Bookview from '../components/Bookview'
export default {
  name:'list',
  data(){
      return{

      }
  },
  components:{
      Headertwo,
      ListTwo,
        Bookview
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

