<template>
    <div class="header">
        <p >{{title}}</p>
        <p v-html="datas">{{datas}}</p>
    </div>
</template>
<script>
    export default {
        name: 'header',
        data() {
            return {
                
            }
        },
        computed:{
            title(){
                if(this.$store.state.header.title==='搜索'){
                    return '';
                }
                return this.$store.state.header.title;
            },
            datas(){
                if(this.$store.state.header.title==='搜索'){
                    return '<input type="text">';
                }
            }
        }
    }
</script>
<style>
 @import '../style/main.less';
.header{
    width: 100%;
    height: 50px;
    background-color: #00a2ea;
    top: 0;
}
.header>p{
    color: #ffffff;
}
@media (max-width: 414px) {
    .header{
        position: fixed;
    }
}
</style>