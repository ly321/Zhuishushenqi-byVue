<template>
    <div class="bookshelf">
        <button type="button" @click="addBook()" v-if="books.length==0">添加小说</button>
        <div class="shelf">
            <div class="top" v-if="books.length>0">
                <span class="left">共{{books.length}}本</span>
                <span class="normal"@click="edit()" v-if="!edits">编辑</span>
                <p class="normal" v-if="edits">
                    <span class="cancel" @click="cancelEvent()">取消</span>
                    <span class="delete" @click="deleteEvent()">删除</span>    
                </p>
            </div>
        <ul>
            <li v-for="(book,i) in books" v-bind:key="book.id">
                    <p><img :src="book.cover" alt=""></p>
                    <p>
                        <span>{{book.title}}</span>
                        <span>阅读到第1章</span>
                    </p>
                    <span :class="book.check" @click="checkEvent(i)"></span>
            </li>
        </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: "bookshelf",
  data() {
    return {
      edits: false,
      check:[],
    };
  },
  methods: {
    edit() {
      this.edits = true;
        // this.check=this.check.map(data=>'unchecked');
        this.$store.commit('INITCHECK',{'method':'add'});
    },
    cancelEvent() {
        this.edits=false;
        this.$store.commit('INITCHECK',{'method':''});
    },
    deleteEvent() {
        let index_arr=[];
        for(var i=0;i<this.books.length;i++){
            if(this.books[i].check==='checked'){
                index_arr.push(i);
                this.books.splice(i,1);
                i--;
            }
        }
        let arr=JSON.parse(localStorage.books_str);
        index_arr.map(index=>{
            arr.splice(index,1);
        })
        localStorage.books_str=JSON.stringify(arr); 
    },
    checkEvent(id){
       this.$store.commit('CHANGECHECK',{id});
    },
    addBook() {
      this.$router.push("/category");
    }
  },
  computed: {
    books() {
      return this.$store.state.bookshelf.books;
    }
  },
  mounted() {
    let books_arr;
    if (localStorage.books_str && localStorage.books_str.length) {
      books_arr = JSON.parse(localStorage.books_str);
      this.$store.commit("CLEARBOOK");
      this.$store.commit("ADDBOOK", books_arr);
    }
      this.books.map(data=>this.check.push(''));
  }
};
</script>
<style>
.bookshelf {
  width: 100%;
  height: inherit;
}
.bookshelf > button {
  width: 100px;
  height: 40px;
  background-color: #b93321;
  border: 1px solid #b93321;
  border-radius: 5%;
  color: #ffffff;
  position: fixed;
  top: 50%;
}
.bookshelf > .shelf {
  display: block;
  width: inherit;
}
.bookshelf > .shelf > ul {
  display: block;
  width: 100%;
}
.bookshelf > .shelf > ul > li {
  background-size: 100% 1px;
  background-image: linear-gradient(180deg, transparent 50%, #ddd 0);
  background-repeat: no-repeat;
  background-position: bottom;

  padding: 1.2rem;
  justify-content: flex-start;
  align-items: flex-start;
}
.bookshelf > .shelf > ul > li > p {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  padding-left: 1.2rem;
}
.bookshelf > .shelf > ul > li > p:nth-child(2){
    flex: 1;
}
.bookshelf > .shelf > ul > li > p > img {
  width: 60px;
  height: 80px;
}
.bookshelf > .shelf > ul > li > p > span:first-child {
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 0;
}
.bookshelf > .shelf > ul > li > p > span {
  display: block;
  font-size: 12px;
  color: #999;
  margin-top: 5px;
}
.bookshelf > .shelf > ul > li > span {
  width: 16px;
  height: 16px;
  
  background-size: 100%;
  background-position: 50%;
}
.checked{
    background: url("../assets/checked.png") no-repeat;
}
.unchecked{
    background: url("../assets/unchecked.png") no-repeat;
}


.shelf .top {
  line-height: 50px;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 12px;
  background: #f4f4f4;
  color: #999;
}
.shelf .top .left,
.shelf .top .normal {
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 15px;
}
.shelf .top .normal {
  justify-content: flex-end;
}
.shelf .top .normal span {
  margin: 0 10px;
  font-weight: 400;
}
.shelf .top .normal .delete {
  color: #b93321;
}
</style>
