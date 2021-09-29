import React from "react";
import classes from "./Aside.module.css"
import {List, Tooltip} from "antd";
import {Alert} from "../../../../components/Icons/Icons";
import BaseSwitch from "../../../../components/Base-Switcher/Base-Switcher";


const Aside = (props) => {


    const {usage, features, support} = props.data;
    console.log(usage);

    return (
        <div className={`${classes.aside} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <div className={classes.header}>
                <BaseSwitch
                    onChange={props.onChange}
                    left="Yearly"
                    right="Monthly"
                />
            </div>
            <List
                header={<div>Usage</div>}
                itemLayout="horizontal"
                dataSource={usage}
                renderItem={item =>
                    <List.Item>
                        {item.notification ?
                            <Tooltip title={item.notification}>
                                <span>{item.description}  <Alert /></span>
                            </Tooltip>
                            :
                            <span>{item.description}</span>
                        }
                    </List.Item>
                }
            />
            <List
                header={<div>Features</div>}
                itemLayout="horizontal"
                dataSource={features}
                renderItem={item =>
                    <List.Item>
                        {item.notification ?
                            <Tooltip title={item.notification}>
                                <span>{item.description}  <Alert /></span>
                            </Tooltip>
                            :
                            <span>{item.description}</span>
                        }
                    </List.Item>
                }
            />
            <List
                header={<div>Support</div>}
                itemLayout="horizontal"
                dataSource={support}
                renderItem={item =>
                    <List.Item>
                        {item.notification ?
                            <Tooltip title={item.notification}>
                                <span>{item.description}  <Alert /></span>
                            </Tooltip>
                            :
                            <span>{item.description}</span>
                        }
                    </List.Item>
                }
            />
        </div>
    )
}

export default Aside