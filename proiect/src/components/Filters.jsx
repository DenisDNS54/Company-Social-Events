import React from "react";
import "../styles/Filters.css";

function Filters(){
    return (
        <div>
            <h3>Filters</h3>
            Game Night<input type="checkbox" name="game-night" id="game-night" checked/><br></br>
            Meeting<input type="checkbox" name="meeting" id="meeting" checked/><br></br>
            Party<input type="checkbox" name="game-night" id="game-night" checked="true"/><br></br>
            Team-Building<input type="checkbox" name="game-night" id="game-night" checked="true"/><br></br>
            Vacation<input type="checkbox" name="vacation" id="vacation" checked/><br></br>

        </div>
    );
}

export default Filters;