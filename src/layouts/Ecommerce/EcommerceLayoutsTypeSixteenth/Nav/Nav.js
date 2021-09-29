import React from "react";
import classes from './Nav.module.css';

const Nav = (props) => {

    return (
        <>
            <ul className={`${classes.nav} ${(props.dark) ?  `${classes.dark}` : ''}`}>
                <li>
                    <a className={`${classes.link} ${classes.active}`} href="#">Orders</a>
                </li>
                <li>
                    <a className={classes.link} href="#">Settings</a>
                </li>
                <li>
                    <a className={classes.link} href="#">Address</a>
                </li>
                <li>
                    <a className={classes.link} href="#">Logout</a>
                </li>
            </ul>
        </>
    )
}

export default Nav