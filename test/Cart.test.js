const Cart = require('../src/Cart.js');
const Item = require('../src/Item.js');

describe('Shopping Cart',() =>{
    it('Empty Cart',() => {
     //Setup   
        const cart = new Cart();
        const expected = 0;
    //Exercise
        const result = cart.getCartItems;
    //Assert
        expect(result).toEqual(expected);
    })

})