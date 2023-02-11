console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create a global variable named basket and set it to an empty array.

let basket = [];

// Create a function called addItem. It should:
// take an input parameter for a string item
// add the new item to the global array basket.
// return true indicating the item was added

function addItem( item ){
    console.log('testing # of items:', item);
    if (basket.length > 0){
        return true;
    }
    return false;
}
console.log(`Basket is: ${basket}`);
console.log('Adding some items - should be true:', addItem(basket.push('milk', 'cereal', 'bananas')));
console.log(`Basket is now: ${basket}`);

// Create a function called listItems. It should:
// loop over the items in the basket array
// console.log each individual item on a new line

let index = 0;
function listItems(){
    while(index < basket.length){
        console.log(basket[index]);
        index++;
    }
}
listItems();

// Create a function called empty. It should:
// reset the basket to an empty array

function empty(){
    if (basket.length > 0){
        basket.length = 0;
        return basket;
    }
}
empty()
console.log('Now basket array should be empty:', basket);