import '../../css/table.css'

const Table = ({ clubs }) => {
    return <div>
        Table component
        {clubs.map((v, i) => 
        <div
            className={'test'+i%3}
            key={i}>{v}</div>)}
    </div>
}

export default Table