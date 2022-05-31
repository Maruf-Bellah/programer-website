import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from './me.jpg1.jpg'
import './Home.css'
import HomeCart from '../HomeCart/HomeCart';
import Futtar from '../Futtar/Futtar';


const Home = () => {
   /*   const [products, setProducts] = useProducts(); */
     const [product, setProduct] = useState([]);


     useEffect(()=>{
          fetch('tshirts.json')
          .then(res => res.json())
          .then(data => setProduct(data))
     },[]);

    

     return (
          <Container className='home-info'>
   
               <Row>

             

                     <Col sm={6}>
                          <div className='mt-5  ' >
                               <h1 className='ps-5 pe-3'>BE A PROGRAMER</h1>
                               <h1 className='ps-5 pe-3'>BUILD THE FUTURE</h1>
                               <p className='ps-5 pe-3'>If you want to be a good programmer, you have to give a lot of time, as our programming hero 5th batch brothers and sisters are giving now, if you want to be a good programmer you have to give, so think before you learn. ..</p>

                              

                              <Link to='/about'>
                              <Button className='ms-5 mt-3' variant="primary" size="lg">
                                   Read more ➜
                              </Button>{' '}

                              </Link>
                          </div>
                     </Col>

                     <Col sm={6}>
                          <div className='img'>
                               <img className='w-100 ' width='100'  src={img} alt="" />
                          </div>
                     </Col>
                   
               </Row>
               <div className='text-end'>
                    <h2 className='text-center pb-5'>Student Reviews : {product.length}</h2>
                    <div className="home">
                    {
                         product.slice(0, 3).map(product => <HomeCart 
                         key={product._id}
                         product={product}
                         ></HomeCart>)
                    }
                    </div>

                    <Link to='/reviews'>
                    <Button className='ms-5 mt-3 mb-3' variant="primary" size="lg">
                                   See All Students ➜
                              </Button>{' '}
                    </Link>
               </div>
           
          </Container>
     );
};

export default Home;