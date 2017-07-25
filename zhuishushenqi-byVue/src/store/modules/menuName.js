export default {
    state: {
        bookshelf: true,
        shelfcolor: true,
        bookclass: false,
        classcolor: false,
        rank: false,
        rankcolor: false,
        search: false,
        searchcolor: false,

        //本打算用同一个state，但MenuName.vue中有点击的与其同名，故使用2个state，因水平所限，暂未想到好方法。
    },
    mutations: {
        UPDATEBOOKSHELF(state) {
            state.bookshelf = true;
            state.shelfcolor = true;
            state.bookclass = false;
            state.classcolor = false;
            state.rank = false;
            state.rankcolor = false;
            state.search = false;
            state.searchcolor = false;
        },
        UPDATEBOOKCLASS(state) {
            state.bookshelf = false;
            state.shelfcolor = false;
            state.bookclass = true;
            state.classcolor = true;
            state.rank = false;
            state.rankcolor = false;
            state.search = false;
            state.searchcolor = false;
        },
        UPDATERANK(state) {
            state.bookshelf = false;
            state.shelfcolor = false;
            state.bookclass = false;
            state.classcolor = false;
            state.rank = true;
            state.rankcolor = true;
            state.search = false;
            state.searchcolor = false;
        },
        UPDATESEARCH(state) {
            state.bookshelf = false;
            state.shelfcolor = false;
            state.bookclass = false;
            state.classcolor = false;
            state.rank = false;
            state.rankcolor = false;
            state.search = true;
            state.searchcolor = true;
        },
    },
}