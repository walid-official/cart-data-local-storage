import PropTypes from "prop-types";
const Cart = ({cart,handleRemoveFromCart}) => {
    console.log(cart);
    return (
        <div>
            <h1>Cart: {cart.length}</h1>
            {/* 
             */}
             {
                cart.map(price => <div key={price.id}>
                    <h2 >Cart-Price: {price.price}</h2>
                    <button onClick={() => handleRemoveFromCart(price.id)}>Remove</button>
                </div>)
             }
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}


export default Cart;