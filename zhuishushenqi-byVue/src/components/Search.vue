<template>
  <div class="search">
     <div class="search-head">
       <img class="search-img" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNDk3OTY3NTI1MzM5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQwNDQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE3My4wMTM4IDE1OS4xNTMxYzU3LjU0NjMtNjUuNDQxNiAxNDEuNTY0OC0xMDYuODM4NiAyMjguNTU0NC0xMTIuMjUzOSA4MS40MTgxLTYuMDkzOSAxNjQuODM1IDE4Ljg0NTIgMjI5LjIxMyA2OS4xMzAxIDc4LjEzODIgNTkuMTkyOSAxMjguMDM2NCAxNTQuMjUxNCAxMzEuMzk1MyAyNTIuMzE4OSA0LjY1NiA4NC45NjU0LTI1LjQyNTggMTcwLjc2ODItODAuNzk3NSAyMzUuMTgwNSA4Ni4yMTIxIDg2LjI2NTUgMTcyLjUyMTEgMTcyLjQ3NjEgMjU4LjcxMzIgMjU4Ljc2MjYtMTguNzY3IDE4LjcwOTMtMzcuNDU3MSAzNy40OTU2LTU2LjIyNTIgNTYuMTgzOS04Ny4wODY1LTg3LjA0My0xNzQuMDk0MS0xNzQuMTQzOS0yNjEuMjIwNi0yNjEuMTQ3OS03MS45NjYyIDUyLjY5MzMtMTY1LjYyOTUgNzQuMzg5Ni0yNTMuNTEwNSA1OS4xNTI5LTg2Ljk0OTYtMTMuOTE0Ni0xNjcuMTI2NS02NC4yMzg0LTIxOC4yMjktMTM1Ljg3MTktMzIuMjk0NC00NC42Mzc3LTUzLjMzNC05Ny40MDYtNjAuMzk4NS0xNTIuMDU4OUM3NyAzMzIuNDQ0NiAxMDcuNzYyNCAyMzEuMDU5MyAxNzMuMDEzOCAxNTkuMTUzMXpNMzkyLjM4NyA4Ny40NDI3Yy0xMy44MzkyIDIuMDc2Ni0yNy43OTMzIDMuNjg3NS00MS4yMjM3IDcuNzAzOC04NS44NDMzIDIxLjExNTctMTYwLjE1OSA4My41MTE0LTE5Ni42ODQ3IDE2My45MTY5LTIwLjg0NDcgNDQuNzkyNi0yOS45Mjc5IDk0Ljk0MTYtMjYuNTMxMSAxNDQuMjE5MiA1LjIwMDcgOTUuMjEyNCA2MC40NTc1IDE4NS42OTExIDE0Mi4xNjY0IDIzNC41OTY5IDg0LjMxMDMgNTIuNjE2MyAxOTUuNzcyMyA1Ny44NzQ4IDI4NC43NTk2IDEzLjcyMTcgODUuNTcxNS00MC41MDE1IDE0OC43NjUyLTEyNC41NzY1IDE2My44MDc3LTIxOC4wNjIyIDcuMjc3NC00Mi43MzcgNS4yNDA3LTg3LjE1OTktNi40MjU5LTEyOC45NDU2LTI0LjA2NTctOTAuNDE5Ny05My45MzUyLTE2Ni45NDQ4LTE4MS42MDMzLTE5OS40OTA3QzQ4Ni44NDc5IDg4LjE4MDIgNDM5LjAwNjQgODIuNjY5IDM5Mi4zODcgODcuNDQyN3oiIHAtaWQ9IjQwNDUiPjwvcGF0aD48L3N2Zz4=">
       <input v-model="search_value" type="text" placeholder="输入书名或者作者名" class="search-input">
      </div>
      <div class="search-value" v-if="this.$store.state.booklist.book.length==0">
        <ul>
          <li v-for="book in autoSearch_books" v-bind:key="book.id" @click="search(book)">
            {{book}}
          </li>
        </ul>
      </div>
    <div class="search-history" v-if="autoSearch_books.length===0">
      <span>搜索历史</span>
      <span><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNDk4MzY2NDg2NTEyIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0MDEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTYxNC40IDc5Ny44NjdjLTE4Ljg3NiAwLTM0LjEzMy0xNS4yNTgtMzQuMTMzLTM0LjEzM3YtMzc1LjQ2N2MwLTE4Ljg3NiAxNS4yNTgtMzQuMTMzIDM0LjEzMy0zNC4xMzNzMzQuMTMzIDE1LjI1OCAzNC4xMzMgMzQuMTMzdjM3NS40NjdjMCAxOC44NzYtMTUuMjU4IDM0LjEzMy0zNC4xMzMgMzQuMTMzek00MDkuNiA3OTcuODY3Yy0xOC44NzYgMC0zNC4xMzMtMTUuMjU4LTM0LjEzMy0zNC4xMzN2LTM3NS40NjdjMC0xOC44NzYgMTUuMjU4LTM0LjEzMyAzNC4xMzMtMzQuMTMzczM0LjEzMyAxNS4yNTggMzQuMTMzIDM0LjEzM3YzNzUuNDY3YzAgMTguODc2LTE1LjI1OCAzNC4xMzMtMzQuMTMzIDM0LjEzM3pNOTU1LjczMyAyMTcuNmgtMTcwLjY2N3YtNjguMjY3YzAtNTYuNDU3LTQ1LjU2OC0xMDIuNC0xMDEuNjE1LTEwMi40aC0zNDIuMTE4Yy01Ni40NTcgMC0xMDIuNCA0NS45NDMtMTAyLjQgMTAyLjR2NjguMjY3aC0xNzAuNjY3Yy0xOC44NzYgMC0zNC4xMzMgMTUuMjU4LTM0LjEzMyAzNC4xMzNzMTUuMjU4IDM0LjEzMyAzNC4xMzMgMzQuMTMzaDg4Ny40NjdjMTguODc2IDAgMzQuMTMzLTE1LjI1OCAzNC4xMzMtMzQuMTMzcy0xNS4yNTgtMzQuMTMzLTM0LjEzMy0zNC4xMzN6TTMwNy4yIDE0OS4zMzNjMC0xOC44MDcgMTUuMzI2LTM0LjEzMyAzNC4xMzMtMzQuMTMzaDM0Mi4xMThjMTguNzA1IDAgMzMuMzQ4IDE0Ljk4NSAzMy4zNDggMzQuMTMzdjY4LjI2N2gtNDA5LjZ2LTY4LjI2N3pNNzUxLjA3MCAxMDAyLjY2N2gtNDc3LjkzNWMtNTYuNDU3IDAtMTAyLjQtNDUuOTQzLTEwMi40LTEwMi40di01MTIuNTEyYzAtMTguODQyIDE1LjI5Mi0zNC4xMzMgMzQuMTMzLTM0LjEzM3MzNC4xMzMgMTUuMjkyIDM0LjEzMyAzNC4xMzN2NTEyLjUxMmMwIDE4Ljg0MiAxNS4zMjYgMzQuMTMzIDM0LjEzMyAzNC4xMzNoNDc3LjkzNWMxOC44NDIgMCAzNC4xMzMtMTUuMjkyIDM0LjEzMy0zNC4xMzN2LTUxMS4xMTNjMC0xOC44NDIgMTUuMjU4LTM0LjEzMyAzNC4xMzMtMzQuMTMzczM0LjEzMyAxNS4yOTIgMzQuMTMzIDM0LjEzM3Y1MTEuMTEzYzAgNTYuNDU3LTQ1Ljk0MyAxMDIuNC0xMDIuNCAxMDIuNHoiIHAtaWQ9IjI0MDIiIGZpbGw9IiM1MTUxNTEiPjwvcGF0aD48L3N2Zz4="></span>
    </div>
    <div class="search-history-recode" v-if="this.$store.state.booklist.book.length==0&&search_value.length===0">
      <ul>
        <li v-for="history in search_history" v-bind:key="history.id" @click="historyClick(history)">
          {{history}}
        </li>
      </ul>
    </div>
    <Booklist v-if="search_value.length!==0"></Booklist>
  </div>
