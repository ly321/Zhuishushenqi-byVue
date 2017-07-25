export default {
    state: {
        title: '书架'
    },
    mutations: {
        UPDATETITLE(state, title) {
            state.title = title;
        },
    },
}