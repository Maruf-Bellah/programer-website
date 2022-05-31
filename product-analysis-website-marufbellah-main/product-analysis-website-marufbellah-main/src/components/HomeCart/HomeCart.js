import React from 'react';
import './HomeCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar, faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';

const HomeCart = (props) => {
     const {name,picture,blog} = props.product;
     return (
          <div className='homeCart'>
             

     <div className='review-info'>

          <div className='review-details'>
          <img className='reviw-img' src={picture} alt="" />
           <h5>{name}</h5>
          <p>{blog}</p>
       
               <p>
                    <span>
                         <FontAwesomeIcon className='icon' icon={faStar}></FontAwesomeIcon>
                         <FontAwesomeIcon className='icon' icon={faStar}></FontAwesomeIcon>
                         <FontAwesomeIcon className='icon' icon={faStar}></FontAwesomeIcon>
                         <FontAwesomeIcon className='icon' icon={faStar}></FontAwesomeIcon>
                         <FontAwesomeIcon className='icon' icon={faStarHalfStroke}></FontAwesomeIcon>
                    </span>
               </p>
      

     </div>
     </div>

          </div>
     );
};

export default HomeCart;