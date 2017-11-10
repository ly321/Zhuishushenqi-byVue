<template>
    <div class="headertwo">
        <span>
                <img src="../assets/leftarrow.png" alt="">
                <p @click="returnHome()">返回</p>
            </span>
        <p>{{title}}</p>
    </div>
</template>
<script>
    export default {
        name: 'headertwo',
        data() {
            return {}
        },
        methods: {
            returnHome(){
                this.$router.push(
                    {
                        path:'/'
                    }
                )
            }
        },
        computed:{
            title(){
                return this.$store.state.listTwo.title;
            }
        }
    }
</script>

<style>
    .headertwo img {
        width: 16px;
        height: 16px;
    }
    .headertwo p {
        color: #ffffff;
    }
    .headertwo {
        width: inherit;
        height: 50px;
        background-color: #00a2ea;
        justify-content: flex-start;
        position: fixed;
        top: 0;
    }
    .headertwo>span{
        margin-left: 10px;
    }
    .headertwo>p {
        flex: 1;
        margin-right: 10%;
    }
   
</style>
