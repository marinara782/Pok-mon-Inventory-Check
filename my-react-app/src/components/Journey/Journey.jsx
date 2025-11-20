import { useState, useEffect } from "react";
import JourneyETB from './JourneyETB.png';
import "./Journey.css";

function Journey() {

    const [inventoryJourney, setInventoryJourney] = useState(() => {
        const saved = localStorage.getItem("inventoryJourney"); 
        return saved !== null ? Number(saved) : 0;
    });

    useEffect(() => {
        localStorage.setItem("inventoryJourney", inventoryJourney);
    }, [inventoryJourney]);

    const increaseJourney = () => {
        setInventoryJourney(inventoryJourney + 1);
    };

    const decreaseJourney = () => {
        if (inventoryJourney > 0) {
            setInventoryJourney(inventoryJourney - 1);
        }
    };

    return (
        <div className="card-six">
            <img className="card-image" src={JourneyETB} alt="Journey Together ETB" />
            <h2 className="card-title">Journey Together ETB</h2>
            <h3 className="card-inventory">Inventory Count: {inventoryJourney}</h3>

            <button className="card-add" onClick={increaseJourney}>Add</button>
            <button className="card-remove" onClick={decreaseJourney}>Remove</button>
        </div>
    );
}

export default Journey;
