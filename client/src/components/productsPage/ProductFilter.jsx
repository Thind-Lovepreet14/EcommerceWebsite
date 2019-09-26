import React from 'react';
import ProductFilterMenu from './ProductFilterMenu';
import ProductFilterResults from './ProductFilterResults';

class ProductFilter extends React.Component {

    constructor() {
        super();
        this.handleFormInput = this.handleFormInput.bind(this);
        this.state = {
            gender: 0
        }
    }

    handleFormInput(gender) {
        this.setState({
            gender: gender

        })
    }

    render() {
        return (
            <div className="filter">
                <ProductFilterMenu
                    gender={this.props.gender}
                    onFormInput={this.handleFormInput}
                />
                <ProductFilterResults
                    products={this.props.products}
                    gender={this.props.gender}
                />
            </div>
        );
    }
}

export default ProductFilter;