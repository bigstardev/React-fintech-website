import React from "react";
import './UserPic.css';

import User from '../../icons/user.svg';

const UserPic = (props) => {
    return (
        <div className={'UserPic' + ' ' + props.type}>
            <User/>
        </div>
    )
}

export default UserPic