<template>
    <div class="list">
        <Headertwo></Headertwo>
        <ListTwo></ListTwo>
        <Booklist></Booklist>
    </div>
</template>
<script>
import Headertwo from '../components/Headertwo'
import ListTwo from '../components/ListTwo'
import Booklist from '../components/Booklist'
export default {
  name:'list',
  data(){
      return{

      }
  },
  components:{
      Headertwo,
      ListTwo,
        Booklist
  }
}
</script>
<style>
.list{
    width: 100%;
    height: inherit;
    position: relative;
    display: block;
}
 @media(min-width:414px){
        .list{
            width: 414px;
        }
    }
</style>

