import Round from "../components/Results/Round";
import Board from "../components/Results/Board";
import { useState, useEffect } from "react";

const Results = ({ clubs }) => {
    const [round, changeRound] = useState("1R");
    return (
        <>
            <Round></Round>
            <Board roundObj={round}></Board>
        </>
    )
}

export default Results