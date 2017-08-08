<template>
    <div class="headertwo">
        <span>
                <img src="../assets/leftarrow.png" alt="">
                <p>返回</p>
            </span>
        <p>玄幻</p>
    </div>
</template>
<script>
    export default {
        name: 'headertwo',
        data() {
            return {}
        },
        methods: {
        },
    }
</script>

<style>
    img {
        width: 16px;
        height: 16px;
    }
    p {
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
