import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state scode here */
  const[cart, setCart] = useState({});
  const[price, setPrice] = useState(0)
  const updateCart =(uid) =>{
    let newCart = cart;
    if(newCart[uid]){
      newCart[uid]+=1;
    }
    else{
      newCart[uid] = 1;
    }
    setCart({...newCart});
  }

  return(
    <>
    <div className="App">
    <div>
      <h1>Jorge's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      
      {bakeryData.map((item, index) => { // TODO: map bakeryData to BakeryItem components
        return(
          <BakeryItem updateCart={updateCart} item={item} index={index} price={price} setPrice={setPrice} />
         // replace with BakeryItem component
        )
      })}

      </div>
      <div>
      <h2>Cart</h2>
      
      {Object.keys(cart).map((key) =>{
        return(
          <>
          <div>
          {cart[key]+"x " +bakeryData[key].name}
          </div>
          </>
        )

      })}
      <h4>Total:</h4>
      <div>${price}</div>
      </div>
    </div>
    </>
  );
}

export default App;
