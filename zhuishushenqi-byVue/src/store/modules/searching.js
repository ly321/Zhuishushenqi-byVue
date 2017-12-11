import {getAutoSearch,getSearch} from '../../service/http'
export default{
    state:{
        autoSearch_books:[],
        search_history:[],
    },
    mutations:{
        AUTOSEARCHING(state,res){
            state.autoSearch_books=res;
        },
        SEARCHING(state,res){
            state.search_history.push(res);
        }
    },
    actions:{
        autosearching(context,{query}){
            getAutoSearch(query).then(res=>{
                context.commit('AUTOSEARCHING',res);
            })
        },
       
    }
}