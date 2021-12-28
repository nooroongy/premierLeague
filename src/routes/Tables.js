import Table from "../components/Tables/Table"


const Tables = ({ clubs,matchs }) => {


    return <div>
        <Table clubs={clubs} matchs={matchs} round={1}></Table>
    </div>
}

export default Tables