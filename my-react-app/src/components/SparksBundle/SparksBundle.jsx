import { useState, useEffect } from "react";
import "./SparksBundle.css"
import SparkBundle from './SparksBundle.png'

function SparksBundle(){
    const [inventorySparkBundle, setInventorySparkBundle] = useState(() => {
        const saved = localStorage.getItem("inventorySparkBundle");
        return saved != null ? Number(saved) : 0;
    });

    // Save to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem("inventorySparkBundle", inventorySparkBundle);
    }, [inventorySparkBundle]);

    // Sparks Bundle
    const increaseSparkBundle = () => {
        setInventorySparkBundle(inventorySparkBundle + 1);
    };

    const decreaseSparkBundle = () => {
        if(inventorySparkBundle > 0){
            setInventorySparkBundle(inventorySparkBundle - 1);
        }; // Error message here
    };

    return(
        <div className = "card-five">
            <img className = "card-image" src = {SparkBundle} alt = "Surging Sparks Booster Bundle"></img>
            <h2 className = "card-title">Surging Sparks Booster Bundle</h2>
            <h3 className = "card-inventory">Inventory Count: {inventorySparkBundle} </h3>

            <button className = "card-add" onClick={increaseSparkBundle}>Add</button>
            <button className = "card-remove" onClick={decreaseSparkBundle}>Remove</button>
        </div>
    )

}

export default SparksBundle