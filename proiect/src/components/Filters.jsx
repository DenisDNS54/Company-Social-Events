import React from "react";

function Filters(){
    return (
        <div>
            Game Night<input type="checkbox" name="game-night" id="game-night" checked/><br></br>
            Party<input type="checkbox" name="game-night" id="game-night" checked="true"/><br></br>
            Team-Building<input type="checkbox" name="game-night" id="game-night" checked="true"/><br></br>
        </div>
    );
}

export default Filters;