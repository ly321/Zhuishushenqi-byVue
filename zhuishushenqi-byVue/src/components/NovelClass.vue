<template>
    <div class="novelClass">
        <div class="novelList">
            <p>男生</p>
            <ul>
                <li v-for="male in males" v-bind:key="male.id">
                    <p class="name">{{male.name}}</p>
                    <p class="bookCount">{{male.bookCount}}</p>
                </li>
            </ul>
        </div>
        <div class="novelList">
            <p>女生</p>
            <ul>
                <li v-for="female in females" v-bind:key="female.id">
                    <p class="name">{{female.name}}</p>
                    <p class="bookCount">{{female.bookCount}}</p>
                </li>
            </ul>
        </div>
        <div class="novelList">
            <p>出版</p>
            <ul>
                <li v-for="press in presses" v-bind:key="press.id">
                    <p class="name">{{press.name}}</p>
                    <p class="bookCount">{{press.bookCount}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'novelClass',
        data() {
            return {}
        },
        methods: {
            dispatch() {
                this.$store.dispatch('updateDate');
            }
        },
        computed: {
            males() {
                return this.$store.state.novelClass.males;
            },
            females() {
                return this.$store.state.novelClass.females;
            },
            presses() {
                return this.$store.state.novelClass.presses;
            }
        },
        mounted() {
            this.dispatch();
        }
    }
</script>
<style>
    .novelClass {
        width: 100%;
        height: inherit;
      flex-direction: column;
    }
    .novelClass>.novelList {
        flex-direction: column;
        
    }
    .novelClass>.novelList>p {
        line-height: 2rem;
        margin: 0 1rem;
        border-bottom: 1px solid #f3eded;
    }
    .novelClass>.novelList>ul {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-left: 1rem;
        margin-right: 1rem;
    }
    .novelClass>.novelList>ul>li {
        width: 33.3%;
        text-align: center;
        flex-direction: column;
    }
    .novelClass>.novelList>ul>li>.name {
        
        font-weight: 700;
        font-size: .8rem;
        margin-bottom: .1rem;
        margin-top: .8rem;
        line-height: 1.3rem;
    }
    .novelClass>.novelList>ul>li>.bookCount {
      
        color: #959595;
        text-align: center;
    }
</style>