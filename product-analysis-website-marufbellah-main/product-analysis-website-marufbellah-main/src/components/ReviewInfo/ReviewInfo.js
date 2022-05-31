import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar, faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import './ReviewInfo.css'


const ReviewInfo = ({product}) => {
     const {name,picture,blog} = product;
     return (
          <Container >
   <div className='review-info  '>

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

          </Container>
       
     );
};

export default ReviewInfo;