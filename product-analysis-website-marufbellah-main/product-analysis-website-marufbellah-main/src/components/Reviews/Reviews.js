import React, { useEffect, useState } from 'react';
import ReviewInfo from '../ReviewInfo/ReviewInfo';
import './Reviews.css'



const Reviews = () => {
     const [products, setProducts] = useState([]);

     useEffect(()=>{
          fetch('tshirts.json')
          .then(res => res.json())
          .then(data => setProducts(data))
     },[]);
     
     return (
          <div className='review pt-5 mt-3'>
         
                  {
                       products.map(product => <ReviewInfo 
                       key={product._id}
                       product ={product}
                       ></ReviewInfo>)
                  }
             </div>
     );
};

export default Reviews;