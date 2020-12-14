import React, { useState } from 'react';
import styled from "styled-components";
import CardDetail from './components/CardDetail';
import CartView from './components/CartView';
import LandingCard from './components/LandingCard';


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
  border: 2px solid black;
  height: 220px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`;

const DivCartView = styled.div`
  border: 2px solid black;
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


  return (
    <DivContainer>
      <LeftSection>
        <DivCard onClick={handleClick}> 
        <img src="https://assets.ajio.com/medias/sys_master/root/20201107/RXb3/5fa59a1ef997dd8c838cbfd5/-1117Wx1400H-441102042-grey-MODEL.jpg" width="200px" height="180px" alt="puffer_jacket"/> 
        Team Spirit-Puffer Jacket <br/> 
        <strong> Rs. 1899 </strong> 
        </DivCard>
    
        <DivCard onClick={handleClick}>
        <img src="https://assets.ajio.com/medias/sys_master/root/20201208/Fz5V/5fce7b4faeb269d563319f6b/-1117Wx1400H-460776375-khaki-MODEL.jpg" width="200px" height="180px" alt="bomber_jacket"/>
        Fort Collins-Bomber Jacket <br/>
        <strong> Rs. 2063 </strong>
        </DivCard>
    
        <DivCard onClick={handleClick}> 
        <img src="https://assets.ajio.com/medias/sys_master/root/h8b/hb8/12037357142046/-1117Wx1400H-460259694-brown-MODEL.jpg" width="200px" height="180px" alt="biker_jacket"/>
        Indian Garage-Biker Jacket <br/>
        <strong> Rs. 2205 </strong>
        </DivCard>
    
        <DivCard onClick={handleClick}> 
        <img src="https://assets.ajio.com/medias/sys_master/root/20201031/UXvA/5f9c609df997dd8c83800b27/-1117Wx1400H-441105682-olive-MODEL.jpg" width="200px" height="180px" alt="bomber_jacket"/> 
        Netplay-Bomber Jacket <br/>
        <strong> Rs. 2099 </strong>
        </DivCard>

        <DivCard onClick={handleClick}> 
        <img src="https://assets.ajio.com/medias/sys_master/root/20201016/4Sh5/5f88974ff997dd8c8367a66b/-1117Wx1400H-460731673-blue-MODEL.jpg" width="200px" height="180px" alt="military_jacket"/> 
        Levis-Military Jacket <br/>
        <strong> Rs. 4799 </strong>
        </DivCard>
  
        <DivCard onClick={handleClick}> 
        <img src="https://assets.ajio.com/medias/sys_master/root/20201121/PZh2/5fb80b94aeb269d56316e731/-1117Wx1400H-410272530-02a-MODEL.jpg" width="200px" height="180px" alt="commuter_jacket"/> 
        Superdry-Commuter Jacket <br/>
        <strong> Rs. 9999 </strong>
        </DivCard>

        <DivCard onClick={handleClick}> 
        <img src="https://assets.ajio.com/medias/sys_master/root/20201202/STrk/5fc68ca1aeb269d56324facc/-1117Wx1400H-460793126-wine-MODEL.jpg" width="200px" height="180px" alt="bomber_jacket"/> 
        UCB-Bomber Jacket <br/>
        <strong> Rs. 3024 </strong>
        </DivCard>

        <DivCard onClick={handleClick}> 
        <img src="https://assets.ajio.com/medias/sys_master/root/20201206/ojb9/5fcc55c2aeb269d5632dae10/-473Wx593H-461667014-yellow-MODEL.jpg" width="200px" height="180px" alt="bomber_jacket"/>
        Okane-Bomber Jacket <br/>
        <strong> Rs. 1575 </strong>
        </DivCard>
      

        <DivCard onClick={handleClick}> 
        <img src="https://assets.ajio.com/medias/sys_master/root/20201031/qb40/5f9c62e8f997dd8c8380206b/-473Wx593H-420046044-vine-MODEL.jpg" width="200px" height="180px" alt="padded_jacket"/> 
        John Players-Padded Jacket <br/>
        <strong> Rs. 1599 </strong>
        </DivCard>

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