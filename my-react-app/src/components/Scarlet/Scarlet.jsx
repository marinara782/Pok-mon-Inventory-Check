import { useState, useEffect} from "react";
import ScarletETB from './ScarletETB.png';
import "./Scarlet.css";

function Scarlet(){

    const [inventoryScarlet, setInventoryScarlet] = useState(() => {
        const saved = localStorage.getItem("inventoryScarlet");
        return saved !== null ? Number(saved) : 0;
    });

    useEffect(() => {
        localStorage.setItem("inventoryScarlet", inventoryScarlet);
    }, [inventoryScarlet]);

    const increaseScarlet = () => {
        setInventoryScarlet(inventoryScarlet + 1);
    };

    const decreaseScarlet = () => {
        if(inventoryScarlet > 0){
            setInventoryScarlet(inventoryScarlet - 1);
        }
    };

    return(
        <div className = "card-seven">
            <img className = "card-image" src = {ScarletETB} alt = "Scarlet and Violet ETB"></img>
            <h2 className = "card-title">Scarlet & Violet ETB</h2>
            <h3 className = "card-inventory">Inventory Count: {inventoryScarlet}</h3>

            <button className = "card-add" onClick={increaseScarlet}>Add</button>
            <button className = "card-remove" onClick={decreaseScarlet}>Remove</button>
        </div>
    )
}

export default Scarlet