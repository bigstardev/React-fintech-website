import React, {Component} from "react";
import './SimpleList.css';

const array = ['one', 'two', 'three'];

class SimpleList extends Component {
    renderList () {
        const list = this.props.array;
        const listItems = list.map((item, index) => {
            return (
                <li
                    key={index}
                    className="List-item"
                >
                    <p className="List-content">{item}</p>
                </li>
            )
        });
        return (
            <ul className="List">
                {listItems}
            </ul>
        );
    }

    render () {
        return (
            this.renderList()
        )
    }
}

export default SimpleList;
