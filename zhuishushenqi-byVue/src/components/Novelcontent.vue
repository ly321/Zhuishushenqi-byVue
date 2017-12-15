<template>
  <div class="novelcontent" >
         <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight" class="inner"v-html="novelBody">
             <router-view></router-view>
         </v-touch>
     </div>

</template>
<script>
export default {
  name: "novelcontent",
  data() {
    return {
      vuegConfig: {
        duration: "0.3", //转场动画时长，默认为0.3，单位秒
        firstEntryDisable: false, //值为true时禁用首次进入应用时的渐现动画，默认为false
        firstEntryDuration: ".6", //首次进入应用时的渐现动画时长，默认为.6
        forwardAnim: "rotateIn", //前进动画，默认为fadeInRight
        backAnim: "rotateOut", //后退动画，默认为fedeInLeft
        sameDepthDisable: false, //url深度相同时禁用动画，默认为false
        tabs: [
          {
            name: "home"
          },
          {
            name: "my"
          }
        ], //默认为[]，'name'对应路由的name,以实现类似app中点击tab页面水平转场效果，如tabs[1]到tabs[0]，会使用backAnim动画，tabs[1]到tabs[2]，会使用forwardAnim动画
        tabsDisable: false, //值为true时，tabs间的转场没有动画，默认为false
        shadow: true, //值为false，转场时没有阴影的层次效果
        disable: false //禁用转场动画，默认为false，嵌套路由默认为true
      }
    };
  },
  methods: {
    onSwipeLeft() {
      let id = this.$route.params.id,
        page = this.$route.params.page,
        pageNum = parseInt(page),
        totalPage=this.$store.state.listTwo.chapters.length;
        if(totalPage>0){

          if (page >= 1&&page<=totalPage) {
            this.$router.push({
              path: `/book/${this.$route.params.id}/${pageNum + 1}`
            });
            if (this.$store.state.listTwo.chapters.length == 0) {
              this.$store.dispatch("updatebookcontent", {
                id,
                page
              });
            } else {
              let chapters = this.$store.state.listTwo.chapters;
              this.$store.dispatch("loadingbookcontent", {
                chapters,
                page
              });
            }
          }
        }
    },
    onSwipeRight() {
      let id = this.$route.params.id,
        page = this.$route.params.page,
        pageNum = parseInt(page);
      if (page > 1) {
        this.$router.push({
          path: `/book/${this.$route.params.id}/${pageNum - 1}`
        });
        if (this.$store.state.listTwo.chapters.length == 0) {
          this.$store.dispatch("updatebookcontent", {
            id,
            page
          });
        } else {
          let chapters = this.$store.state.listTwo.chapters;
          page = page - 2;
          this.$store.dispatch("loadingbookcontent", {
            chapters,
            page
          });
        }
      } else if (page == 1) {
        return true;
      } else if (page <= 0) {
        this.$router.push({
          path: `/book/${this.$route.params.id}/${pageNum - 1}`
        });
      }
    }
  },
  computed: {
    novelBody() {
      return this.$store.state.listTwo.novelBody;
    }
  },
};
</script>
<style>
.novelcontent {
  margin-top: 48px;
  flex-direction: column;
  background-color: #eee6dd;
  color: #5c5d58;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

.novelcontent .inner {
  font-size: 18px;
  line-height: 1.5;
  padding: 0.26667rem 0.53333rem 0;
  text-align: justify;
  flex-direction: column;
}
.novelcontent p {
  justify-content: flex-start;
  display: block;
  align-self: flex-start;
  text-indent: 2em;
  font-size: inherit !important;
  line-height: 1.5;
  margin: 0.13333rem 0;
  text-indent: 2em;
  text-align: justify;
}
</style>

