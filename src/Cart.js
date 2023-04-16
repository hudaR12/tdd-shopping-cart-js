module.exports = class Cart {

   constructor(){
        this.items = [];
        this.totalPrice = 0;
     }
        
    getCartItems = () => { 
        return this.items.length;
         };
    
    addItems = (item , quantity) =>{
        this.item.quantity = quantity;
        this.items.push(item);
        this.totalPrice += item.price * quantity;
        return this.items;
     }
}