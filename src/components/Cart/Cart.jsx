import React from 'react';

const Cart = ({seceltedActors,cost,remaining}) => {
     
    return (
        <div>
            <h2> Actor: {seceltedActors.length}</h2>
     <h2>Total Cost:{cost}</h2>
     <h2>Remaining:{remaining}</h2>
            {seceltedActors.map((actor) => (
        <li key={actor.id}>
            {actor.name}
        </li>
       
      ))}
        </div>
    );
};

export default Cart;