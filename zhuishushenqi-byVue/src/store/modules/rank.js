import { getRank } from '../../service/http'
export default {
    state: {
        male: [],
        maleOther: [],
        female: [],
        femaleOther: [],
    },
    mutations: {
        UPDATERANKLIST(state, res) {
            state.male = res.male.slice(0, 4);
            state.maleOther = res.male.slice(5);
            state.female = res.female.slice(0, 4);
            state.femaleOther = res.female.slice(5);
        },
    },
    actions: {
        updateRankList(context) {
            getRank().then((res) => {
                context.commit('UPDATERANKLIST', res);
            })
        }
    }
}