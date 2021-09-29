import React from "react";
import InputPage from "../../../../components/InputPage/InputPage";
import Divider from "../../../../components/Divider/Divider";
import Button from "../../../../components/Button/Button";
import {Cart} from "../../../../components/Icons/Icons";

import classes from "./Aside.module.css"

const Pictures = (props) => {
    const listItems = props.array.map((item, index) => {
        return (
            <div
                style={{cursor: "pointer"}}
                onClick={props.click}
                index={index}
                key={index}
            >
                <img src={item} alt=""/>
            </div>
        )
    });
    return (
        <div>
            {listItems}
        </div>
    )
}

const buttonText = "Buy Now";

const Aside = (props) => {
    return (
        <div className={`${classes.aside}  ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
           <div className={classes.gridWrapper}>
               <div className={classes.topLevel}>
                   <div className={classes.first}>
                       <h2>{props.title}</h2>
                   </div>
                   <div className={`${classes.second } ${classes.price}`}>
                       ${props.total}
                   </div>
               </div>
               <div className={classes.pictures}>
                   <Pictures
                       array={props.array}
                       click={props.click}
                   />
               </div>
               <div className={classes.description}>
                   <p className={`normal-text ${classes.description}`}>{props.description}</p>
               </div>
               <div className={classes.middleLevel}>
                   <div className={classes.first}>
                       <p className={classes.label}>Quantity</p>
                       <InputPage
                           value={props.value}
                           decrease={props.decrease}
                           increase={props.increase}
                           classes="big"
                       />
                   </div>
                   <div className={classes.second}>
                       <p className={classes.label}>Size</p>
                       {props.select}
                   </div>
                   <div className={classes.third}>
                       <Button
                           link={true}
                           href={props.link}
                           classes={"primary big simple w-100 left-icon"}
                           value={buttonText}
                           leftIcon={<Cart fill="#ffffff"/>}
                       />
                   </div>
                   <div className={classes.fourth}>
                       <p className={`${classes.smallText} text-left`}>{props.totalDescription}</p>
                       <Divider/>
                   </div>

               </div>
           </div>
       </div>
    )
}

export default Aside
