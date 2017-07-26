<template>
    <div class="rank">
        <div class="people">
            <p>男生</p>
            <ul>
                <li v-for="male in males" v-bind:key='male.id'>
                    <img :src="`//statics.zhuishushenqi.com${male.cover}`" alt="">
                    <span>{{male.title}}</span>
                </li>
                <li>
                    <ul>
                        <li>
                            <img src="../assets/more.png" alt="">
                            <span>别人家的排行榜</span>
                            <span><img src="../assets/list.png" alt=""></span>
                        </li>
                        <li v-for="maleOther in malesOther" v-bind:key='maleOther.id'>
                            <img :src="`//statics.zhuishushenqi.com${maleOther.cover}`" alt="">
                            <span>{{maleOther.title}}</span>
                        </li>
                    </ul>
                </li>
            </ul>
            <p>女生</p>
            <ul>
                <li v-for="female in females" v-bind:key='female.id'>
                    <img :src="`//statics.zhuishushenqi.com${female.cover}`" alt="">
                    <span>{{female.title}}</span>
                </li>
                <li>
                    <ul>
                        <li v-for="femaleOther in femalesOther" v-bind:key='femaleOther.id'>
                            <img :src="`//statics.zhuishushenqi.com${femaleOther.cover}`" alt="">
                            <span>{{femaleOther.title}}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'rank',
        data() {
            return {}
        },
        methods: {
            dispatch() {
                this.$store.dispatch('updateRankList');
            }
        },
        computed: {
            males() {
                return this.$store.state.rank.male;
            },
            malesOther() {
                return this.$store.state.rank.maleOther;
            },
            females() {
                return this.$store.state.rank.female;
            },
            femalesOther() {
                return this.$store.state.rank.femaleOther;
            }
        },
        mounted() {
            this.dispatch();
        }
    }
</script>
<style>
    img {
        width: 1.2rem;
        margin-right: .5rem;
        vertical-align: middle;
    }
    .rank {
        width: 100%;
        height: inherit;
        flex-direction: column;
        justify-content: flex-start;
    }
    .people{
        display: block;
        width: 100%;
        height: inherit;
    }
    .rank>.people>p {
        display: block;
        background-color: #f9f0f0;
        margin: 0;
        padding: .5rem 0 .5rem 1rem;
    }
    .rank>.people>ul {
        display: block;
    }
    .rank>.people>ul>li {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: .8rem;
        line-height: 2.4rem;
        margin-left: 1rem;
        margin-right: 1rem;
        border-bottom: .01rem solid #f3f3f3;
            font-size: .8rem;
    line-height: 2.4rem;
    }
    .rank>.people>ul>li>ul {
        display: block;
    }
    .rank>.people>ul>li>ul>li {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: .8rem;
        line-height: 2.4rem;
        margin-left: 1rem;
        margin-right: 1rem;
        border-bottom: .01rem solid #f3f3f3;
            font-size: .8rem;
    line-height: 2.4rem;
    }
</style>


