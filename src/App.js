import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Carta from './Carta';

const url_api="https://restcountries.eu/";


class App extends Component{
  
  constructor(){
    super()
    this.state={
      paises:[]
    }
    this.region=['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    this.listarPaises= this.listarPaises.bind(this)
    this.busqueda=this.busqueda.bind(this)
    this.getRegion=this.getRegion.bind(this)
  }
   async listarPaises(ruta){
    let url=url_api+ruta;
    const response= await axios.get(url)
    this.setState({
      paises:response.data
    })
    
  } 

   busqueda(e){
      var busqueda= e.target.value;
      if(busqueda.length > 0){
        let url='rest/v2/name/'+busqueda;
        this.listarPaises(url)
      }else{
        this.listarPaises("rest/v2/regionalbloc/cais")
      }
    } 
    getRegion(e){
      var region=e.target.value
      let filtro="rest/v2/region/"+region.toLowerCase()
      this.listarPaises(filtro)
    }

  componentDidMount(){
    this.listarPaises("rest/v2/regionalbloc/cais")
  }

  
  
  
  render(){
    
    const datos=this.state.paises.map((item,i)=>{
   
      return <Carta data={item} key={i} />
    })
    const region=this.region.map((item,i)=>{
    return <option key={i} value={item}>{item}</option>
    })
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            Aplicacion de Paises
          </Navbar.Brand>
        </Navbar>
        <Container className="mt-3" >
          <Row>
            <Col xs={12} lg={12} md={12}>
              <Card bg="light">
                <Card.Header>
                  <h4>Buscador de paises</h4>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col xs={12} lg={6} md={6} sm="12">
                      <Form.Group>
                        <Form.Label>Buscador</Form.Label>
                        <Form.Control type="search" placeholder="Buscador de Paises" onChange={this.busqueda} />
                      </Form.Group>
                    </Col>
                    <Col xs={12} lg={6} md={6} sm="12">
                      <Form.Group>
                        <Form.Label>Region</Form.Label>
                        <Form.Control as="select" onChange={this.getRegion}>
                         {region}
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                </Card.Body>
                
              </Card>
            </Col>
          </Row>
          <Row className="mt-2">
              {datos}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
