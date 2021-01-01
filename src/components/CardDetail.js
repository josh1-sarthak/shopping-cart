import React from 'react';
import { FaArrowDown, FaArrowUp, FaShoppingCart } from 'react-icons/fa';

const CardDetail = (props) => {
    
    return(
          <div style={{display: "flex", flexDirection: "column",  alignItems: "center", justifyContent: "center"}}>
          <img src={props.currentCard.img} width="300" height="300" alt="displayedImg" />
          <p> {props.currentCard.name} </p>
          <p> <strong> Rs. {props.currentCard.price} </strong> </p>
          <div>
           <button style={{background: "#758E4F"}} onClick={props.decrement}><FaArrowDown/></button> 
           <input style={{width: "3em"}} type="number" min="1" value={props.quantity} onChange={props.enteredInput} /> 
           <button style={{background: "#758E4F"}} onClick={props.increment}><FaArrowUp/></button>
          </div>
          <button style={{width: "150px", cursor: "pointer", background: "#6A7152", color: "white", borderRadius: "4px"}} onClick={props.addToCart}> Add to cart! <FaShoppingCart/> </button>
          </div>
    );
}

export default CardDetail;