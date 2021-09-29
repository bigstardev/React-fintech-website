import React, {Component} from "react";
import {Container, Col , Row} from "reactstrap";
import 'antd/dist/antd.css';
import {Collapse, List,} from 'antd';
import Ecommerce from "./Ecommerce/EcommerceTypeEleventh";
import Button from "../../../components/Button/Button";
import placeholder from "../../../img/placeholder-gray.png";
import {Fade} from "react-awesome-reveal";
import classes from "./EcommerceLayoutsTypeThirteenth.module.css"

const { Panel } = Collapse;

const dataWoman = [
    'Jackets',
    'Coats',
    'Dresses',
    'Blazers | Waistcoats',
    'Jumpsuits',
    'Shirts | Blouses',
    'Knitwear',
    'T-Shirts',
];

const dataMan = [
    'Jackets',
    'Coats',
    'Dresses',
    'Blazers | Waistcoats',
    'Jumpsuits',
    'Shirts | Blouses',
    'Knitwear',
    'T-Shirts',
];

const dataKids = [
    'Jackets',
    'Coats',
    'Dresses',
    'Blazers | Waistcoats',
    'Jumpsuits',
    'Shirts | Blouses',
    'Knitwear',
    'T-Shirts',
];

const dataHome = [
    'Jackets',
    'Coats',
    'Dresses',
    'Blazers | Waistcoats',
    'Jumpsuits',
    'Shirts | Blouses',
    'Knitwear',
    'T-Shirts',
];


const itemsForView = 4;
const strong = "Summer Sale";
const title = "Craft Collection";
class EcommerceLayoutsTypeThirteenth extends Component {

