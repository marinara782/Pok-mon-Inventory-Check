import { useState, useEffect } from "react";
import PrismaticTins from './PrismaticTins.png';
import "./Prismatic.css";

function Prismatic(){

    const [inventoryPrismatic, setInventoryPrismatic] = useState(() => {
        const saved = localStorage.getItem("inventoryPrismatic");
        return saved !== null ? Number(saved) : 0;
    });

    useEffect(() => {
        localStorage.setItem("inventoryPrismatic", inventoryPrismatic);
    }, [inventoryPrismatic]);

    const increasePrismatic = () => {
        setInventoryPrismatic(inventoryPrismatic + 1);
    };

    const decreasePrismatic = () => {
        if (inventoryPrismatic > 0){
            setInventoryPrismatic(inventoryPrismatic - 1);
        }
    };

    return(
        <div className = "card-eight">
            <img className = "card-image" src = {PrismaticTins} alt = "Prismatic Tins"></img>
            <h2 className = "card-title">Prismatic Tins</h2>
            <h3 className = "card-inventory">Inventory Count: {inventoryPrismatic}</h3>

            <button className = "card-add" onClick={increasePrismatic}>Add</button>
            <button className = "card-remove" onClick={decreasePrismatic}>Remove</button>
        </div>
    )
}

export default Prismatic