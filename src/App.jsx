import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Glasses from './components/Glasses'
import './components/Glass.css'
import { addToLS, getLocalStorage, removeFromLS } from './utilities/localStorage'
import Cart from './components/Cart'




function App() {
  const [glasses,setGlasses] = useState([])
  const [cart, setCart] = useState([]);

  const handleCart = (glassCart) => {
    const newCart = [...cart, glassCart];
    setCart(newCart);
    addToLS(glassCart.id)
  }

  const handleRemoveFromCart = id => {
    const remainingCart = cart.filter(glass => glass.id !== id);
    setCart(remainingCart)
    removeFromLS(id)
  }


  useEffect(() => {
    fetch('Sunglass.json')
    .then(res => res.json())
    .then(data => setGlasses(data))
  },[])

  useEffect(() => {
    console.log(glasses.length);
    if(glasses.length){
      const storedCart = getLocalStorage();
      console.log({storedCart,glasses});

      const savedCart = [];

      for(const id of storedCart){
        console.log(id);
        const glass = glasses.find(glass => glass.id === id);
        console.log(glass);
        if(glass){
            savedCart.push(glass);
        }
      }


      setCart(savedCart)

    }

  },[glasses])


  return (
    <>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      <div className="card">
        {
          glasses.map((glass,index) => <Glasses key={index} handleCart={handleCart} sunglass={glass}></Glasses>)
        }
      </div>
      
    </>
  )
}
export default App;
