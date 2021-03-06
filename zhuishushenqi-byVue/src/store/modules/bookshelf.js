export default{
    state:{
        books:[],
    },
    mutations:{
        ADDBOOK(state,res){
            if(res instanceof Array){
                res.map(data=>data.check='');
                state.books=state.books.concat(res);
            }else{
                res.check='';
                state.books.push(res);
            }
        },
        CLEARBOOK(state){
            state.books=[];
        },
        INITCHECK(state,res){
            if(res.method=='add'){
                state.books.map(data=>data.check='unchecked');
            }else{
                state.books.map(data=>data.check='');
            }
        },
        CHANGECHECK(state,res){
            if(state.books[res.id].check==='unchecked'){
                state.books[res.id].check='checked';
            }else{
                state.books[res.id].check='unchecked';
            }
        },
    },
}