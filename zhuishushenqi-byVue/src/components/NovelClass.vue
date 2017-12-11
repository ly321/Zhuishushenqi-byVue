<template>
    <div class="novelClass">
        <div class="novelList" v-if='males&&males.length'>
            <p>男生</p>
            <ul>
                <li v-for="male in males" v-bind:key="male.id" @click="novelClick(male.name,'male')">
                    <p class="name">{{male.name}}</p>
                    <p class="bookCount">{{male.bookCount}}</p>
                </li>
            </ul>
        </div>
        <div class="novelList" v-if='females&&females.length'>
            <p>女生</p>
            <ul>
                <li v-for="female in females" v-bind:key="female.id" @click="novelClick(female.name,'female')">
                    <p class="name">{{female.name}}</p>
                    <p class="bookCount">{{female.bookCount}}</p>
                </li>
            </ul>
        </div>
        <div class="novelList" v-if="presses&&presses.length">
            <p>出版</p>
            <ul>
                <li v-for="press in presses" v-bind:key="press.id" @click="novelClick(press.name)">
                    <p class="name">{{press.name}}</p>
                    <p class="bookCount">{{press.bookCount}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: "novelClass",
  data() {
    return {};
  },
  methods: {
    dispatch() {
      this.$store.dispatch("updateDate");
    },
    novelClick(name, sex) {
      this.$router.push({
        path: "list",
        query: {
          name,
          sex
        }
      });
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
};
</script>
<style>
.novelClass {
  width: 100%;
  height: inherit;
  flex-direction: column;
  justify-content: flex-start;
}
.novelClass > .novelList {
  flex-direction: column;
  display: block;
  margin-top: 10px;
}
.novelClass > .novelList > p {
  line-height: 2rem;
  margin: 0 1rem;
  border-bottom: 1px solid #f3eded;
  justify-content: flex-start;
    padding: 0 .4rem;
    height: 2.6rem;
    font-weight: 400;
  color: #999;
}
.novelClass > .novelList > ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 1rem;
  margin-right: 1rem;
  justify-content: flex-start;
}
.novelClass > .novelList > ul > li {
  width: 33.3%;
  text-align: center;
  flex-direction: column;
}
.novelClass > .novelList > ul > li > .name {
  font-weight: 700;
  font-size: 0.8rem;
  margin-bottom: 0.1rem;
  margin-top: 0.8rem;
  line-height: 1.3rem;
}
.novelClass > .novelList > ul > li > .bookCount {
  text-align: center;
  line-height: 1.3rem;
  font-size: 0.7rem;
  color: #ccc;
}
</style>