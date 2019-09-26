import React from 'react';

class ProductFilterMenu extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.onFormInput(
            this.refs['genderInput'].getDOMNode().value,
        );
    }

    render() {
        return (
            <form className="filter-menu">
                <label for="genderInput">Filter By Gender</label>
                <select id="genderInput" ref="genderInput" onChange={this.handleChange}>
                    <option value="All Products">All Products</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                </select>
            </form>
        );
    }
}

export default ProductFilterMenu;