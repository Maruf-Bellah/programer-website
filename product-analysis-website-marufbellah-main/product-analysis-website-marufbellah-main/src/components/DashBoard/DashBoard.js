import React from 'react';
import './DashBoard.css'
import Cart from '../Chart/Cart';

const DashBoard = () => {
     return (
          <div className='dashBoard d-none  d-md-block'>
               <Cart></Cart>
          </div>
     );
};

export default DashBoard;