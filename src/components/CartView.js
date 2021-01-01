import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    .show {
      display: block;
    }
    .hide {
      display: none;
    }
`; 



const CartView = (props) => {
    return (
          <div>
          <GlobalStyle/>
          <h3> Cart ({props.orders.length}) </h3>
          <table className={props.orders.length >=1 ? 'show' : 'hide'}>
            <thead>
            <tr>
              <th> Item </th>
              <th> Qty </th>
              <th> Price </th>
              <th> Total </th>
            </tr>
            </thead>
            <tbody>
              {props.orders.map((orderItem)=> {
                return (
                <tr key={orderItem.order_name}>
                  <td> {orderItem.order_name} </td>
                  <td> {orderItem.order_qty} </td>
                  <td> {orderItem.order_price} </td>
                  <td> {orderItem.order_qty * orderItem.order_price} </td>
                  <td> <button style={{background: "#FF8552", cursor: "pointer"}} onClick={() => props.removeOrder(orderItem)}> <FaTrashAlt/> </button> </td>
                </tr>
                )
              })}
            </tbody>
          </table>
          <strong className={props.orders.length >=1 ? 'show' : 'hide'}> Final Price-> {props.orders.reduce((prev, next)=> prev + (next.order_price * next.order_qty), 0)} ({props.orders.reduce((prev, next)=> prev + next.order_qty, 0)})</strong> 
          </div>
    );
};

export default CartView;
