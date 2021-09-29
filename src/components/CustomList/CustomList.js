import React, {Component} from "react";
import './CustomList.css';
import Check from './check.svg';

class CustomList extends Component {
    renderList () {
        const list = this.props.array;
        const listItems = list.map((item, index) => {
            return (
                <li
                    key={index}
                    className="list-item"
                >
                    <Check/><p className="list-content">{item}</p>
                </li>
            )
        });
        return (
            <ul className={`Custom-List ${(this.props.dark) ? `dark ` : ''}`}>
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

export default  CustomList ;
