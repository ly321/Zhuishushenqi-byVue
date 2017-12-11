import {
  getNovelList,
  getBook,
  getRankBook,
  getSearch
} from '../../service/http'
export default {
  state: {
    book: [],
    weekID: '',
    monthID: '',
    totalID: '',
  },
  mutations: {
    UPDATEBOOK(state, res) {
      state.book = res.books;
      if (res.monthRank) {
        state.monthID = res.monthRank;
      }
      if (res.totalRank) {
        state.totalID = res.totalRank;
      }
    }
  },
  actions: {
    updatebook(context, {
      gender,
      type,
      major,
      minor,
      start,
      limit
    }) {
      getNovelList(gender, type, major, minor, start, limit).then(res => {
        context.commit('UPDATEBOOK', res);
      })
    },
    updateChangeClass(context, {
      gender,
      type,
      major,
      minor,
      start,
      limit
    }) {
      getNovelList(gender, type, major, minor, start, limit).then(res => {
        context.commit('UPDATEBOOK', res);
      })
    },

    updateBookList(context, {
      id
    }) {
      getRankBook(id).then(res => {
        context.commit('UPDATEBOOK', res.ranking);
      })
    },
    searching(context,{query}){
      getSearch(query).then(res=>{
          context.commit('UPDATEBOOK',res);
      })
  },
  }
}
