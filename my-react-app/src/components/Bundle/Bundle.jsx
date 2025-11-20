import { useState, useEffect } from "react";
import "./Bundle.css"
import bundle from './FlamesBundle.png'

function Bundle(){
    const [inventoryBundle, setInventoryBundle] = useState(() => {
        const saved = localStorage.getItem("inventoryBundle");
        return saved !== null ? Number(saved) : 0;
    });

    useEffect(() => {
        localStorage.setItem("inventoryBundle", inventoryBundle);
    },[inventoryBundle]);

    // Bundle Inventory
    const increaseBundle = () => {
        setInventoryBundle(inventoryBundle + 1);
    };

    const decreaseBundle = () =>{
        if(inventoryBundle > 0){
            setInventoryBundle(inventoryBundle - 1);
        }; // Error message here
    };

    return (
        <div className = "card-three">
            <img className = "card-image" src = {bundle} alt = "Phantasmal Flames Bundle"></img>
            <h2 className = "card-title">Pokèmon Center Phantasmal Flames Booster Bundle</h2>
            <h3 className = "card-inventory">Inventory Count: {inventoryBundle}</h3>
        
            <button className = "card-add" onClick={increaseBundle}>Add</button>
            <button className = "card-remove" onClick={decreaseBundle}>Remove</button>
        </div>
    )
}

export default Bundle