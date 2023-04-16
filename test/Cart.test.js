const Cart = require('../src/Cart.js');
const Item = require('../src/Item.js');

//First AC
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

//Second AC
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

//Third AC
it('Returning the number of items in the cart',() => {
    //setup
    let cart = new Cart();
    let item1 = new Item("Conditioner", 1000, true);
    let item2 = new Item("Soap", 800, true);
    //act
    cart.addItems(item1,1);
    cart.addItems(item2,1);
    let res = cart.itemQuantities(cart.items);
    let expected = ["Conditioner - x1","Soap - x1"]
    //assert
    expect(res).toEqual(expected);
})

//Fourth AC
it('Items with Price and Quantity', () => {
    //setup 
     let cart = new Cart();
     let item1 = new Item("Conditioner", 1000, true);
     let item2 = new Item("Soap", 800, true);
     //act
     cart.addItems(item1,1);
     cart.addItems(item2,1);
    //assert
     let res = cart.itemizedList(cart.items);
     let expected = ["Conditioner x1 - $1000","Soap x1 - $800"]
     expect(res).toEqual(expected);
 })
 
 //fifth AC
 it('Total Price' , () =>{
    //setup
    let cart = new Cart();
    let item1 = new Item("Conditioner", 1000, true);
    let item2 = new Item("Soap", 800, true);
    //act
    cart.addItems(item1,1);
    cart.addItems(item2,1);
    let res = cart.totalPrice
    let expected = 1800
    //assert
    expect(res).toEqual(expected);
})

//Sixth AC
it('onSale Items' , () =>{
    //setup
    let cart = new Cart();
    let item1 = new Item("Conditioner", 1000, true);
    let item2 = new Item("Soap", 800, false);
    //act
    cart.addItems(item1,1);
    cart.addItems(item2,1);
    let res = cart.onSaleCheck(cart.items)
    let expected = ["Conditioner x1 - $1000"]
    //assert
    expect(res).toEqual(expected);
})

