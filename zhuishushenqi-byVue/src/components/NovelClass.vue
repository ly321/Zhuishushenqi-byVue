<template>
    <div class="novelClass">
        <div class="novelList">
            <p>男生</p>
            <ul>
                <li v-for="male in males" v-bind:key="male">
                    <p class="name">{{male.name}}</p>
                    <p class="bookCount">{{male.bookCount}}</p>
                </li>
            </ul>
        </div>
        <div class="novelList">
            <p>女生</p>
            <ul>
                <li v-for="female in females" v-bind:key="female">
                    <p class="name">{{female.name}}</p>
                    <p class="bookCount">{{female.bookCount}}</p>
                </li>
            </ul>
        </div>
        <div class="novelList">
            <p>出版</p>
            <ul>
                <li v-for="press in presses" v-bind:key="press">
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
           males(){
               return this.$store.state.novelClass.males;
           },
           females(){
               return this.$store.state.novelClass.females;
           },
           presses(){
               return this.$store.state.novelClass.presses;
           }
        },
        mounted() {
            this.dispatch();
        }
    }
</script>
<style>

</style>