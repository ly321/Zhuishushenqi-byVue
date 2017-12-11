export default{
    state:{
        books:[],
    },
    mutations:{
        ADDBOOK(state,res){
            state.books.push(res);
        }
    },
    actions:{

    }
}