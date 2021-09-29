import React, {Component} from "react";

import {Google, LinkedIn, Twitter} from "../../../components/Icons/Icons";
import Socials from "../../../components/Socials/Socials";
import Frame from "../../../components/Frame/Frame";
import classes from "./FootersLayoutsTypeEleventh.module.css"
import {Fade} from "react-awesome-reveal";

const title = "Contact us";
const description = "Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!";
const phone = "+1 234 567 89 10";
const email = "denis@craftwork.design";
const fax = "234 567 89 10";
const adress = `2464 Royal Ln. Mesa,  
    "New Jersey 45463`;


function FootersLayoutsTypeEleventh (props) {

    return (
        <React.Fragment>
            <section className={`${classes.footer} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.gridWrapper}>
                    <div className={classes.leftColumn}>
                        <Fade top triggerOnce={true}>
                        <h2>{title}</h2>
                        <p className={classes.description}>{description}</p>
                        <div className={classes.contacts}>
                            <div className={classes.item}>
                                <div className={classes.label}>Phone</div>
                                <a href={`tel:${phone}`} className={classes.target}>{phone}</a>
                            </div>
                            <div className={classes.item}>
                                <div className={classes.label}>Phone</div>
                                <a href={`tel:${fax}`} className={classes.target}>{fax}</a>
                            </div>
                            <div className={classes.item}>
                                <div className={classes.label}>Phone</div>
                                <a href={`mailto:${email}`} className={classes.target}>{email}</a>
                            </div>
                        </div>
                        <Socials dark={props.dark ? true : false}>
                            <a href={"./example"}>
                                <Frame size="48" color="#EFF2F6">
                                    <Twitter />
                                </Frame>
                            </a>
                            <a href={"./example"}>
                                <Frame size="48" color="#EFF2F6">
                                    <Google  />
                                </Frame>
                            </a>
                            <a href={"./example"}>
                                <Frame size="48" color="#EFF2F6">
                                    <LinkedIn />
                                </Frame>
                            </a>
                        </Socials>
                        <div className={`${classes.item } ${classes.lastItem}`}>
                            <div className={classes.label}>Phone</div>
                            <address className={classes.target}>{adress}</address>
                        </div>
                        </Fade>
                    </div>
                    <div className={classes.rightColumn}></div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default FootersLayoutsTypeEleventh
