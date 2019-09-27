import React from 'react';
import Product from './Product';



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
        fetch('api/products') //./data/products.json
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
        }
         else {
            return (
                <Product productsList={this.state.productsList}/>
            );
        }
    }
}

export default ProductDataList;