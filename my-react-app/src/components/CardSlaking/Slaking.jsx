import { useState, useEffect } from "react";
import SlakingCard from './SlakingCard.png';
import "./Slaking.css";

function Slaking(){
    const [inventorySlak, setInventorySlak] = useState(() => {
        const saved = localStorage.getItem("inventorySlak");
        return saved !== null ? Number(saved) : 0;
    });

    useEffect(() => {
        localStorage.setItem("inventorySlak", inventorySlak);
    }, [inventorySlak]);

    const increaseSlak = () => {
        setInventorySlak(inventorySlak + 1);
    };

    const decreaseSlak = () => {
        if (inventorySlak > 0) {
            setInventorySlak(increaseSlak - 1);
        }
    };

    return(
        <div className = "card-CardTwo">
            <img className = "card-image" src = {SlakingCard} alt = "Slaking ex"></img>
            <h2 className = "card-title">Slaking ex</h2>
            <h3 className = "card-inventory">Inventory Count: {inventorySlak}</h3>

            <button className = "card-add" onClick={increaseSlak}>Add</button>
            <button className = "card-remove" onClick={decreaseSlak}>Remove</button>
        </div>
    )
}

export default Slaking