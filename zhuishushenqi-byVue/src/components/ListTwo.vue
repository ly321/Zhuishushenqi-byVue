<template>
    <div class="listTwo">
        <ul class="same">
            <li @click="changeType('hot')" class="current">热门</li>
            <li @click="changeType('new')">新书</li>
            <li @click="changeType('reputation')">好评</li>
            <li @click="changeType('over')">完结</li>
            <li @click="changeType('monthly')">包月</li>
        </ul>
        <ul class="otherList">
            <li class="current">全部</li>

            
            <li v-for="item in booklist" v-bind:key="item.id" @click="changeClass(item)">
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
            },
            changeClass(minor){
                let gender=this.$route.query.sex;
                let type='hot';
                let major=this.$route.query.name
                let start=0;
                let limit=20;
                this.$store.dispatch('updateChangeClass',{gender, type, major, minor, start, limit})
            },
            changeType(type){
                let gender=this.$route.query.sex;
                let major=this.$route.query.name;
                let start=0;
                let limit=20;
                let minor=this.$store.state.bookview.book[0].minorCate;
                this.$store.dispatch('updateChangeClass',{gender, type, major, minor, start, limit});
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
        margin-top: 3rem;
        background: #fff;
        display: block;
        width: 100%;
    }
    .listTwo ul{
          
    flex-direction: row;

    justify-content: flex-start;
    flex-wrap: nowrap;
    height: 3rem;
    overflow-x: auto;
    overflow-y: hidden;
    border-bottom: 1px solid #ddd;
    }
   
    .listTwo ul>li{
            flex-shrink: 0;
    line-height: 2rem;
    padding: 0 .7rem;
    font-size: 13px;

    }
    .listTwo ul>li:first-child{
        padding-left: 1rem;
    }
    .listTwo ul>li.current {
        color:#c52424;
        font-weight: bold;
    }
</style>

