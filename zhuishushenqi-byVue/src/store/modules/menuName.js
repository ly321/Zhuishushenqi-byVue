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