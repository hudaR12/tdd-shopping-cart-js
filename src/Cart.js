module.exports = class Cart {

   constructor(){
        this.items = [];
        this.totalPrice = 0;
     }
    
    //this function is used for knowing the items number in the cart
    getCartItems = () => { 
        return this.items.length;
         };
    
         //for adding items to the cart and calculating the totalprice
    addItems = (item , quantity) =>{
        item.quantity = quantity;
        this.items.push(item);
        this.totalPrice += item.price * quantity;
        return this.items;
     }

     //for calculating the items and their quantities in the cart
    itemQuantities = (items) => {
     const itemArr = [];
        for (const item of items) {
            itemArr.push(`${item.name} - x${item.quantity}`);
            }
        return itemArr;
        };
    
    //for calculating the items and their quantities in the cart and price
    itemizedList = (items) => items.map(
            item => `${item.name} x${item.quantity} - $${item.price * item.quantity}`
            );
    
    //for checking and giving the items that are on sale.
    onSaleCheck = (items) =>{
                let onSale =  items.reduce((acc,item)=>{
                    if(item.onSale){
                        acc.push(item);
                    }
                    return acc;
                },[]);
                return this.itemizedList(onSale);
               }

}