<template>
    <div class="book">
        <Gheader></Gheader>
        <Bookview ></Bookview> 
    </div>
</template>
<script>
import Headertwo from '../components/Headertwo'
import Bookview from '../components/Bookview'

export default {
  name: "Book",
  data() {
    return {
    
    };
  },
  
  components:{
    Gheader:Headertwo,
    Bookview,
  },
};
</script>
<style>
.book {
  width: inherit;
      height: inherit;
    align-items: flex-start;
    flex-direction: column;
}


</style>
