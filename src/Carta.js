import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


 const Carta=(props)=>{
     const datos=props.data;
     console.log(datos)
    return(
            
         <Col sm={12} md={6} lg={3}>
            <Card bg="ligth" >
                <Card.Img variant="top" className="" src={datos.flag} fluid="true" />
                <Card.Body>
                    <Card.Title><strong>{datos.name}</strong></Card.Title>
                    <Card.Text>
                        <strong>Capital: </strong>{datos.capital}
                    </Card.Text>
                    <Card.Text>
                        <strong>Region: </strong>{datos.region}
                    </Card.Text>
                    <Card.Text>
                        <strong>Poblacion: </strong>{datos.population}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>  
      
    );
}

export default Carta;

