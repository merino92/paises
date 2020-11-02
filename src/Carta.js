import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'; 

 const Carta=(props)=>{
     const datos=props.data;
    return(

         <Col sm={12} md={6} lg={3}>
            <Card bg="ligth" >
                <Card.Img variant="top" className="" src={datos.flag} fluid="true" />
                <Card.Body>
                    <Card.Title>{datos.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>  
      
    );
}

export default Carta;

