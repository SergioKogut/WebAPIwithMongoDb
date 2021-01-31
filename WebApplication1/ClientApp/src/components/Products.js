import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MainService from '../services/mainservice'
import Product from './Product'
//import { css } from '@emotion/react';
//import ClipLoader from "react-spinners/ClipLoader";
import Spinner from './spinner'

import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';



  // Can be a string as well. Need to ensure each key-value pair ends with ;
// const override = css`
// display: block;
// margin: 0 auto;
// border-color: red;
// `;

export class Products extends Component {
  state = {
      loading:true
  };

  componentDidMount() {
    console.log("information:products.componentDidMount");
    MainService.getProducts()
      .then((response) => {
        //  console.log('--success list products--', response.data);
        this.setState({ 
            data: response.data,
            loading:false
         });
        console.log("State:", this.state);
      })
      .catch(() => {
        console.log("--products failed--");
      });
  }

  render() {
    const { data,loading } = this.state;
    console.log("data-render", data);

    const ProductList = ({ products }) => {
      return (
        products.map((product) => (
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">{product.Name}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                            {product.Category}
                            </CardSubtitle>
                        <CardText>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            )));
    };
    if (loading) {
        return <Spinner />;
    }
    return (
      <Container>
        <Row>
          <Col>
            {/* <Product /> */}
            <ProductList products={data} />
            {/* {productsList} */}
          </Col>
        </Row>
      </Container>
    );
  }
}
 
export default Products;