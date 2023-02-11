console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem( item ){
    console.log('testing # of items:', item);
    if (basket.length > 0){
        return true;
    }
    return false;
}
console.log(`Basket is: ${basket}`);
console.log('Adding milk - should be true:', addItem(basket.push('milk')));
console.log(`Basket is now: ${basket}`);