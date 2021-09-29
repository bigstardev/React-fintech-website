import React, {Component} from "react";
import './Button.css';

class Button extends Component {

    render (){

        return(
          <React.Fragment>
              {this.props.link === true ?
                  <a
                      href={this.props.href}
                      className={`Button ${this.props.classes} ${this.props.size}`}
                      onClick={this.props.onClick}
                      style={{borderRadius: `${this.props.radius}`}}
                  >
                      {this.props.leftIcon}
                      <span>{this.props.value}</span>
                      {this.props.rightIcon}
                  </a>
                  : <button
                      className={`Button ${this.props.classes} ${this.props.size}`}
                      type={this.props.type}
                      onClick={this.props.onClick}
                      style={{borderRadius: `${this.props.radius}`}}
                  >
                      {this.props.leftIcon}
                      <span>{this.props.value}</span>
                      {this.props.rightIcon}
                  </button>
              }
          </React.Fragment>
        )
 }
}

export default Button
