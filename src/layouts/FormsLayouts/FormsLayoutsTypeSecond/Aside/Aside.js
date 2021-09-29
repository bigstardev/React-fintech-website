import React from "react";
import Divider from "../../../../components/Divider/Divider";
import classes from "./Aside.module.css"
import {List} from "antd";
import {Check} from "../../../../components/Icons/Icons";

const Aside = (props) => {
    return (
        <section className={`${classes.aside}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <div className={classes.wrapper}>
                <h2>{props.title}</h2>
                <Divider/>
                <h3>{props.subtitle}</h3>
                <p className={`normal-text ${classes.description}`}>{props.description}</p>
                <div className={classes.list}>
                    <List
                        itemLayout="horizontal"
                        dataSource={props.array}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Check/>}
                                    description={item}
                                />
                            </List.Item>
                        )}
                    />
                </div>
                <div className={classes.logos}>
                    {props.children}
                </div>
            </div>
        </section>
    )
}

export default Aside