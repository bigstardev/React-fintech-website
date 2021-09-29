import React from 'react';
import './Base-Switcher.css';
import { Switch } from 'antd';

const BaseSwitch = (props) => {
    return (
        <div  className={`Base-Switch ${props.classes}`}>
            <div className="wrapper">
                <div className="left">
                    <p className="text">
                        {props.left}
                    </p>
                </div>
                <div className="middle">
                    <Switch defaultChecked onChange={props.onChange} className={props.color}/>
                </div>
                <div className="right">
                    <p className="text">
                        {props.right}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BaseSwitch;