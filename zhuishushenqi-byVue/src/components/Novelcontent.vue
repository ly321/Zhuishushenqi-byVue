<template>
  <div class="novelcontent" >

         <div class="inner"v-html="novelBody"></div>
     </div>

</template>
<script>
export default {
    name:'novelcontent',
    data(){
        return{

        }
    },
    computed:{
        novelBody(){
            return this.$store.state.listTwo.novelBody;
        }
    }

}
</script>
<style>
.novelcontent{
    margin-top: 48px;
    flex-direction: column;
    background-color: #eee6dd;
    color: #5c5d58;
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
}

.novelcontent   .inner{
        font-size: 18px;
    line-height: 1.5;
    padding: .26667rem .53333rem 0;
    text-align: justify;
    flex-direction: column;
}
.novelcontent p{
    justify-content: flex-start;
    display: block;
    align-self: flex-start;
     text-indent: 2em;
         font-size: inherit!important;
    line-height: 1.5;
    margin: .13333rem 0;
    text-indent: 2em;
    text-align: justify;
}
</style>

