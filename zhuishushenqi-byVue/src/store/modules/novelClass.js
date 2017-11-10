import { getNovelClass } from '../../service/http'
export default {
    state: {
        males: [],
        females: [],
        presses: []
    },
    mutations: {
        UPDATEDATE(state, res) {
            state.males = res.male;
            state.females = res.female;
            state.presses = res.press;
        },
       
    },
    actions: {
        updateDate(context) {
            getNovelClass().then((res) => {
                context.commit('UPDATEDATE', res);
            })
        }
    }
}