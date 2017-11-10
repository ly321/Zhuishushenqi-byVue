<template>
    <div class="listTwo">
        <ul class="same">
            <li>热门</li>
            <li>新书</li>
            <li>好评</li>
            <li>完结</li>
            <li>包月</li>
        </ul>
        <ul class="otherList">
            <li>全部</li>
            <li v-for="item in booklist" v-bind:key="item.id">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'listTwo',
        data() {
            return {
            }
        },
        methods:{
            dispatch(name,sex){
                this.$store.dispatch('updateBooklist',{name,sex})
            }
        },
        computed:{
            booklist(){
                return this.$store.state.listTwo.booklist;
            }
        },
         mounted() {
            this.dispatch(this.$route.query.name,this.$route.query.sex);
        }
    }
</script>
<style>
    .listTwo {
        position: fixed;
        top: 3rem;
        left: 0;
        background: #fff;
        z-index: 10;
        display: block;
    }
    .listTwo ul{
          
    flex-direction: row;

    justify-content: flex-start;
    flex-wrap: nowrap;
    height: 2.6rem;
    width: 100vw;
    overflow-x: auto;
    overflow-y: hidden;
    border-bottom: 1px solid #f2f2f2;
    }
   
    .listTwo ul>li{
            flex-shrink: 0;
    line-height: 2rem;
    padding-left: .6rem;
    padding-right: .6rem;
    font-size: 1rem;

    }
</style>

