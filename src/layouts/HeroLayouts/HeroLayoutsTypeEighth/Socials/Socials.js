import React from "react";
import {LinkedIn, Twitter, Google} from "../../../../components/Icons/Icons";
import SocialsLinks from "../../../../components/Socials/Socials";
import Oval from "../../../../components/Frame/Frame";

const Socials = (props) => {
    return (
        <div className="socials">
            <p>{props.text}</p>
            <SocialsLinks>
                <a href="#">
                    <Oval
                        variant="normal"
                    >
                        <Twitter/>
                    </Oval>

                </a>
                <a href="#">
                    <Oval
                        variant="normal"
                    >
                        <LinkedIn/>
                    </Oval>
                </a>
                <a href="#">
                    <Oval
                        variant="normal"
                    >
                        <Google/>
                    </Oval>
                </a>
            </SocialsLinks>
        </div>
    )
}

export default Socials