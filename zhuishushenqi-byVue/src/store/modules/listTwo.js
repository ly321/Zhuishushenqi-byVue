import {getCatalogList, getNovel, getNovelList, getRankBook,getBook, getCatalog, getChangeSource} from '../../service/http'
export default{
    state:{
        title:'',
        booklist:[],
        rankList:{},
        novelBody:'',
    },
    mutations:{
        UPDATEBOOKLIST(state,res){
            state.booklist=res
        },
        UPDATEBOOKTITLE(state,res){
            state.title=res;
        },
        UPDATEBODY(state,res){
            let arr=res.split('\n');
            arr=arr.map(data=>`<p>${data}</p>`)
            res=arr.join('');
            state.novelBody=`<p>${res}</p>`;
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
        },
        updateRanking(context,{id}){
            getRankBook(id).then(res=>{
                context.commit('UPDATEBOOKTITLE',res.ranking.title);
                
            })
        },
        updatebookdetail(context,{id}){
            getBook(id).then(res=>{
                context.commit('UPDATEBOOKTITLE','书籍详情');
            })
        },

        updatebookcontent(context,{id,page}){
            getChangeSource(id).then(res=>{
                        return res[1]._id;
            }).then(data=>{
                getCatalog(data).then(res=>{
                    context.commit('UPDATEBOOKTITLE',res.chapters[page-1].title);
                    return res.chapters[page-1].link
            }).then(link=>{
                getNovel(link).then(res=>{
                    context.commit('UPDATEBODY',res.chapter.body);
                })
            })
         })    
        }
    }
}