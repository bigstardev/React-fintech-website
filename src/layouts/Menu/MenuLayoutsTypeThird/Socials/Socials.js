import React from "react";
import {LinkedIn, Twitter, Google} from "../../../../components/Icons/Icons";
import SocialsLinks from "../../../../components/Socials/Socials";

const Socials = (props) => {
    return (
        <div className="socials">
            <SocialsLinks>
                <a href="#">
                    <Twitter/>
                </a>
                <a href="#">
                    <LinkedIn/>
                </a>
                <a href="#">
                    <Google/>
                </a>
            </SocialsLinks>
        </div>
    )
}

export default Socials