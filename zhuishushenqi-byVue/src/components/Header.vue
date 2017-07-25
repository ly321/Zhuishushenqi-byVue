<template>
    <div class="header">
        <p>{{title}}</p>
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
                return this.$store.state.header.title;
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