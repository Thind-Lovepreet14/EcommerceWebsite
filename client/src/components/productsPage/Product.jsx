import React from 'react';

class Product extends React.Component {
    render() {
        const product = this.props.product;
        return (
            <div key="product.name" className="col-md-4 product-column">
                <img className="img-fluid" src={product.image} alt={product.name} />
                <p className="text-left">
                    <span className="product-title">{product.product_name}</span>
                    <span className="product-price">${product.pri}</span>
                    <span className="d-block item-description">{product.product_category}</span>
                </p>
            </div>
        )
    }
}

export default Product;