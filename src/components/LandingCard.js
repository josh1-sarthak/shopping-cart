import React from 'react';

const LandingCard = () => {
    return (
    <div style={{position: "relative"}}>
        <h1 style={{position: "absolute", zIndex: 100, color: "white", left: 0, top: "250px"}}> Mens' Winter Collection </h1>
        <img style={{position: "absolute", objectFit: "contain"}} src="https://www.thefashionisto.com/wp-content/uploads/2013/08/zara00-800x533.jpg" width="400" height="400" alt="frontview" /> 
    </div>
    );
}

export default LandingCard;
