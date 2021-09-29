import React from "react";
import classes from "./PricingTypeFirst.module.css"
import Button from "../../../../components/Button/Button";
import SimpleList from "../../../../components/SimpleList/SimpleList";
import {Collapse, List,} from 'antd';
import {Flash} from "../../../../components/Icons/Icons";


const baseLinkText = `Get Now`;

const PricingTypeFirst = (props) => {

    return (
        <div className={`${classes.pricing}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <div className={classes.wrapper}>
                <div className={classes.first}>
                    <h3 className="text-left">{props.title}</h3>
                </div>
                <div className={classes.second}>
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
                <div className={classes.third}>
                    <p className={classes.largeText}>{'$' + props.cost}</p>
                </div>
                <div className={classes.fourth}>
                    <Button
                        link={true}
                        href={props.link}
                        classes={`primary big outline left-icon ${classes.button}`}
                        value={baseLinkText}
                        leftIcon={<Flash fill="#6383F2"/>}
                    />
                </div>
            </div>
        </div>
    )
}

export default PricingTypeFirst
