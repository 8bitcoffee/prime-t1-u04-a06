console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

let basketDiv = document.querySelector("#basket");

function addItem(item) {
    if (isFull()){
        return false;
    }
    else {
        basket.push(item);
        listItems();
        return true;
    }
}

console.log(addItem('banana'), basket);

function listItems(){
    for (let item of basket){
        console.log(item);
    }
    basketDiv.innerHTML = basket;
}

console.log(listItems());

function empty(){
    basket = [];
    listItems();
}

console.log(empty(), basket);

function isFull(){
    if (basket.length < maxItems){
        return false;
    }
    else {
        return true;
    }
}

function removeItem(item){
    let itemIndex = basket.indexOf(item);
    if (itemIndex >= 0){
        basket.splice(itemIndex,1);
        listItems();
        return item;
    }
    else {
        return null;
    }
}










// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
