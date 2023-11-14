
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import img1 from '../../../assets/images/ui/1.jpg';
import img2 from '../../../assets/images/ui/3.jpg';
import img3 from '../../../assets/images/ui/6-t.jpg';

const Images = () => {
    return (
        <div>
            <div className="spacer" id="imgs-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Images</h1>
                            <h6 className="subtitle">NMAMIT campus has three main cafeteria where students hangout to eat and chat. Sri Durga Cafeteria is where you get typical south Indian tasty food. It provides a variety of hygienically prepared delicious South Indian, Chinese food, Vegetarian, Non-Vegetarian, Chats, fresh fruit juice and varieties of Ice-creams. Kitchen Bells is another attractive and hygienic place for students to eat where pizzas, burgers, noodles, cakes etc.</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col lg="4" className="m-b-30">
         
                        <img src={img1} alt="img" className="img-responsive img-rounded" width="200" />
                        <p className="m-t-15 m-b-0"></p>
                    </Col>
                    <Col lg="4" className="text-center m-b-30">
                       
                        <img src={img2} alt="img" className="img-circle" width="290" height={290} />
                        <p className="m-t-15 m-b-0"></p>
                    </Col>
                    <Col lg="4">
          
                        <img src={img3} alt="img" className="img-responsive img-thumbnail" width="200" />
                        <p className="m-t-15 m-b-0"></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Images;
