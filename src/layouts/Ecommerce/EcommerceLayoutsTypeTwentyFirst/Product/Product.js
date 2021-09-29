import React from "react";
import classes from "./Product.module.css"
import { List } from "antd";
import { Check } from "../../../../components/Icons/Icons";


const Product = (props) => {

    return (
        <React.Fragment>
            <div className={`${classes.product}  ${(props.dark) ? `dark ${classes.dark}` : ''}`}>
                <h1 className={classes.title}>{props.title}</h1>
                <p className={classes.description}>{props.description}</p>
                <a className={classes.link}>
                    <span>${(+props.price).toFixed(2)}</span>
                    <span>Add to Cart</span>
                </a>
                <List
                    itemLayout="horizontal"
                    dataSource={props.data}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta avatar={<Check />} description={item} />
                        </List.Item>
                    )}
                />
            </div>
        </React.Fragment>
    )
}

export default Product