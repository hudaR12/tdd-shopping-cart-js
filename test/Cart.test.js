const Cart = require('../src/Cart.js');
const Item = require('../src/Item.js');

describe('Shopping Cart',() =>{
    it('Empty Cart',() => {
     //Setup   
        const cart = new Cart();
        const expected = 0;
    //Exercise
        const result = cart.getCartItems();
    //Assert
        expect(result).toEqual(expected);
    })

})

it( 'Adding items to cart' ,() => {
    //setup
    const cart = new Cart();
    const item = new Item("Conditioner", 1000, true);
    let quantity = 1;
    //act
    cart.addItems(item,quantity);
    let expected = item.price * quantity;
    let res = cart.totalPrice;
    //assert
    expect(res).toBe(expected);
})