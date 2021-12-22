export const addCart=(book)=>{
    return {type:'ADD_CART',payload:book}
}

export const deleteFromCart=(id)=>{
    return{type:'DELETE_ITEM',payload:id}
}

export const getTotalPrice=()=>{
    return{type:'TOTAL_PRICE'}
}

export const toggleItem=(type,id)=>{
    return {type:'INCORDEC' ,payload:{type,id}}
}