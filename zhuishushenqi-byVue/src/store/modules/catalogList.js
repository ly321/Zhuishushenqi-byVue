import { getCatalogList } from '../../service/http'
export default {
    state: {
        same: [],
        otherList: [],
    },
    mutations: {
        UPDATESAME(state, res) {
            state.same = res.male;
        }
    },
    actions: {
        updateSame(context) {
            getCatalogList().then((res) => {
                context.commit('UPDATESAME', res);
            })
        }
    }
}