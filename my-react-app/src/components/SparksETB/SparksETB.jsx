import { useState } from "react";
import "./Sparks.css"
import sparkETB from './SparksETB.png'

function SparksETB(){
    const [inventorySparkETB, setInventorySparkETB] = useState(0);

    // Surging Inventory
    const increaseSparkETB = () => {
        setInventorySparkETB(inventorySparkETB + 1);
    };

    const decreaseSparkETB = () => {
        if(inventorySparkETB > 0){
          setInventorySparkETB(inventorySparkETB - 1);
        }; // Error message here
    };

    return (
         <div className = "card-four">
            <img className = "card-image" src = {sparkETB} alt = "Surging Sparks ETB"></img>
            <h2 className = "card-title">Surging Sparks ETB</h2>
            <h3 className = "card-inventory">Inventory Count: {inventorySparkETB}</h3>
        
            <button className = "card-add" onClick={increaseSparkETB}>Add</button>
            <button className = "card-remove" onClick={decreaseSparkETB}>Remove</button>
        </div>
    )
}

export default SparksETB