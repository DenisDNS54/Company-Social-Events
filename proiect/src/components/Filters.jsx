import React from "react";

function Filters(){
    return (
        <div>
            Game Night<input type="checkbox" name="game-night" id="game-night" checked/><br></br>
            Meeting<input type="checkbox" name="meeting" id="meeting" checked="true"/><br></br>
            Party<input type="checkbox" name="party" id="party" checked="true"/><br></br>
            Team-Building<input type="checkbox" name="team-building" id="team-building" checked="true"/><br></br>
            Vacation<input type="checkbox" name="vacation" id="vacation" checked="true"/><br></br>
        </div>
    );
}

export default Filters;