import React from "react";
import classes from "./Price.module.css"
import {List} from "antd";
import {Check, Close} from "../../../../components/Icons/Icons";
import Button from "../../../../components/Button/Button";

const Price = (props) => {

    const {usage, features, support} = props.data;

    return (
        <div className={`${classes.price} ${(props.dark) ?  `dark ${classes.dark}` : ''} ${(props.custom) ? `${classes.custom}` : ''}`}>
            <div className={classes.header}>
                <div className={classes.title}>
                    {props.title}
                </div>
                <p className={classes.description}>
                    {props.desciption}
                </p>
                <div className={classes.total}>
                    {'$' + props.price}
                    <span>USD / month</span>
                </div>
            </div>
            <List
                className={classes.hiddenList}
                header={<div>Usage</div>}
                itemLayout="horizontal"
                dataSource={usage}
                renderItem={item =>
                    <List.Item>
                        <span>{item.value}</span>
                    </List.Item>
                }
            />
            <List
                header={<div>Features</div>}
                itemLayout="horizontal"
                dataSource={features}
                renderItem={item =>
                    <List.Item>
                        {item.value === true ?
                            <Check /> : <Close/>
                        }
                        <span className={classes.info}>{item.description}</span>
                    </List.Item>
                }
            />
            <List
                header={<div>Support</div>}
                itemLayout="horizontal"
                dataSource={support}
                renderItem={item =>
                    <List.Item>
                        {item.value === true ?
                            <Check /> : <Close/>
                        }
                        <span  className={classes.info}>{item.description}</span>
                    </List.Item>
                }
            />
            <Button
                link={true}
                href={props.link}
                classes={`primary big simple btn-block w-100 ${classes.link}`}
                value="Get Started"
            />
        </div>
    )
}

export default Price