import Table from "../components/Tables/Table"
import '../css/tables.css'

const Tables = ({ clubs,matchs }) => {


    return <div className="tables__wrap">
        <Table clubs={clubs} matchs={matchs} round={1}></Table>
    </div>
}

export default Tables