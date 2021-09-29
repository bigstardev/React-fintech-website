import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";

import SimpleForm from "./SimpleForm/SimpleForm";
import Card from "./Card/Card";

import { Fade } from "react-awesome-reveal";
import classes from "./EcommerceLayoutsTypeNineteenth.module.css"
import Nav from "../EcommerceLayoutsTypeEighteenth/Nav/Nav";

const title = "Delivery address";
const secondTitle = "New Address";

class EcommerceLayoutsTypeNineteenth extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    id: '1',
                    name: 'Bakhtiyar Sattarov',
                    street: '559 Borer Forges',
                    zipCode: 'T0J 0H0',
                    phone: '+380 24 672 5634',
                },
                {
                    id: '2',
                    name: 'Bakhtiyar Sattarov',
                    street: '600 Borer Forges',
                    zipCode: 'T0J YYY',
                    phone: '+380 24 672 4567',
                },
            ]
        }
        this.onDelete = this.onDelete.bind(this);
    }


    onDelete(id) {
      
        const {data} = this.state;
        const dataClone = [...data];

 
        let itemId = dataClone.find(item => item.id === id);
        let position = dataClone.indexOf(itemId);
        
        if(itemId) {
            dataClone.splice(position, 1);

            this.setState({
                data: dataClone
              });
        }
    }

renderCards() {
    const card = this.state.data;
    const listItems = card.map((item, index) => {
        return (
            <Card
                key={index}
                id={item.id}
                title={item.name}
                description={`${item.street} , ${item.zipCode}`}
                phone={item.phone}
                onDelete={this.onDelete}
                dark={this.props.dark ? true : false}
            >
            </Card>
        )
    });
    return (
        <div className={classes.cardWrapper}>
            <Fade down delay={150} triggerOnce={true}>
            {listItems}
            </Fade>
        </div>
    );
}


render() {

    return (
        <section className={`section ${classes.ecommerce} ${(this.props.dark) ? `dark ${classes.dark}` : ''}`}>
            <div className={classes.gridWrapper}>
                <Container>
                    <Row className={classes.headerRow}>
                        <Col lg={2} md={2}>
                            <Nav dark={this.props.dark ? true : false} />
                        </Col>
                        <Col lg={9} md={9}>
                            <Fade down delay={100} triggerOnce={true}>
                                <h2 className={classes.title}>{title}</h2>
                            </Fade>
                            
                            {this.state.data.length >= 1 && this.renderCards()}
        
                            <Fade down delay={200} triggerOnce={true}>
                                <h3>{secondTitle}</h3>
                                <SimpleForm
                                    dark={this.props.dark ? true : false}
                                />
                            </Fade>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}
    }

export default EcommerceLayoutsTypeNineteenth