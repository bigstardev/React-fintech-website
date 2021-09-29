import React, {Component} from 'react';
import {Nav, NavItem, NavLink} from "reactstrap";
import './Nav.css';



class NavList extends Component {

    onListClickHandler = (event) => {
        event.preventDefault();

        Array.from(event.target.closest(".Nav-List").querySelectorAll('.nav-link')).forEach((item) => {
            item.classList.remove('active')
        })
        event.target.classList.add('active');
    }

    renderList () {
        const list = this.props.array;
        const listItems = list.map((item, index) => {

            return (
                    <NavItem
                        key={index}
                    >
                        <NavLink
                            href={'#'}
                            key={index}
                            onClick={this.props.onClick}
                            className={(index === 0 ? 'active' : null)}

                        >{item}
                        </NavLink>
                    </NavItem>
            )
        });
        return (
            <Nav
                vertical
                onClick={this.onListClickHandler}
            >
                {listItems}
            </Nav>
        );
    }

    render () {
        return (
            <div className={`Nav-List ${this.props.size} ${(this.props.dark) ?  `dark` : ''}`}>
                {this.renderList()}
            </div>
        )
    }
}

export default NavList ;