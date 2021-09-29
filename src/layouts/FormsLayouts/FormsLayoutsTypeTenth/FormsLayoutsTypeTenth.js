import React, { useState, useEffect } from 'react';

import './FormsLayoutsTypeTenth.css';
import {Container, Col , Row} from "reactstrap";
import VerticalModal from "./VerticalModal/VerticalModal";
import Button from "../../../components/Button/Button";

function FormsLayoutsTypeTenth (props) {
    const [modalShow, setModalShow] = React.useState(false);



    return (
        <section>
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Button
                            onClick={() => setModalShow(true)}
                            classes={"primary big simple w-100"}
                            value={" Launch vertically centered modal"}
                        />
                    </Col>
                </Row>
            </Container>

            <VerticalModal
                dark={props.dark ? true : false}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </section>
    );
}
export default FormsLayoutsTypeTenth