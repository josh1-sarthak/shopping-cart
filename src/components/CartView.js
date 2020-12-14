import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';


const CartView = (props) => {
    return (
          <div>
          <h3> Cart ({props.orders.length}) </h3>
          <table>
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
                  <td> <button onClick={() => props.removeOrder(orderItem)}> <FaTrashAlt/> </button> </td>
                </tr>
                )
              })}
            </tbody>
          </table>
          <strong> Final Price-> {props.orders.reduce((prev, next)=> prev + (next.order_price * next.order_qty), 0)} ({props.orders.reduce((prev, next)=> prev + next.order_qty, 0)})</strong> 
          </div>
    );
};

export default CartView;
