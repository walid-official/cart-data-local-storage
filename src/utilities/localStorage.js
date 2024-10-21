const getLocalStorage = () => {
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    return [];
}

const saveCartToLS = cart => {
    const CartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',CartStringified)
}


const addToLS = id => {
    const cart = getLocalStorage();
    cart.push(id);
    saveCartToLS(cart);
}


const removeFromLS = id => {
    const cart = getLocalStorage();
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLS(remaining);
}

export {addToLS,getLocalStorage,removeFromLS}