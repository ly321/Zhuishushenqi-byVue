import {getBook} from '../../service/http'
export default{
    state:{
        bookDetail:{},
    },
    mutations:{
        UPDATEBOOKDETAIL(state,res){
            res.cover='http://statics.zhuishushenqi.com'+res.cover;
            
            state.bookDetail=res;
        }
    },
    actions:{
        updatebookdetail(context,{id}){
            getBook(id).then(res=>{
                context.commit('UPDATEBOOKDETAIL',res);
            })
        }
    }
}