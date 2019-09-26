import React from 'react';
import ProductFilter from './ProductFilter';

class ProductDataList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            productsList: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/products') //./data/products.json
            .then((res) => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        productsList: data
                    });
                })
            .catch(error => {
                this.setState({
                    isLoaded: true,
                    error
                })
            });
        }
        
    render() {
        const { error, isLoaded, productsList } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ProductFilter products={productsList} />
            );
        }
    }
}

export default ProductDataList;