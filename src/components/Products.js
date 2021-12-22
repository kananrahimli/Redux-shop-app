import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCart } from '../actions';
const Products = ({books,myBooks,addCart}) => {
        console.log(myBooks);
    return (
    <div>
        <h2>
            <span>Kitap Listesi</span>
            <Link to="/cart">Sepetim</Link>
        </h2>

        {books.map(book=>{
            return <div className="book" key={book.id}>
                    <img
                    src={book.image}
                    alt="Simyaci"
                    />
                    <div>
                        <h4>{book.name}</h4>
                        <p>Yazar: {book.author}</p>
                        <p>Fiyat: &#8378; {book.price}</p>
                        <button onClick={e=>addCart(book)}>Sepete Ekle</button>
                    </div>
             </div>
        })}
       
    </div>
  
    );
}


const mapStateToProps=(state)=>{
    return {
        books:state.books,
        myBooks:state.myBooks
    }
}

export default connect(mapStateToProps,{addCart})(Products);
