import React from "react";
import './UserPicList.css';
import {Avatar} from "antd";
import {User} from "../Icons/Icons";


const UserPicList = (props) => {
    return  props.target.map((person, index) => {
        {if (index === props.element ) {
            return (
                <button
                    key={person + index}
                    id={person.id}
                    onClick={props.onClick}
                    className="Simple-button active"
                >{
                    person.avatar ?
                        <Avatar
                            size={65}
                            src={person.avatar}
                        />
                        :
                        <Avatar
                            size={65}
                            icon={<User fill={"#ffffff"}/>}
                            style={{
                                fontSize: 0,
                                backgroundColor: '#345DEE',
                            }}
                        />
                }

                </button>
            )
        } else {
            return (
                <button
                    key={person + index}
                    id={person.id}
                    onClick={props.onClick}
                    className="Simple-button"
                >
                    {
                        person.avatar ?
                            <Avatar
                                size={65}
                                src={person.avatar}
                            />
                            :
                            <Avatar
                                size={65}
                                icon={<User fill={"#ffffff"}/>}
                                style={{
                                    fontSize: 0,
                                    backgroundColor: '#345DEE',
                                }}
                            />
                    }
                </button>
            )
        }
        }

    })
}

export default UserPicList