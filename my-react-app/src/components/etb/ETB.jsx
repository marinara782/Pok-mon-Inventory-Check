import { useState } from "react";
import "./ETB.css";
import etb from './FlamesETB.png';
function ETB(){
    const [inventoryETB, setInventoryETB] = useState(0);


    const increaseETB = () => {
        setInventoryETB(inventoryETB + 1);
    };

    const decreaseETB = () => {
        if (inventoryETB > 0) {
         setInventoryETB(inventoryETB - 1);    
        };// Make sure to create an error message here to state we have no more inventory!
    };

    return(
        <div className = "card">
            <img className = "card-image" src = {etb} alt = "Phatsmal Flames ETB"></img>
            <h2 className = "card-title">Phantasmal Flames Pokèmon Center ETB</h2>
            <h3 className = "card-inventory"> Inventory Count: {inventoryETB}</h3>
        
            <button className = "card-add" onClick={increaseETB}>Add</button>
            <button className = "card-remove" onClick={decreaseETB}>Remove</button>
        </div>
    )
}
export default ETB