    state = {
        itemsInCategory: 0,
        itemsForView: itemsForView ,
        activeCategory: 'women',
        activeSubcategory: 'jackets',
        products: [
            {
                title: 'Shorts with Tie Belt',
                description: 'Running Shoe',
                price: '5.99',
                poster: null,
                category: 'women',
                subcategory: 'jackets',
                link: './some-link',
            },
            {
                title: 'Sleeveless Jersey',
                description: 'Women\'s Running Shoe',
                price: '6.99',
                poster: null,
                category: 'women',
                subcategory: 'jackets',
                link: './some-link',
            },
            {
                title: 'Sleeveless Jersey',
                description: 'Women\'s Running Shoe',
                price: '6.99',
                poster: null,
                category: 'women',
                subcategory: 'jackets',
                link: './some-link',
            },
            {
                title: 'Sleeveless Jersey',
                description: 'Women\'s Running Shoe',
                price: '6.99',
                poster: null,
                category: 'women',
                subcategory: 'jackets',
                link: './some-link',
            },
            {
                title: 'Sleeveless Jersey',
                description: 'Women\'s Running Shoe',
                price: '6.99',
                poster: null,
                category: 'women',
                subcategory: 'jackets',
                link: './some-link',
            },
            {
                title: 'Sleeveless Jersey',
                description: 'Women\'s Running Shoe',
                price: '6.99',
                poster: null,
                category: 'women',
                subcategory: 'jackets',
                link: './some-link',
            },
            {
                title: 'Sleeveless Jersey',
                description: 'Women\'s Running Shoe',
                price: '6.99',
                poster: null,
                category: 'women',
                subcategory: 'jackets',
                link: './some-link',
            },
            {
                title: 'Airy Tunic',
                description: 'Running Shoe',
                price: '7.99',
                poster: null,
                category: 'women',
                subcategory: 'dresses',
                link: './some-link',
            },
            {
                title: 'Shorts with Tie Belt',
                description: 'Women\'s Running Shoe',
                price: '8.99',
                poster: null,
                category: 'women',
                subcategory: 'dresses',
                link: './some-link',
            },
            {
                title: 'Shorts with Tie Belt',
                description: 'Women\'s Running Shoe',
                price: '8.99',
                poster: null,
                category: 'women',
                subcategory: 'dresses',
                link: './some-link',
            },
            {
                title: 'Shorts with Tie Belt',
                description: 'Women\'s Running Shoe',
                price: '8.99',
                poster: null,
                category: 'women',
                subcategory: 'dresses',
                link: './some-link',
            },
            {
                title: 'Shorts with Tie Belt',
                description: 'Women\'s Running Shoe',
                price: '8.99',
                poster: null,
                category: 'women',
                subcategory: 'dresses',
                link: './some-link',
            },
            {
                title: 'Shorts with Tie Belt',
                description: 'Women\'s Running Shoe',
                price: '8.99',
                poster: null,
                category: 'women',
                subcategory: 'dresses',
                link: './some-link',
            },
            {
                title: 'Sleeveless Jersey',
                description: 'Running Shoe',
                price: '4.99',
                poster: null,
                category: 'man',
                subcategory: 'jackets',
                link: './some-link',
            },
            {
                title: 'Airy Tunic',
                description: 'Women\'s Running Shoe',
                price: '7.99',
                poster: null,
                category: 'man',
                subcategory: 'jackets',
                link: './some-link',
            },
            {
                title: 'Shorts with Tie Belt',
                description: 'Running Shoe',
                price: '6.99',
                poster: null,
                category: 'man',
                subcategory: 'jackets',
                link: './some-link',
            },
            {
                title: 'Sleeveless Jersey',
                description: 'Women\'s Running Shoe',
                price: '7.99',
                poster: null,
                category: 'kids',
                link: './some-link',
            },
            {
                title: 'Airy Tunic',
                description: 'Running Shoe',
                price: '7.99',
                poster: null,
                category: 'kids',
                link: './some-link',
            },
            {
                title: 'Airy Tunic',
                description: 'Women\'s Running Shoe',
                price: '7.99',
                poster: null,
                category: 'kids',
                link: './some-link',
            },
            {
                title: 'Sleeveless Jersey',
                description: 'Running Shoe',
                price: '7.99',
                poster: null,
                category: 'kids',
                link: './some-link',
            },
            {
                title: 'Shorts with Tie Belt',
                description: 'Women\'s Running Shoe',
                price: '7.99',
                poster: null,
                category: 'home',
                link: './some-link',
            },
            {
                title: 'Shorts with Tie Belt',
                description: 'Women\'s Running Shoe',
                price: '7.99',
                poster: null,
                category: 'home',
                link: './some-link',
            },
            {
                title: 'Shorts with Tie Belt',
                description: 'Women\'s Running Shoe',
                price: '7.99',
                poster: null,
                category: 'home',
                link: './some-link',
            },
            {
                title: 'Shorts with Tie Belt',
                description: 'Women\'s Running Shoe',
                price: '7.99',
                poster: null,
                category: 'home',
                link: './some-link',
            },

        ]
    }

    onButtonClickHandler = (event) => {
        event.preventDefault();
        const card = this.state.products;
        const listItems =  card.filter((element) => {
                if (element.category == this.state.activeCategory && element.subcategory == this.state.activeSubcategory) {
                    return true
                }
            }
        );

        this.setState({itemsForView: listItems.length});
    }

    renderCards () {
        const card = this.state.products;
        const listItems = card.filter((element) => {
                if (element.category == this.state.activeCategory && element.subcategory == this.state.activeSubcategory) {
                    return true
                }
            }
        ).filter((element, index) => {
                if (index < this.state.itemsForView) {
                    return true
                }
            }
        ).map((item, index) => {
            return (
                <Col lg="6" md="6" sm="6" key={index} className={classes.item}>
                    <Ecommerce
                        key={index}
                        link={item.link}
                        title={item.title}
                        price={item.price}
                        dark={this.props.dark ? true : false}
                    >
                        {
                            item.poster ?
                                item.poster
                                :
                                placeholder
                        }
                    </Ecommerce>
                </Col>
            )
        });
        return (
            <Row>
                {listItems}
            </Row>
        );
    }

