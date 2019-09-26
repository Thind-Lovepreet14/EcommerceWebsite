import React from 'react';
import Product from './Product';

class ProductFilterResults extends React.Component {

    render() {
        const products = this.props.products;
        const results = [];

        products.map((product) => {
            if (this.props.gender === 0 || this.props.gender === 'All Products') {
                results.push(<Product product={product} />);
            }
            else if (product.gender === this.props.gender) {
                results.push(<Product product={product} />);
            }
        });

        return (
            <div className="filter-results">
                <div className="blocks blocks_3up row">
                    {results}
                </div>
            </div>
        )
    }
}

export default ProductFilterResults;