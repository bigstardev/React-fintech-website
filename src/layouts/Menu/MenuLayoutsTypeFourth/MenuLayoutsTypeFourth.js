import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";

import classes from "./MenuLayoutsTypeFourth.module.css"
import {Fade} from "react-awesome-reveal";
import Header from "./Header/Header";


class  MenuLayoutsTypeFourth extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <React.Fragment>
                <section className={`${classes.menu} ${(this.props.dark) ? `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Header
                                dark={this.props.dark ? true : false}
                            />
                        </Container>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
export default MenuLayoutsTypeFourth