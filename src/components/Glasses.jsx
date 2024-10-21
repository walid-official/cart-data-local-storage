import PropTypes from 'prop-types';
import './Glass.css'

const Glasses = ({sunglass,handleCart}) => {
    console.log(sunglass);
    return (
        <div className="">
            <ul className='card-border'>
                <h5>Id: {sunglass.id}</h5>
                <h5>Brand: {sunglass.brand}</h5>
                <h5>Model: {sunglass.model}</h5>
                <h5>Color: {sunglass.color}</h5>
                <button onClick={() => handleCart(sunglass)}>Add Product</button>
            </ul>
        </div>
    );
};

Glasses.propTypes = {
    sunglass: PropTypes.object.isRequired,
    handleCart: PropTypes.func.isRequired
}

export default Glasses;