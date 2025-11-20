import { useState, useEffect } from "react";
import CrabCard from './CrabCard.png';
import "./Crabominable.css";

function Crabominable(){
    const [inventoryCrab, setInventoryCrab] = useState (() => {
        const saved = localStorage.getItem("inventoryCrab");
        return saved !== null ? Number(saved) : 0;
    });

    useEffect(() => {
        localStorage.setItem("inventoryCrab", inventoryCrab);
    }, [inventoryCrab]);

    const increaseCrab = () => {
        setInventoryCrab(inventoryCrab + 1);
    };

    const decreaseCrab = () => {
        if (inventoryCrab > 0) {
            setInventoryCrab(inventoryCrab - 1);
        }
    };

    return(
        <div className = "card-cardOne">
            <img className = "card-image" src = {CrabCard} alt = "Crabominable Card"></img>
            <h2 className = "card-title">Crabominable Holiday Calendar</h2>
            <h3 className = "card-inventory">Inventory Count: {inventoryCrab}</h3>

            <button className = "card-add" onClick={increaseCrab}>Add</button>
            <button className = "card-remove" onClick = {decreaseCrab}>Remove</button>
        </div>
    )
}

export default Crabominable