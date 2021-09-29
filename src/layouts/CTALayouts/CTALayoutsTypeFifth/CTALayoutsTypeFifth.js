import React from "react";
import classes from "./CTALayoutsTypeFifth.module.css"

import Content from "./Content/CTATypeFirst";
import {Container, Col , Row} from "reactstrap";
import {AppLogo} from "../../../components/Icons/Icons";

function CTALayoutsTypeFifth(props) {

    return (
        <React.Fragment>
            <section className={`section  ${classes.cta} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>

                <div className={classes.gridWrapper}>
                    <Container>
                        <Row>
                            <Col lg={8} md={8} className="mx-auto text-center">
                                <Content
                                    title={"The fast & visual way to understand your users"}
                                    description={"Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!"}
                                >
                                    <a href="#" style={{display: 'block'}}>
                                        <AppLogo/>
                                    </a>
                                </Content>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </section>
        </React.Fragment>
    )
}
export default CTALayoutsTypeFifth