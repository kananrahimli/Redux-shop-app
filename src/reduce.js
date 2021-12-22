import { data } from "./data"
const INITIAL_STATE={
    books:data,
    myBooks:[],
    totalPrice:0,
}
export const reduce=(state=INITIAL_STATE,action)=>{

    switch (action.type) {
        case 'ADD_CART':
            return {...state,myBooks:[...state.myBooks,action.payload]}
        case 'DELETE_ITEM':
            return {...state,myBooks:state.myBooks.filter(book=>{
                return book.id!==action.payload
            })}
        case 'INCORDEC':
            return {...state,myBooks:state.myBooks.map(myBook=>{
                if(action.payload.type==='inc'){
                    if(myBook.id===action.payload.id){
                        return {...myBook,amount:myBook.amount+1,total:myBook.price*(myBook.amount+1)}
                    }else{
                        return {...myBook}
                    }
                }
                if(action.payload.type==='dec'){
                    if(myBook.id===action.payload.id){
                        return {...myBook,amount:myBook.amount==0?0:myBook.amount-1,total:myBook.amount==0?0:myBook.price*(myBook.amount-1)}
                    }else{
                        return {...myBook}
                    }
                }
               
            })}
        case 'TOTAL_PRICE':
          let {price}=state.myBooks.reduce((total,item)=>{
              const {amount,price}=item
             total.price+=price*amount
             return total;
          },{price:0})
          price=parseFloat(price.toFixed(2))
         return {...state,totalPrice:price}
        default:
            return state
    }

    
}