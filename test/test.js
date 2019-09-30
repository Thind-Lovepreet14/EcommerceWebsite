const expect = require('chai').expect;
const request = require('request');

it('Checks if endpoint is functional', function(done) {
    request('http://localhost:4000/api/contacts', function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done()
    });
})

it('returns the correct product by product_id', function(done) {
    request('http://localhost:4000/api/products/5', function(error,response,body) {
        expect(body).to.equal(`{"product_id":5,"product_name":"Tiro 19 Training Pants","product_type":"mens","product_category":"Men's Soccer","image":"./images/product-tiro.jpg"}`)
        done()
    })
})

