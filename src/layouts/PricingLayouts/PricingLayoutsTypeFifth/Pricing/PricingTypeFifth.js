import React from "react";
import Button from "../../../../components/Button/Button";
import SimpleList from "../../../../components/SimpleList/SimpleList";
import {Collapse, List,} from 'antd';
import classes from "./PricingTypeFifth.module.css"

const firstLinkText = `Select Plan`;
const secondLinkText = `Learn More`;

const PricingTypeFifth = (props) => {
    return (
        <div className={`${classes.price}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <div className={classes.inner}>
                <h3 className={`${classes.title} text-center`}>{props.title}</h3>
                <p className={`large-text ${classes.largeText} ${classes.price} text-center`}>
                    {(typeof props.cost) == 'number' ? '$' + props.cost : props.cost}
                </p>
                <div className={classes.list}>
                    <List
                        size="small"
                        dataSource={props.array}
                        renderItem={item =>
                            <List.Item>
                                {item}
                            </List.Item>
                        }
                    />
                </div>
                <Button
                    link={true}
                    href={props.firstLink}
                    classes={`primary big simple outline btn-block w-100 ${classes.firstLink}`}
                    value={firstLinkText}
                />
                <a href={props.secondLink}
                   className={`${classes.bottomLink} btn-block ${classes.secondLink } text-center`}>
                    {secondLinkText}
                </a>
            </div>
        </div>
    )
}

export default PricingTypeFifth