</template>
<script>
import Booklist  from './Booklist'
export default {
  name: "search",
  data() {
    return {
      search_value:''
    };
  },
  components:{
    Booklist
  },
  methods:{
    search(query){
      // console.log(query);
      this.$store.dispatch('searching',{query})
      this.$store.commit('SEARCHING',query);
    },
    historyClick(query){
      this.$store.dispatch('searching',{query})
    }
  },
  watch:{
    search_value:function(){
      this.$store.state.booklist.book=[];
    this.$store.state.searching.autoSearch_books=[];
      let query=this.search_value;
      this.$store.dispatch("autosearching",{query});
    }
  },
  computed:{
    autoSearch_books(){
      return this.$store.state.searching.autoSearch_books;
    },
    search_history(){
      return this.$store.state.searching.search_history;
    }
  },
  mounted(){
    this.$store.state.booklist.book=[];
    this.$store.state.searching.autoSearch_books=[];
  }
};
</script>
<style>
.search-head {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1rem;
  background: #b93321;
}
.search-head > img {
  width: 16px;
  height: 16px;
  position: absolute;
  left: 1.4rem;
  line-height: 3.5rem;
  top: 1rem;
}
.search-input {
  width: 100%;
  color: #515151;
  font-size: 12px;
  line-height: 1.4rem;
  padding-left: 1.8rem;
  border-radius: 0.2rem;
  border: none;
}

.search {
  width: 100%;
  padding: .3rem;
  height: inherit;
  flex-direction: column;
}
.search-value{
  width: inherit;
  justify-content: flex-start
}
.search-value ul{
  width: inherit;
  display: block;
}

.search-value ul li{
  width: inherit;
  height: 36px;
  padding: .2rem;
  justify-content: flex-start;
  border-bottom: 0.01rem solid #f3f3f3;
}

.search-history {
  width: inherit;
  display: flex;
  justify-content: space-between;
  padding: 0.4rem;
  line-height: 1rem;
  font-size: 0.7rem;
}
.search-history > span {
  font-size: 14px;
  color: #515151;
}
.search-history img {
  width: 16px;
  height: 16px;
}
@media (min-width: 414px) {
  .search-history {
    width: 100%;
    position: absolute;
    top: 50px;
    height: 50px;
  }
}

.search-history-recode{
  width: inherit;
  justify-content: flex-start
}
.search-history-recode ul{
  width: inherit;
  display: block;
}

.search-history-recode ul li{
  width: inherit;
  height: 30px;
  padding: .5rem;
  justify-content: flex-start;
  border-bottom: 0.01rem solid #f3f3f3;
  color: #ccc;
}
</style>



