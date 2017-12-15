<template>
    <div class="headertwo">
        <span>
                <img src="../assets/leftarrow.png" alt="">
                <p @click="returnPrev()">返回</p>
            </span>
        <p>{{title}}</p>
        <span @click="returnHome()">
          <img src="../assets/home.png" alt="">
        </span>
    </div>
</template>
<script>
export default {
  name: "headertwo",
  data() {
    return {};
  },
  methods: {
    returnPrev() {
      let str = this.$route.path;
      if (str.match(/\/list/)) {
        this.$router.push("/category");
      } else if (str.match(/\/rank/)) {
        this.$router.push("/ranking");
      } else if (str.match(/\/book/)) {
        if(this.$route.params.page){
          this.$router.push({
            path:`/book/${this.$route.params.id}`
          })
        }else{
        this.$router.push("/category");
        }
      }
    },
    returnHome() {
      this.$router.push("/");
    }
  },

  computed: {
    title() {
      return this.$store.state.listTwo.title;
    }
  }
};
</script>

<style>
.headertwo img {
  width: 16px;
  height: 16px;
}
.headertwo p {
  color: #ffffff;
  width: 70%;
  height: 100%;
  line-height: 1.17333rem;
  text-align: center;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.headertwo {
  width: inherit;
  height: 3rem;
  background-color: #b93321;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  z-index: 999;
}
.headertwo > span {
  margin-left: 10px;
}
.headertwo > p {
  width: 70%;
  height: 100%;
  line-height: 1.17333rem;
  text-align: center;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
