const Table = ({ teams }) => {
    return <>
        {teams.map((v, i) => <div key={i}>Table {v}</div>)}
        "람"
    </>
}

export default Table