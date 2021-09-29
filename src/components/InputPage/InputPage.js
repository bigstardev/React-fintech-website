import React, { Component } from "react";
import "./InputPage.css";
import {Remove, Plus, ChevronDown, ChevronUp} from "../Icons/Icons";

function onChange(value) {
  console.log('changed', value);
}

class InputPage extends Component {
    state = {
        total: 0
    };

    decrease = (evt) => {
        evt.preventDefault();
        if (this.props.min && this.state.total > this.props.min) {
            this.setState({ total: this.state.total - 1 });
        }
        else if (!this.props.min && this.state.total > 0) {
            this.setState({ total: this.state.total - 1 });
        }
    };

    increase = (evt) => {
        evt.preventDefault();
        if (this.props.max && this.state.total < this.props.max) {
            this.setState({ total: this.state.total + 1 });
        } else if (!this.props.max) {
            this.setState({ total: this.state.total + 1 });
        }
    };

    render() {
        return (
            <div
                className={`def-number-input number-input ${this.props.classes}  ${
                    this.props.dark ? `dark` : ""
                }`}
            >
                <button
                    onClick={this.props.decrease ? this.props.decrease : this.decrease}
                    className="minus"
                >
                    {this.props.custom ? <ChevronDown /> : <Remove />}
                </button>
                <input
                    className="quantity"
                    name="quantity"
                    onChange={onChange}
                    value={this.props.value ? this.props.value : this.state.total}
                    type="number"
                    min={this.props.min}
                    max={this.props.max}
                />
                <button
                    onClick={this.props.increase ? this.props.increase : this.increase}
                    className="plus"
                >
                    {this.props.custom ? <ChevronUp /> : <Plus />}
                </button>
            </div>
        );
    }
}

export default InputPage
