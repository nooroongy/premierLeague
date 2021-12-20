const Table = ({ teams }) => {
    return <>
        {teams.map((v, i) => <div key={i}>Table {v}</div>)}
    </>
}

export default Table