import React from "react";
import classes from './Info.module.css';

const Info = (props) => {
    const {recipient, address,  payment, track, date} = props.data;
    const {person, phone, email} = recipient;
    const {place} = address;
    const {type, property} = payment;

    console.log(props.data);

    return (
        <div className={`${classes.info}  ${(props.dark) ? `dark ${classes.dark}` : ''}`}>
            <div className={classes.wrapper}>
                <div className={classes.item}>
                    <div className={classes.title}>Recipient</div>
                    <div className={classes.content}>
                        <p className={classes.description}>{person}</p>
                        <p className={classes.description}>{phone}</p>
                        <p className={classes.description}>{email}</p>
                    </div>
                </div>
                <div className={classes.item}>
                    <div className={classes.title}>Address</div>
                    <div className={classes.content}>
                        <p className={classes.description}>{place}</p>
                    </div>
                </div>
                <div className={classes.item}>
                    <div className={classes.title}>Payment</div>
                    <div className={classes.content}>
                        <p className={classes.description}>{type}</p>
                        <p className={classes.description}>**** *** **** **** {property}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info