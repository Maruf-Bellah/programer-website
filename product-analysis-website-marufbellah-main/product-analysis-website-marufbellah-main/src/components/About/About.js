import { Button } from 'bootstrap';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const About = () => {
     return (
          <div>
        
               <Container className='pt-5'>
               <Row>
                   
                    <Col sm={6}>
                    <div className='pt-5'>
                         <h5>About Us ....</h5>
                         <p>
                         There is nothing to say about us, you have come to the web site and made a little horse, this is a lot for us, now we want to do something better, so pray for us that we can be a great web developer like you, if you ever get stuck somewhere I can come closer, I will be very happy if you help me a little as a junior brother, and the day I get a good job after learning the job, I will push you with a treadmill, so I talked a lot, we will talk again later.
                         </p>
                    </div>
                    
                    </Col>

                    <Col className='' sm={6}>
                         <div>
                              <img src="https://media.istockphoto.com/vectors/man-remote-working-bearded-male-hipster-working-at-home-in-couch-on-vector-id1252343814?k=20&m=1252343814&s=612x612&w=0&h=-zHJpqAjzyW_xd4vbzuVzTu56sAFK9OEXy8-_q_vvu8=" alt="" />
                         </div>
                    </Col>
               </Row>
              
               </Container>
          </div>
     );
};

export default About;