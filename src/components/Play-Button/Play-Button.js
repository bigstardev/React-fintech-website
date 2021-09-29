import React, {Component} from "react";
import './Play-Button.css';

class PlayButton extends Component {

    render() {
        const fill = this.props.fill || '#345DEE';

        return (
            <React.Fragment>
                {this.props.type === "round"
                    ? <a className={`PlayButton ${this.props.size} ${this.props.type}`} onClick={this.props.click}>
                        <svg width="50" height="32" viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="50" height="32" rx="16" fill={fill}/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M22 10L22 22L32 16L22 10Z" fill="white"/>
                        </svg>

                    </a>
                    : <a className={`PlayButton ${this.props.size} ${this.props.type}`} onClick={this.props.click}>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill={fill}/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M21.12 18.24L21.12 29.76L30.72 24L21.12 18.24Z" fill="white"/>
                        </svg>

                    </a>
                }
            </React.Fragment>
        )
    }
}

export default PlayButton
