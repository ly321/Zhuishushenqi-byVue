<template>
    <div class="booklist">
        <ul>
            <li v-for="book in books" v-bind:key="book.id" @click="bookDetail(book._id)">
                <span>
                    <img :src="'http://statics.zhuishushenqi.com'+book.cover">
                </span>
                <p>
                <span>{{book.title}}</span>
                <span>{{book.author}}</span>
                <span>{{book.shortIntro|handleWord}}</span>
                <span>
                  <span class="nu"><span>{{(book.latelyFollower/10000).toFixed(1)}}</span><i>万人气</i></span>
                  <span class="devision">|</span>
                  <span class="nu"><span>{{book.retentionRatio}}%</span><i>读者留存</i></span>
                </span>
              </p>

            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "booklist",

  data() {
    return {
    };
  },
  methods: {
     dispatchRank(id) {
      this.$store.dispatch("updateBookList", { id });
      this.$store.dispatch("updateRanking", { id });
    },
    dispatch(gender, type, major, minor, start, limit) {
      this.$store.dispatch("updatebook", {
        gender,
        type,
        major,
        minor,
        start,
        limit
      });
    }, 
    bookDetail(id){
       this.$store.dispatch("updatebookdetail", { id });
        this.$router.push({
                    path:`/book/${id}`,          
                });
    }
  },
  filters:{
      handleWord(value){
          if(value.length>50){
              return value.substring(0,50)+'...';
          }
      }
  },
  computed: {
    books() {
      return this.$store.state.booklist.book;
    },
  },
  mounted() {
    if(this.$route.params.id){
      this.dispatchRank(this.$route.params.id);
    }else if (this.$route.query.sex&&this.$route.query.name){
      this.dispatch(
        this.$route.query.sex,
        "hot",
        this.$route.query.name,
        "",
        0,
        20
      );
    }
  }
};
</script>
<style>
.booklist {
background-color: #f5f2ed;
}
.booklist >ul{
    display: block;
    width: 100%;
}
.booklist >ul >li{
    align-items: flex-start;
  justify-content: flex-start;
  padding: 1.2rem ;
     background-size: 100% 1px;
    background-image: linear-gradient(180deg,transparent 50%,#ddd 0);
    background-repeat: no-repeat;
    background-position: bottom;
}
.booklist >ul >li >span>img {
     width: 60px;
    height: 80px;
}
.booklist>ul>li>p {
  flex-direction: column;
  align-items: flex-start;
  padding-left: 1.2rem;
}
.booklist >ul >li> p >span{
      display: block;
  font-size: 12px;
  color:#999;
  margin-top: 5px;
}
.booklist>ul>li>p>span:first-child {
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 0;
}
.booklist>ul>li>p>span .nu {
  display: inline;
  color: #222;
}
.booklist>ul>li>p>span .nu > span,
.booklist>ul>li>p>span .nu > i {
  vertical-align: middle;
  font-style: normal;
  display: inline;
}
.booklist>ul>li>p>span .nu > span {
  color:#c52424;
}
.booklist>ul>li>p>span .devision{
  margin: 0 10px;
  display: inline;
}
</style>

