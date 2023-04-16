module.exports = class Cart {

   constructor(){
        this.items = [];
        this.totalPrice = 0;
     }
        
    getCartItems = () => { 
        return this.items.length;
         };
    
    addItems = (item , quantity) =>{
        item.quantity = quantity;
        this.items.push(item);
        this.totalPrice += item.price * quantity;
        return this.items;
     }

    itemQuantities = (items) => {
     const itemArr = [];
        for (const item of items) {
            itemArr.push(`${item.name} - x${item.quantity}`);
            }
        return itemArr;
        };

    itemizedList = (items) => items.map(
            item => `${item.name} x${item.quantity} - $${item.price * item.quantity}`
            );
            
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