import React, { Component } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import "./Tabs.css";

class Tabs extends Component {

    onLinksClickHandler = (event, string) => {
        event.preventDefault();
        Array.from(event.target.parentNode.childNodes).forEach((item) => {
            item.classList.remove('active')
        })
        event.target.classList.add('active')
    }

    renderList() {
        const list = this.props.array;
        const listItems = list.map((item, index) => {
            return (
                <Button
                    key={index}
                    className={`Tabs-item ${index === 0 ? "active" : null}`}
                    onClick={this.props.onClick}

                >
                    {item}
                </Button>
            );
        });
        return <ButtonGroup className={`Tabs-group ${this.props.classes}`} onClick={this.onLinksClickHandler}>{listItems}</ButtonGroup>;
    }

    render() {
        return this.renderList();
    }
}

export default Tabs;
