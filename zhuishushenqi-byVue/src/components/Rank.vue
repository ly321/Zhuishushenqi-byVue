<template>
    <div class="rank">
        <div class="people" v-if="males&&males.length&&females&&females.length">
            <p>男生</p>
            <ul>
                <li v-for="male in males" v-bind:key='male.id' @click="ranking(male._id)">
                    <img :src="`//statics.zhuishushenqi.com${male.cover}`" alt="">
                    <span>{{male.title}}</span>
                </li>
                <li>
                    <ul>
                        <li class='otherRank' @click="male_show_hide()" v-if="malesOther&&malesOther.length">
                            
                            <img src="../assets/more.png" alt="">
                            <span>别人家的排行榜</span>
                            <span ><img  :src="male_isHidden? list : topList " alt=""></span>
                        </li>
                        <li v-bind:class="{hidden:male_isHidden}"  v-for="maleOther in malesOther" v-bind:key='maleOther.id' @click="ranking(maleOther._id)">
                            <img :src="`//statics.zhuishushenqi.com${maleOther.cover}`" alt="">
                            <span>{{maleOther.title}}</span>
                        </li>
                    </ul>
                </li>
            </ul>
            <p>女生</p>
            <ul>
                <li v-for="female in females" v-bind:key='female.id' @click="ranking(female._id)">
                    <img :src="`//statics.zhuishushenqi.com${female.cover}`" alt="">
                    <span>{{female.title}}</span>
                </li>
                <li>
                    <ul>
                        <li class='otherRank' @click="female_show_hide()" v-if="femalesOther&&femalesOther.length">    
                                <img src="../assets/more.png" alt="">
                                <span>别人家的排行榜</span>
                            <span ><img :src="female_isHidden? list : topList " alt=""></span>
                        </li>
                        <li v-bind:class="{hidden:female_isHidden}" v-for="femaleOther in femalesOther" v-bind:key='femaleOther.id' @click="ranking(femalesOther._id)">
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
  name: "rank",
  data() {
    return {
      male_isHidden: true,
      female_isHidden: true,
      list:require('../assets/list.png'),
      topList:require('../assets/topList.png')
    };
  },
  methods: {
    dispatch() {
      this.$store.dispatch("updateRankList");
    },
    male_show_hide() {
      this.male_isHidden = !this.male_isHidden;
    },
    female_show_hide() {
      this.female_isHidden = !this.female_isHidden;
    },
    ranking(id) {
      this.$store.dispatch("updateRanking", { id });
      this.$router.push({
        path: `rank/${id}`,
      
      });
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
};
</script>
<style>
img {
  width: 2.1rem;
  margin-right: 1rem;
  vertical-align: middle;
}
.rank {
  width: 100%;
  height: inherit;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
}
.people {
  display: block;
  width: 100%;
  height: inherit;
}
.rank > .people > p {
  padding-left: 1rem;
  line-height: 3rem;
  font-weight: 400;
  color: #999;
  background-color: #e6e6e6;
  background-size: 100% 1px;
  background-image: linear-gradient(180deg,transparent 50%,#ebebeb 0);
  background-repeat: no-repeat;
  background-position: bottom;
  display: block;
  font-size: 14px;
}
.rank > .people > ul {
  display: block;
}
.rank > .people > ul > li {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  line-height: 2.4rem;
  margin-left: 1rem;
  line-height: 2.4rem;
}
.rank > .people > ul > li > span,
.rank > .people > ul > li > ul > li > span,
.rank > .people > ul > li > ul > li > span{
    width: 100%;
    display: inline-block;
    border-bottom: 0.01rem solid #f3f3f3;
}
.rank > .people > ul > li > span,
.rank > .people > ul > li .otherRank span,
.rank > .people > ul > li > ul > li > span {
    font-size: 14px;
    color: #333;
    line-height: 4rem;
}
.rank > .people > ul > li .otherRank span > img {
  width: 1rem;
}
.rank > .people > ul > li .otherRank span:last-child {
  flex: 1;
}
.rank > .people > ul > li > ul {
  display: block;
  width: 100%;
}
.rank > .people > ul > li > ul > li {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  line-height: 2.4rem;
}

.rank > .people > ul > li > ul > .otherRank {
  justify-content: space-between;
  font-size: 1.1rem;
}
.hidden {
  display: none !important;
}
</style>


