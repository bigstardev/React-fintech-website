import React, { Component } from "react";
import "./Badges.css";
import { AppStore, PlayMarket } from "../Icons/Icons";

class Badge extends Component {
  render() {
    const isAppStore = this.props.store;
    const color = this.props.color || "#345dee";
    const radius = this.props.radius || "8";

    return (
      <React.Fragment>
        {isAppStore ? (
          <a
            href="https://www.apple.com/app-store/"
            className={`Badge-link ${this.props.classes}`}
            style={{
              backgroundColor: `${color}`,
              borderRadius: `${radius}px`
            }}
          >
            <span className="left">
              <AppStore fill="#ffffff" />
            </span>
            <span className="right">
              <p>Download on the</p>
              <strong className="Badge-strong">App Store</strong>
            </span>
          </a>
        ) : (
          <a
            href="https://play.google.com/store/apps"
            className={`Badge-link ${this.props.classes}`}
            style={{
              backgroundColor: `${color}`,
              borderRadius: `${radius}px`
            }}
          >
            <span className="left">
              <PlayMarket fill="#ffffff" />
            </span>
            <span className="right">
              <p>Get it on</p>
              <strong className="Badge-strong">Google Play</strong>
            </span>
          </a>
        )}
      </React.Fragment>
    );
  }
}

export default Badge;
