import { useState } from "react";
import "./Booster.css"
import booster from './FlamesBoost.png'

function Booster(){
    const [inventoryBooster, setInventoryBooster] = useState(0);

    //Booster Inventory
    const increaseBooster = () => {
        setInventoryBooster(inventoryBooster + 1);
    };

    const decreaseBooster = () => {
        if (inventoryBooster > 0) {
         setInventoryBooster(inventoryBooster - 1);    
        };// Make sure to create an error message here to state we have no more inventory!
    };

    return(
       <div className = "card-two">
                <img className = "card-image" src = {booster} alt = "Surging Sparks ETB"></img>
                <h2 className = "card-title"> Phantasmal Flames Pokèmon Center Booster Box</h2>
                <h3 className = "card-inventory">Inventory Count: {inventoryBooster}</h3>

                <button className = "card-add" onClick={increaseBooster}>Add</button>
                <button className = "card-remove" onClick={decreaseBooster}>Remove</button>
            </div> 
    )
}
export default Booster