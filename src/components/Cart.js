import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteFromCart } from '../actions';
import { getTotalPrice } from '../actions';
import { toggleItem } from '../actions';
import { useEffect } from 'react';
const Cart = ({myBooks,deleteFromCart,totalPrice,getTotalPrice,toggleItem}) => {

    useEffect(() => {
       getTotalPrice()
    }, [myBooks]);
    return (
        <div>
            <h2>
             <Link to="/">Kitap Listesi</Link> <span>Sepetim</span>
            </h2>

           {myBooks.length>0 &&  <h3>Toplam Sepet Tutarı: &#8378;{totalPrice}</h3>}
         
           {myBooks.map(myBook=>{
               return  <div className="book">
                    <img
                    src={myBook.image}
                    alt="Simyacı"
                    />
                    <div>
                        <h4>{myBook.name}</h4>
                        <p>Yazar: {myBook.author}</p>
                        <p>Fiyat: &#8378;{myBook.price}</p>
                        <p>Toplam: &#8378;{myBook.total}</p>
                        <p>Sepetinizde bu kitaptan toplam {myBook.amount} adet var.</p>
                        <button onClick={e=>toggleItem('dec',myBook.id)}>-</button>
                        <button onClick={e=>deleteFromCart(myBook.id)}>Sepetten Çıkar</button>
                        <button onClick={e=>toggleItem('inc',myBook.id)}>+</button>
                    </div>
                </div>
           })}
        </div>
    );
}

const  mapStateToProps=state=>{
    return {
        myBooks:state.myBooks,
        totalPrice:state.totalPrice

    }
}

export default connect(mapStateToProps,{deleteFromCart,getTotalPrice,toggleItem})(Cart);