    onListClickHandler = (event) => {
        event.preventDefault();

        Array.from(event.target.closest(".ant-collapse").querySelectorAll('.ant-list-item')).forEach((item) => {
            item.classList.remove('active')
        })
        event.target.classList.add('active');
    }

    onItemsClickHandler = (event) => {
        event.preventDefault();
        const currentSubcategoryValue = event.currentTarget.innerText.toLowerCase().replace(/ /g,"-");
        const currentCategoryValue = event.currentTarget.closest(".ant-collapse-content").previousSibling.innerText.toLowerCase().replace(/ /g,"-");

        this.setState({activeCategory: currentCategoryValue });
        this.setState({activeSubcategory: currentSubcategoryValue });
        this.setState({itemsForView: itemsForView});
    }


    render() {

        return (
            <section className={`section ${classes.ecommerce} ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.gridWrapper}>
                    <Container>
                        <Row className={classes.headerRow}>
                            <Col lg="8" md="8" className="mx-auto text-center">
                                <Fade down triggerOnce={true}>
                                    <strong style={{display: 'block'}}>{strong}</strong>
                                </Fade>
                                <Fade down delay={50} triggerOnce={true}>
                                    <h1 className={classes.title}>{title}</h1>
                                </Fade>
                            </Col>
                        </Row>

                        <Row className={classes.contentRow}>
                            <Col lg="3" md="3" onClick={this.onListClickHandler}>
                                <Fade delay={100} triggerOnce={true}>
                                    <Collapse bordered={false} defaultActiveKey={['1']} onClick={this.onListClickHandler} className={this.props.dark ? 'dark' : null}>
                                        <Panel header="Women" key="1" showArrow={false}>
                                            <List
                                                size="small"
                                                dataSource={dataWoman}
                                                renderItem={item =>
                                                    <List.Item
                                                        onClick={this.onItemsClickHandler}
                                                    >
                                                        {item}
                                                    </List.Item>
                                                }
                                            />
                                        </Panel>
                                        <Panel header="Man" key="2" showArrow={false}>
                                            <List
                                                size="small"
                                                dataSource={dataMan}
                                                renderItem={item =>
                                                    <List.Item
                                                        onClick={this.onItemsClickHandler}
                                                    >
                                                        {item}
                                                    </List.Item>
                                                }
                                            />
                                        </Panel>
                                        <Panel header="Kids" key="3" showArrow={false}>
                                            <List
                                                size="small"
                                                dataSource={dataKids}
                                                renderItem={item =>
                                                    <List.Item
                                                        onClick={this.onItemsClickHandler}
                                                    >
                                                        {item}
                                                    </List.Item>
                                                }
                                            />
                                        </Panel>
                                        <Panel header="Home" key="4" showArrow={false}>
                                            <List
                                                size="small"
                                                dataSource={dataHome}
                                                renderItem={item =>
                                                    <List.Item
                                                        onClick={this.onItemsClickHandler}
                                                    >
                                                        {item}
                                                    </List.Item>
                                                }
                                            />
                                        </Panel>
                                    </Collapse>
                                </Fade>
                            </Col>

                            <Col lg={{size: 8, offset: 1}} md={{size: 8, offset: 1}} className={classes.cardsColumn}>
                                <Fade delay={200} triggerOnce={true}>
                                    {this.renderCards()}
                                </Fade>
                            </Col>

                            <Col lg={{size: 8, offset: 4}} md={{size: 8, offset: 4}} className={classes.buttonColumn}>
                                <Fade down delay={250} triggerOnce={true}>
                                    <Button
                                        classes={"neutral outline simple big w-100"}
                                        value={"Load More"}
                                        onClick={this.onButtonClickHandler}
                                    />
                                </Fade>

                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        )
    }
}

export default EcommerceLayoutsTypeThirteenth