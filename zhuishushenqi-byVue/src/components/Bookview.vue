<template>
  <div class="bookview">
          <div class="book_header">
              <div>
                <img :src="bookDetail.cover" alt="">
              </div>
              <div class="bookDe">
                <p>{{bookDetail.title}}</p>
                <p>
                  <span class="bookAuthor">{{bookDetail.author}}</span>
                  <span class="division">|</span>
                  <span>{{bookDetail.cat}}</span>
                  <span class="division">|</span>
                  <span>{{(bookDetail.wordCount/10000).toFixed(1)}}万字</span>
                </p>
                <p>
                  <span>{{bookDetail.updated|handleUpdated}}小时前更新</span>
                  
                </p>
              </div>
          </div>
          <div class="book_btn">
            <button v-if="canAdd" @click="add(bookDetail._id,bookDetail.title,bookDetail.cover,bookDetail.updated,bookDetail.lastChapter)">追更新</button>
            <button class="awayShelf" v-if="!canAdd" @click="away(bookDetail._id)">撤出书架</button>
            <button @click="reading()">开始阅读</button>
          </div>
          <div class="book_number">
              <p>
                <span>追书人气</span>
                <span>{{(bookDetail.latelyFollower/10000).toFixed(1)}}万</span>
              </p>
              <p>
                <span>读者留存率</span>
                <span>{{bookDetail.retentionRatio}}%</span>
              </p>
              <p>
                <span>日更新数/天</span>
                <span>{{bookDetail.serializeWordCount}}</span>
              </p>
          </div>
          <div class="book_info">
              <p>{{bookDetail.longIntro|handleIntro(isHidden)}}
                <span :class="isHidden?'arrow':'topArrow'" @click="show()"></span>
              </p>
          </div>
          <div class="book_catalog_info">
            
              <span>目录</span>
              <span>
                <span>[{{bookDetail.updated|handleUpdated}}小时前更新]</span>
                <span>{{bookDetail.lastChapter}}</span>
                <span><img src="../assets/rightArrow.png" alt=""></span>
              </span>
               </div>
    
  </div>
</template>
<script>
export default {
  name: "bookview",
  data() {
    return {
      isHidden: true,
     
    };
  },
  methods: {
    add(_id,title,cover,updated,lastChapter) {
      let arr=[];
      if(localStorage.books_str&&localStorage.books_str.length){
         arr=JSON.parse(localStorage.books_str);
      }
        arr.push({_id,title,cover,updated,lastChapter});
         localStorage.books_str=JSON.stringify(arr)
      this.$store.commit('ADDBOOK',{_id,title,cover,updated,lastChapter});
      this.$router.push({
        path:'/',
      });
    },
    away(id){
       let arr=JSON.parse(localStorage.books_str);
       for(var i=0;i<arr.length;i++){
         if(arr[i]._id===id){
           arr.splice(i,1);
         }
       }
       localStorage.books_str=JSON.stringify(arr);
       console.log(localStorage);
       this.canAdd=true;
       console.log(this.canAdd);
    },
    reading() {
        this.$router.push({
        path: `/book/${this.$route.params.id}/1`,
      });
    },
    dispatch(id) {
      this.$store.dispatch("updatebookdetail", {
        id
      });
    },
    show() {
      this.isHidden = !this.isHidden;
    },
  },
  filters: {
    handleUpdated(time) {
      let now = Date.now();
      let prevTime = Date.parse(time);
      return Math.floor((now - prevTime) / 1000 / 3600);
    },
    handleIntro(value, isHidden) {
      if (isHidden) {
        if (value) {
          if (value.length > 82) {
            return value.substring(0, 82) + "...";
          }
          return value;
        }
      } else {
        return value;
      }
    }
  },
  computed: {
    bookDetail() {
      return this.$store.state.book.bookDetail;
    },
    canAdd:{
      get(){
        let arr=JSON.parse(localStorage.books_str);
        return !(arr.some(data=>data._id===this.$route.params.id));
      },
      set(v){
        console.log('v='+v);
        return v;
      }
    }
  },

  mounted() {
    this.dispatch(this.$route.params.id);
  }
};
</script>
<style>
.bookview {
  margin-top: 48px;
  display: block;
  width: 100%;
}
.bookview .book_header {
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 25px;
}
.bookview .book_header > div {
  display: block;
}
.bookview .book_header > div:last-child {
  margin-left: 10px;
}
.bookview .book_header > div p {
  display: block;
  margin-top: 10px;
}
.bookview .book_header > div p span {
  display: inline-block;
}
.bookview .book_header img {
  width: 70px;
  height: 100px;
}
.bookDe p {
  font-size: 12px;
  color: #999;
}
.bookAuthor {
  color: #b93321;
}
.bookDe p:first-child {
  font-size: 16px;
  color: #222;
}
.bookDe p > span.division {
  margin: 0 5px;
}
.book .book_btn {
  padding: 0 25px;
}
.book_btn button {
  padding: 12px 0px;
  margin-left: 20px;
  color: #fff;
  border-radius: 3px;
  background-color: #b93321;
  border: 1px solid #b93321;
  width: 45%;
  font-size: 16px;
}
.book_btn button:first-child {
  background: #fff;
  color: #b93321;
  margin-right: 20px;
  margin-left: 0px;
}
.book_number {
  border-top: 1px solid #e8e8e8;
  margin-top: 20px;
  padding: 15px 20px;
}
.book_number p {
  display: inline-block;
  flex: 1;
}
.book_number p > span {
  display: block;
  text-align: center;
  line-height: 25px;
  font-size: 16px;
}
.book_number p > span:first-child {
  font-size: 12px;
  color: #999;
}
.book_info {
  border-top: 1px solid #e8e8e8;
  padding: 15px 20px;
}
.book_info p {
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  font-size: 13px;
  line-height: 2;
  position: relative;
  font-weight: 400;
}
.book_info p span {
  position: absolute;
  width: 22px;
  height: 22px;
  bottom: 0.1rem;
  right: 0.26667rem;
}
.arrow {
  background: url("../assets/list.png") 50% no-repeat;
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: 50%;
}
.topArrow {
  background: url("../assets/topList.png") 50% no-repeat;
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: 50%;
}
.book_catalog_info {
  border-top: 1px solid #e8e8e8;
  padding: 15px 20px;
  justify-content: space-between;
}

.book_catalog_info span {
  /* width: 22px; */
  height: 22px;
  bottom: 0.1rem;
  right: 0.07rem;

  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  font-size: 13px;
  line-height: 2;
  position: relative;
  font-weight: 400;
}
.book_catalog_info > span > span {
  /* word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    font-size: 13px;
    line-height: 2;
    position: relative;
    font-weight: 400; */
  /* font-size: 12px; */
  color: #999;
}
.book_catalog_info > span > span > img {
  width: 16px;
  height: 16px;
  position: relative;
  top: 0.23rem;
}

.awayShelf{
      border: 1px solid #999 !important;
    background-color: #999 !important;
    color: #fff !important;
}
</style>


