export default {
    state: {
        bookshelf: true,
        bookclass: false,
        rank: false,
        search: false,
    },
    mutations: {
        UPDATEBOOKSHELF(state) {
            state.bookshelf = true;
            state.bookclass = false;
            state.rank = false;
            state.search = false;
        },
        UPDATEBOOKCLASS(state) {
            state.bookshelf = false;
            state.bookclass = true;
            state.rank = false;
            state.search = false;
        },
        UPDATERANK(state) {
            state.bookshelf = false;
            state.bookclass = false;
            state.rank = true;
            state.search = false;
        },
        UPDATESEARCH(state) {
            state.bookshelf = false;
            state.bookclass = false;
            state.rank = false;
            state.search = true;
        },
    },
}