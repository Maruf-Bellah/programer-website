import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
     return (
          <Container className='pt-5'>
                 <Row>
                    <Col sm={6}><Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey="0">
          <Accordion.Header><h5>What is Context API? Does it work?</h5></Accordion.Header>
          <Accordion.Body>
          The Context API is a way for a child at the bottom to gain access to data at the top without any props drilling. Suppose we need to send data to a component of Reactjs which is the nth component. In this case we can easily send data to that n th component through Context API without drilling props.
          Here basically a context is created and it has to be exported from a file. This context provides 2 components which are Provider and Consumer. And then the parent component has to be wrapped through the Provider component. Diameter is the end of our work. Now we will just set a value to the provider, it can be static or dynamic. In order to receive the child content at the end, I will wrap it with the consumer component and receive the data through an anonymize function.
          </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
          <Accordion.Header><h5>What is the difference between Inline, Block and Inline Block?</h5></Accordion.Header>
          <Accordion.Body>
          Inline: Inline elements sit one after the other, that is, holding a line. They always sit side by side, occupying as much space as needed. Some inline elements are: b, big, i, small, img etc.
          Block: Block elements basically cover all the places of the element. These elements always start from a new line. Usually the block element can have 2 inline or block elements inside. Some block elements are: p, h1, h2, h3, h4, h5, h6, ul, ol, dl, hr, blockquo, etc.
          Inline-Block: When the properties of a block can be applied by keeping an element inline, then that element is basically called Inline-Block element. In this case we use display: inline-block Css. And I also use the CSS of block elements.
          </Accordion.Body>
          </Accordion.Item>
          </Accordion></Col>
                    <Col sm={6}>
                         <div className='mt-5'>
                              <img src="https://www.contract-jobs.com/blog/wp-content/uploads/2021/10/Top-20-Interview-Questions-for-Freshers-With-Answers-870x579.jpg" alt="" />
                         </div>
                    
                    </Col>
               </Row>
          </Container>
          
     );
};

export default Blogs;