import React, { Component } from "react";
import "./ButtonSocial.css";
class ButtonSocial extends Component {
    render() {
        const radius = this.props.radius || "8";

        return (
            <React.Fragment>
                <a
                    href={this.props.href}
                    className={`ButtonSocial ${this.props.classes} ${this.props.size}`}
                    style={{
                        borderRadius: `${radius}px`,
                        color: `${this.props.color}`,
                        border: `2px solid ${this.props.color}`,
                    }}
                    onClick={this.props.onClick}
                >
                    <div className="wrapper">
                        <div
                            className="left"
                            style={{ borderColor: `${this.props.color}` }}
                        >
                            {this.props.icon}
                        </div>
                        <div className="right">{this.props.value}</div>
                    </div>
                </a>
            </React.Fragment>
        );
    }
}

export default ButtonSocial;
