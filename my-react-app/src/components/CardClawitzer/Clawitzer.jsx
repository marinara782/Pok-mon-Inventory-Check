import { useState, useEffect } from "react";
import ClawCard from "./ClawCard.png";
import "./Clawitzer.css";

function Clawitzer() {
    const [inventoryClaw, setInventoryClaw] = useState(() => {
        const saved = localStorage.getItem("inventoryClaw");
        return saved !== null ? Number(saved) : 0;
    });

    useEffect(() => {
        localStorage.setItem("inventoryClaw", inventoryClaw);
    }, [inventoryClaw]);

    const increaseClaw = () => {
        setInventoryClaw(inventoryClaw + 1);
    }

    const decreaseClaw = () => {
        if (inventoryClaw > 0) {
            setInventoryClaw(inventoryClaw - 1);
        }
    };
    
    return(
        <div className = "card-CardThree">
            <img className = "card-image" src = {ClawCard} alt = "Clawitzer"></img>
            <h2 className = "card-title">Clawitzer</h2>
            <h3 className = "card-inventory">Inventory Count: {inventoryClaw}</h3>

            <button className = "card-add" onClick={increaseClaw}>Add</button>
            <button className = "card-remove" onClick={decreaseClaw}>Remove</button>
        </div>
    )
}

export default Clawitzer