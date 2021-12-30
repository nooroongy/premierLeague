import { useState } from "react"
import Table from "../components/Tables/Table"
import '../css/tables.css'

const Tables = ({ clubs,matchs }) => {
    const currentRound = 2;
    const [round,setRound] = useState(2);

    const onRoundBtnClick = (e)=>{
        if(e.target.innerText === 'arrow_left'){
            if(round>1)
            setRound(round-1);
        }else{
            console.log(round,currentRound+1)
            if(round<currentRound)
            setRound(round+1);
        }
    }

    return <div className="tables__wrap">
        <span> <button onClick={onRoundBtnClick} >arrow_left</button> {round} <button onClick={onRoundBtnClick} >arrow_right</button></span>
        <Table clubs={clubs} matchs={matchs} round={round}></Table>
    </div>
}

export default Tables