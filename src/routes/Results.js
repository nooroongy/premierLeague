import Round from "../components/Results/Round";
import Board from "../components/Results/Board";
import { useState, useEffect } from "react";

const Results = ({ clubs }) => {
    const [round, changeRound] = useState(1);

    const roundInfo = (arg) => {
        changeRound(arg);
    }
    return (
        <>
            <Round roundInfo={roundInfo}></Round>
            <Board roundObj={round}></Board>
        </>
    )
}

export default Results