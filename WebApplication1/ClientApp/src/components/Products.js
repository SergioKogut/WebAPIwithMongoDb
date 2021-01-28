import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MainService from '../services/mainservice'
import  Product from  './Product'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

export class Products extends Component {
    state = {  }

    componentDidMount() {
        console.log('information:products.componentDidMount')
        MainService.getProducts().then((response) => {
          //  console.log('--success list products--', response.data);
            this.setState({ data:response.data});
            console.log('State:',this.state)
        })
        .catch(() => {
            console.log('--products failed--');
        })
    }
    
    render() { 
        const { data } = this.state;
        console.log('data-render',data);

       const productsList = ( data == 'undefined' ? data.map(item => (
            <p>{item.Name}</p>
        )) : (<p> no data </p>));

        // const productsList = (
        //     data != 'undefined' ?
        //     data.map(item => (
        //         <Card>
       
        //     <CardBody>
        //       <CardTitle tag="h5">{item.Name}</CardTitle>
        //       <CardSubtitle tag="h6" className="mb-2 text-muted">{item.Category}</CardSubtitle>
        //       <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        //       <Button>Button</Button>
        //     </CardBody>
        //   </Card> 
    
        //     )): ''
            
        //     );
        return ( 
          <Container>
              <Row>
                <Col>
                
                    <Product />
                    {/* {productsList} */}
                </Col>
                
               </Row>
          </Container>
         );
    }
}
 
export default Products;