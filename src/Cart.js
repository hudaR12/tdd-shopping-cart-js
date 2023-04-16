module.exports = class Cart {

   constructor(){
        this.items = [];
        this.totalPrice = 0;
     }
        
    getCartItems = () => { 
             return this.items.length;
         };




}
