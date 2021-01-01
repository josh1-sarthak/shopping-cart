import React, { useState } from 'react';
import styled, { createGlobalStyle } from "styled-components";
import CardDetail from './components/CardDetail';
import CartView from './components/CartView';
import LandingCard from './components/LandingCard';

const GlobalStyle = createGlobalStyle`
   body {
       background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("https://images.unsplash.com/photo-1559551409-dadc959f76b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80");
   }
`; 

const DivContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: none;
  width: 80vw;
  height: 700px;
  margin: 30px auto;
  font-family: monospace;
`;

const LeftSection = styled.div`
  border: 2px solid black;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: none;
  padding: 5px;
  grid-gap: 5px;
`;

const DivCard = styled.div`
  border: 4px solid black;
  height: 220px;
  margin: 2px;
  width: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const RightSection = styled.div`
  border: 2px solid black;
  display: grid;
  grid-template-rows: 1.75fr 1.25fr;
  grid-template-columns: none;
  overflow: hidden;
`;

const DivCardDetail = styled.div`
  border: 2px solid black;
  padding: 5px;
`;

const DivCartView = styled.div`
  border: 2px solid black;
  padding: 5px;
  overflow: auto;
`;


const App = () => {
  const [currentCard, setCurrentCard] = useState({img: '', name:'', price: ''});
  const [quantity, setQuantity] = useState(1);
  const [currOrder, setCurrOrder] = useState({order_name:'', order_price: '', order_qty: ''});
  const [orders, setOrders] = useState([]); // for storing orders

  const handleClick = (e) =>{
    const item = e.currentTarget;
    const itemImg = item.querySelector('img').src;
    const itemName = item.textContent.replace(/Rs. [0-9]+/g, "").trim();
    const itemPrice = Number(item.textContent.match(/[0-9]+/g));
    setCurrentCard(currentCard => ({...currentCard, img: itemImg, name: itemName, price: itemPrice}));
  }

  const handleInc = () => {
    setQuantity(quantity + 1);
  }
  
  const handleDec = () => {
    if (quantity <= 1) {
      return;
    }
    setQuantity(quantity - 1);
  }
  
  const handleInput = (e) => {
    const qty= Number(e.target.value);
    setQuantity(qty);
  }


  const addToCart = () => {
    const orderNow = {...currOrder, order_name: currentCard.name, order_price: currentCard.price, order_qty: quantity};
    setCurrOrder(orderNow);
    for (let item of orders){ // if item already present in orders list, don't duplicate it
      if (item.order_name === orderNow.order_name) {
      return;
      }
    }
    setOrders(orders => [...orders, orderNow]);
  };

  const removeOrder = (orderItem) => {
    setOrders(netOrders => (netOrders.filter(item => item.order_name !== orderItem.order_name)));
  }

  const jackets = [
    {
      img: "https://assets.ajio.com/medias/sys_master/root/20201107/RXb3/5fa59a1ef997dd8c838cbfd5/-1117Wx1400H-441102042-grey-MODEL.jpg",
      jacket_name: "Team Spirit-Puffer Jacket",
      jacket_cost: "Rs. 1899",
    },
    {
      img: "https://assets.ajio.com/medias/sys_master/root/20201208/Fz5V/5fce7b4faeb269d563319f6b/-1117Wx1400H-460776375-khaki-MODEL.jpg",
      jacket_name: "Fort Collins-Bomber Jacket",
      jacket_cost: "Rs. 2063",
    },
    {
      img: "https://assets.ajio.com/medias/sys_master/root/h8b/hb8/12037357142046/-1117Wx1400H-460259694-brown-MODEL.jpg",
      jacket_name: "Indian Garage-Biker Jacket",
      jacket_cost: "Rs. 2205",
    },
    {
      img: "https://assets.ajio.com/medias/sys_master/root/20201031/UXvA/5f9c609df997dd8c83800b27/-1117Wx1400H-441105682-olive-MODEL.jpg",
      jacket_name: "Netplay-Bomber Jacket",
      jacket_cost: "Rs. 2099",
    },
    {
      img: "https://assets.ajio.com/medias/sys_master/root/20201016/4Sh5/5f88974ff997dd8c8367a66b/-1117Wx1400H-460731673-blue-MODEL.jpg",
      jacket_name: "Levis-Military Jacket",
      jacket_cost: "Rs. 4799",
    },
    {
      img: "https://assets.ajio.com/medias/sys_master/root/20201121/PZh2/5fb80b94aeb269d56316e731/-1117Wx1400H-410272530-02a-MODEL.jpg",
      jacket_name: "Superdry-Commuter Jacket",
      jacket_cost: "Rs. 9999",
    },
    {
      img: "https://assets.ajio.com/medias/sys_master/root/20201202/STrk/5fc68ca1aeb269d56324facc/-1117Wx1400H-460793126-wine-MODEL.jpg",
      jacket_name: "UCB-Bomber Jacket",
      jacket_cost: "Rs. 3024",
    },
    {
      img: "https://assets.ajio.com/medias/sys_master/root/20201206/ojb9/5fcc55c2aeb269d5632dae10/-473Wx593H-461667014-yellow-MODEL.jpg",
      jacket_name: "Okane-Bomber Jacket",
      jacket_cost: "Rs. 1575",
    },
    {
      img: "https://assets.ajio.com/medias/sys_master/root/20201031/qb40/5f9c62e8f997dd8c8380206b/-473Wx593H-420046044-vine-MODEL.jpg",
      jacket_name: "John Players-Padded Jacket",
      jacket_cost: "Rs. 1599",
    }
  ]


  return (
    <DivContainer>
    <GlobalStyle/>
      <LeftSection>
        {jackets.map((jacketItem) =>
          <DivCard onClick={handleClick}>
          <img src={jacketItem.img} width="200px" height="180px" alt={jacketItem.jacket_name} />
          {jacketItem.jacket_name} <br/>
          <strong> {jacketItem.jacket_cost} </strong>
          </DivCard>
        )}
      </LeftSection>
      <RightSection> {/* some props are kept with same name to avoid confusion*/}
        <DivCardDetail>
          {currentCard.name === '' ? 
          <LandingCard/> :
          <CardDetail currentCard={currentCard} quantity={quantity} addToCart={addToCart} increment={handleInc} decrement={handleDec} enteredInput={handleInput} />}
        </DivCardDetail>
        <DivCartView>
          <CartView orders={orders} removeOrder={removeOrder} />
        </DivCartView>
      </RightSection>
    </DivContainer>
  );
}



export default App;