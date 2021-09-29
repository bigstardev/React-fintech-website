import { Container} from "reactstrap";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Fade} from "react-awesome-reveal";
import classes from "./StatsLayoutsTypeFourth.module.css"


const plus = '+';
const dolar = '$';
const thousand = "K"

class StatsLayoutsTypeFourth extends Component {

    state = {

        stats: [
            {
                type: 'Followers',
                value: 108.6

            },
            {
                type: 'Customers',
                value: 28.6

            },
            {
                type: 'Donates',
                value: 7.6

            },
            {
                type: 'Projects',
                value: 300

            }
        ]
    }

    render() {
        return (
            <div>
                <section className={`section ${classes.stats} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <div className={classes.wrapper}>
                                <div className={classes.column}>
                                    <Fade top triggerOnce={true}>
                                     <span className={classes.boldText}>
                                    {this.state.stats[0].value}{thousand}
                                </span>
                                        <p className="normal-text text-center">
                                            {this.state.stats[0].type}
                                        </p>
                                    </Fade>
                                </div>
                                <div className={classes.column}>
                                    <Fade top delay={100} triggerOnce={true}>
                                    <span className={classes.boldText}>
                                     {this.state.stats[1].value}{thousand}
                                </span>
                                        <p className="normal-text text-center">
                                            {this.state.stats[1].type}
                                        </p>
                                    </Fade>
                                </div>
                                <div className={classes.column}>
                                    <Fade top delay={200} triggerOnce={true}>
                                     <span className={classes.boldText}>
                                    {dolar}{this.state.stats[2].value}{thousand}
                                </span>
                                        <p className="normal-text text-center">
                                            {this.state.stats[2].type}
                                        </p>
                                    </Fade>
                                </div>
                                <div className={classes.column}>
                                    <Fade top delay={300} triggerOnce={true}>
                                     <span className={classes.boldText}>
                                    {this.state.stats[3].value}{plus}
                                </span>
                                        <p className="normal-text text-center">
                                            {this.state.stats[3].type}
                                        </p>
                                    </Fade>
                                </div>
                            </div>
                        </Container>
                    </div>
                </section>
            </div>
        )
    }
}

export default StatsLayoutsTypeFourth