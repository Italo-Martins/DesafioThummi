const express = require('express');
const cors = require('cors');
const {uuid} = require('uuidv4');


const app = express();

app.use(cors());
app.use(express.json());

const products = [];

app.get('/product', (request, response) => {


    const {best} = request.query
    if (best==='true'){
        const bestSellers = products
        bestSellers.sort(function(a, b) {
            if(a.value < b.value) {
              return true;
            } else {
              return  -1;
            }
        });
        
        const results = bestSellers.slice(0,3);

        return response.json(results)
    }

    if (best==='false'){
        const largestInventory = products 
        largestInventory.sort(function(a, b) {
            if(a.quantity < b.quantity) {
              return true;
            } else {
              return  -1;
            }
        });
        
        const results = largestInventory.slice(0,3);

        return response.json(results)
    }

    // const results = bets
    //     ? products.filter(product => product.id === id)
    //     : products;

    return response.json(products);

})

app.post('/createproduct', (request, response) => {

    const {name, value, quantity, code, description} = request.body;

    const productIndex = products.findIndex(product => product.code === code);

    if(productIndex != -1){
        products[productIndex].quantity += quantity;

        return response.json(products[productIndex])
    }

    const product = {
        id: uuid(),
        name, 
        value, 
        quantity, 
        code, 
        description
    }

    products.push(product)

    return response.json(product)
})

app.put('/editproduct/:id', (request, response) => {
    const {id} = request.params
    const {name, code, description} = request.body

    const productIndex = products.findIndex(product => product.id === id)

    if(productIndex < 0){
        return response.status(400).json({error: 'Project not found'})
    }

    const product = products[productIndex]

    products[productIndex] = {
        id: product.id,
        name: name ? name : product.name, 
        value: product.value, 
        quantity: product.quantity, 
        code: code ? code : product.code,
        description:description ? description : product.description
    }

    return response.json([product])
})

app.listen(3333, () => {
    console.log('🚀Back-end started')
})
