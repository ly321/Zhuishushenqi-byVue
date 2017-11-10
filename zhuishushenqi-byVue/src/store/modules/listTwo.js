import {getCatalogList} from '../../service/http'
export default{
    state:{
        title:'',
        booklist:[]
    },
    mutations:{
        UPDATEBOOKLIST(state,res){
            
            state.booklist=res
        },
        UPDATEBOOKTITLE(state,res){
            state.title=res;
        }
        
    },
    actions:{
        updateBooklist(context,{name,sex}){
            getCatalogList().then((res)=>{
                let result; 
                if(sex&&sex.length){
                    result=res[sex].filter(data=>data.major==name)[0];
                }
                context.commit('UPDATEBOOKLIST',result.mins);
                context.commit('UPDATEBOOKTITLE',result.major);
            })
        }
    }
}