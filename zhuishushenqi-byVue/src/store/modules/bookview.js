import {getNovelList} from '../../service/http'
export default{
    state:{
        book:[]
    },
    mutations:{
        UPDATEBOOK(state,res){
            state.book=res;
        }
    },
    actions:{
        updatebook(context,{gender,type,major,minor,start,limit}){
            getNovelList(gender,type,major,minor,start,limit).then(res=>{
                context.commit('UPDATEBOOK',res);
            })
        }
    }
}